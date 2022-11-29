import query from "../config/database.config";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { getByUser } from "./getByUser.models";

export async function register(username, password) {
    try {
        const [user] = await query("SELECT * FROM user WHERE user.username = ?", [username]);
        if (user) {
            return { error: "Username is already in use", success: false };
        }
        let hash = await bcrypt.hash(password, 10);
        const uuid = uuidv4();
        await query("INSERT INTO user (username , password , uuid) VALUES ( ? , ? , ?)", [
            username,
            hash,
            uuid,
        ]);
        return { data: "succesfully registered", success: true };
    } catch (err) {
        console.error(err);
        return { error: "Something went wrong 🤷‍♂️", success: false };
    }
}

export async function login(username, password) {
    try {
        const [user] = await query("SELECT * FROM user WHERE user.username = ?", [username]);
        if (!user) {
            return { error: "invalid Username or password", success: false };
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) return { error: "Invalid username or Password", success: false };
        const { data, error } = await getByUser(user.UUID);
        if (error) {
            console.error(err);
            return { error: "Something went wrong 🤷‍♂️", success: false };
        }
        return {
            data: {
                user: { username: user.username, id: user.UUID },
                favorites: data,
            },
            success: true,
            id: user.id,
        };
    } catch (err) {
        console.error(err);
        return { error: "Something went wrong 🤷‍♂️", success: false };
    }
}

import express from "express";
import User from "../models/users.model";
// import validateData from "../middleware/validateUserData.middleware";
const router = express.Router();

router.put("/register", async (req, res) => {
    const { username, password } = req.body;
    try {
        const newUser = new User({ username, password });

        await newUser.validate();

        await newUser.save();

        return res.send({ data: "successfully registered", success: true });
    } catch (err) {
        if (err.errors && err.errors.username) {
            return res.send({ error: err.errors.username.message, success: false });
        }
        return res.send({ eror: "something went wrong 🤷‍♂️", success: false });
    }
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username }).exec();
        if (!user) return res.send({ data: "invalid Username or password", success: false });

        const match = await user.verify(password);
        if (!match) return res.send({ data: "invalid username or Password", success: false });

        return res.send({ data: user.sanatize(), success: true });
    } catch (err) {
        return res.send({ eror: "something went wrong 🤷‍♂️", success: false });
    }
});

export default router;

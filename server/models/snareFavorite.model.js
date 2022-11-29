import query from "../config/database.config";

export async function addSnareFavorite(snare) {
    try {
        const [firstSnare] = await query(
            "SELECT * FROM favorite_snare WHERE favorite_snare.uuid = ? AND favorite_snare.module_id = ?",
            [snare.user_id, snare.snare.module_id]
        );
        if (firstSnare) return { error: "Already in favorites", success: false };

        const { insertId } = await query("INSERT INTO favorite_snare SET ? ", [snare.snare]);

        return { data: { ...snare, insertId }, success: true };
    } catch (err) {
        console.error(err);
        return { error: "Something went wrong 🤷‍♂️", success: false };
    }
}

export async function removeSnareFavorite(user_id, module_id) {
    try {
        await query("DELETE FROM favorite_snare WHERE user_id = ? AND module_id = ?", [
            user_id,
            module_id,
        ]);
        return { data: module_id, success: true };
    } catch (err) {
        console.error(err);
        return { error: "Something went wrong 🤷‍♂️", success: false };
    }
}

export async function getByUser(user_id) {
    try {
        const faves = await query(
            "SELECT * FROM favorite_snare WHERE favorite_snare.uuid = ?",
            [user_id]
        );
        return { data: faves, success: true };
    } catch (err) {
        console.error(err);
        return { error: "Something went wrong 🤷‍♂️", success: false };
    }
}

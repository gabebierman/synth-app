import query from "../config/database.config";

export async function addKickFavorite(kick) {
    try {
        const [firstKick] = await query(
            "SELECT * FROM favorite_kick WHERE favorite_kick.uuid = ? AND favorite_kick.module_id = ?",
            [kick.user_id, kick.kick.module_id]
        );
        if (firstKick) return { error: "Already in favorites", success: false };

        const { insertId } = await query("INSERT INTO favorite_kick SET ? ", [kick.kick]);

        return { data: { ...kick, insertId }, success: true };
    } catch (err) {
        console.error(err);
        return { error: "Something went wrong 🤷‍♂️", success: false };
    }
}

export async function removeKickFavorite(user_id, module_id) {
    try {
        await query("DELETE FROM favorite_kick WHERE user_id = ? AND module_id = ?", [
            user_id,
            module_id,
        ]);
        return { data: module_id, success: true };
    } catch (err) {
        console.error(err);
        return { error: "Something went wrong 🤷‍♂️", success: false };
    }
}

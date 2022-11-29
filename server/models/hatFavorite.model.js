import query from "../config/database.config";

export async function addHatFavorite(hat) {
    try {
        const [fistHat] = await query(
            "SELECT * FROM favorite_hat WHERE favorite_hat.uuid = ? AND favorite_hat.module_id = ?",
            [hat.user_id, hat.hat.module_id]
        );
        if (fistHat) return { error: "Already in favorites", success: false };

        const { insertId } = await query("INSERT INTO favorite_hat SET ? ", [hat.hat]);

        return { data: { ...hat, insertId }, success: true };
    } catch (err) {
        console.error(err);
        return { error: "Something went wrong 🤷‍♂️", success: false };
    }
}

export async function removeHatFavorite(user_id, module_id) {
    try {
        await query("DELETE FROM favorite_hat WHERE user_id = ? AND module_id = ?", [
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
        const faves = await query("SELECT * FROM favorite_hatr WHERE favorite_hat.uuid = ?", [
            user_id,
        ]);
        return { data: faves, success: true };
    } catch (err) {
        console.error(err);
        return { error: "Something went wrong 🤷‍♂️", success: false };
    }
}

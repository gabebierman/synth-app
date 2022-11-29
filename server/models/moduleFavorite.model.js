import query from "../config/database.config";

export async function addSynthFavorite(synth) {
    try {
        const [firstSynth] = await query(
            "SELECT * FROM favorite_synthesizer WHERE favorite_synthesizer.uuid = ? AND favorite_synthesizer.module_id = ?",
            [synth.user_id, synth.synth.module_id]
        );
        if (firstSynth) return { error: "Already in favorites", success: false };

        const { insertId } = await query("INSERT INTO favorite_synthesizer SET ? ", [
            synth.synth,
        ]);

        return { data: { ...synth, insertId }, success: true };
    } catch (err) {
        console.error(err);
        return { error: "Something went wrong 🤷‍♂️", success: false };
    }
}

export async function removeSynthFavorite(user_id, module_id) {
    try {
        await query("DELETE FROM favorite_synthesizer WHERE user_id = ? AND module_id = ?", [
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
            "SELECT * FROM favorite_synthesizer WHERE favorite_synthesizer.uuid = ?",
            [user_id]
        );
        return { data: faves, success: true };
    } catch (err) {
        console.error(err);
        return { error: "Something went wrong 🤷‍♂️", success: false };
    }
}

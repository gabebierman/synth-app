import query from "../config/database.config";

export async function getByUser(user_id) {
    try {
        const HatFaves = await query(
            "SELECT * FROM favorite_hat WHERE favorite_hat.uuid = ? ",
            [user_id]
        );
        const SynthFaves = await query(
            "SELECT * FROM favorite_synthesizer WHERE favorite_synthesizer.uuid = ? ",
            [user_id]
        );
        const KickFaves = await query(
            "SELECT * FROM favorite_kick WHERE favorite_kick.uuid = ? ",
            [user_id]
        );
        const SnareFaves = await query(
            "SELECT * FROM favorite_snare WHERE favorite_snare.uuid = ? ",
            [user_id]
        );
        return {
            data: { hat: HatFaves, synth: SynthFaves, kick: KickFaves, snare: SnareFaves },
            success: true,
        };
    } catch (err) {
        console.error(err);
        return { error: "Something went wrong 🤷‍♂️", success: false };
    }
}

import express from "express";
// import validateGifData from "../middleware/validateGifData";
import User from "../models/users.model";
const router = express.Router();

router.put("/addSynth", async (req, res) => {
    const { user_id, ...synth } = req.params;
    try {
        const user = await User.findOne({ _id: user_id }).exec();
        if (!user) return res.send({ succeess: false, data: "invalid user id" });

        user.favorites.push(synth);
        await user.save();
        return res.send({ success: true, data: "sucessfully added" });
    } catch (err) {
        return res.send({ eror: "something went wrong 🤷‍♂️", success: false });
    }
});

router.delete("/delete/:gif_id/:user_id", async (req, res) => {
    const { user_id, gif_id } = req.params;
    try {
        const user = await User.findOne({ _id: user_id }).exec();

        if (!user) return res.send({ success: false, data: "invalid user id" });

        const toRemove = user.favorites.find((gif) => gif.gif_id === gif_id);

        await toRemove.remove();

        await user.save();

        return res.send({ success: true, data: "sucessfully removed" });
    } catch (err) {
        return res.send({ eror: "something went wrong 🤷‍♂️", success: false });
    }
});

router.get("/:user_id", async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.user_id }).exec();

        if (!user) return res.send({ success: true, data: [] });

        return res.send({ success: true, data: user.favorites });
    } catch (err) {
        return res.send({ eror: "something went wrong 🤷‍♂️", success: false });
    }
});

export default router;

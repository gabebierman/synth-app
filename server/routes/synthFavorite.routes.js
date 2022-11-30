import express from "express";
import auth from "../middleware/user/auth.middleware";
import {
    addSynthFavorite,
    getByUser,
    removeSynthFavorite,
} from "../models/synthFavorite.model";
const router = express.Router();

router.put("/addSynth", auth, async (req, res) => {
    const synth = { ...req.body, user_id: req.body.user_id };
    const resObj = await addSynthFavorite(synth);
    return res.send(resObj);
});

router.delete("/delete/:module_id", auth, async (req, res) => {
    const { module_id } = req.params;
    const resObj = await removeSynthFavorite(req.user.id, module_id);
    return res.send(resObj);
});

router.get("/", auth, async (req, res) => {
    const resObj = await getByUser(req.user.id);
    return res.send(resObj);
});

export default router;

import express from "express";
import auth from "../middleware/user/auth.middleware";
import {
    addSnareFavorite,
    getByUser,
    removeSnareFavorite,
} from "../models/snareFavorite.model";
const router = express.Router();

router.put("/addSnare", auth, async (req, res) => {
    const snare = { ...req.body, user_id: req.body.user_id };
    const resObj = await addSnareFavorite(snare);
    return res.send(resObj);
});

router.delete("/delete/:module_id", auth, async (req, res) => {
    const { module_id } = req.params;
    const resObj = await removeSnareFavorite(req.user.id, module_id);
    return res.send(resObj);
});

router.get("/", auth, async (req, res) => {
    const resObj = await getByUser(req.user.id);
    return res.send(resObj);
});

export default router;

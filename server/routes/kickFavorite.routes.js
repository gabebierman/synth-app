import express from "express";
import auth from "../middleware/user/auth.middleware";
import { addKickFavorite, getByUser, removeKickFavorite } from "../models/kickFavorite.model";
const router = express.Router();

router.put("/addKick", auth, async (req, res) => {
    const kick = { ...req.body, user_id: req.body.user_id };
    const resObj = await addKickFavorite(kick);
    return res.send(resObj);
});

router.delete("/delete/:module_id", auth, async (req, res) => {
    const { module_id } = req.params;
    const resObj = await removeKickFavorite(req.user.id, module_id);
    return res.send(resObj);
});

router.get("/", auth, async (req, res) => {
    const resObj = await getByUser(req.user.id);
    return res.send(resObj);
});

export default router;

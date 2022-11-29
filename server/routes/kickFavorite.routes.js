import express from "express";
// import validateGifData from "../middleware/validateGifData";
// import auth from "../middleware/auth.middleware";
import { addKickFavorite, getByUser, removeKickFavorite } from "../models/kickFavorite.model";
const router = express.Router();

router.put("/addKick", async (req, res) => {
    console.log(req.body);
    const kick = { ...req.body, user_id: req.body.user_id };
    const resObj = await addKickFavorite(kick);
    return res.send(resObj);
});

router.delete("/delete/:module_id", async (req, res) => {
    const { module_id } = req.params;
    const resObj = await removeKickFavorite(req.user.id, module_id);
    return res.send(resObj);
});

router.get("/", async (req, res) => {
    const resObj = await getByUser(req.user.id);
    return res.send(resObj);
});

export default router;

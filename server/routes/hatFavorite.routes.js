import express from "express";
// import validateGifData from "../middleware/validateGifData";
import auth from "../middleware/user/auth.middleware";
import { addHatFavorite, getByUser, removeHatFavorite } from "../models/hatFavorite.model";
const router = express.Router();

router.put("/addHat", auth, async (req, res) => {
    const hat = { ...req.body, user_id: req.body.user_id };
    const resObj = await addHatFavorite(hat);
    return res.send(resObj);
});

router.delete("/delete/:module_id", auth, async (req, res) => {
    const { module_id } = req.params;
    const resObj = await removeHatFavorite(req.user.id, module_id);
    return res.send(resObj);
});

router.get("/", auth, async (req, res) => {
    const resObj = await getByUser(req.user.id);
    return res.send(resObj);
});

export default router;

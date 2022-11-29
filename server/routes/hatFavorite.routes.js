import express from "express";
// import validateGifData from "../middleware/validateGifData";
// import auth from "../middleware/auth.middleware";
import { addHatFavorite, getByUser, removeHatFavorite } from "../models/hatFavorite.model";
const router = express.Router();

router.put("/addHat", async (req, res) => {
    console.log(req.body);
    const hat = { ...req.body, user_id: req.body.user_id };
    const resObj = await addHatFavorite(hat);
    return res.send(resObj);
});

router.delete("/delete/:module_id", async (req, res) => {
    const { module_id } = req.params;
    const resObj = await removeHatFavorite(req.user.id, module_id);
    return res.send(resObj);
});

router.get("/", async (req, res) => {
    const resObj = await getByUser(req.user.id);
    return res.send(resObj);
});

export default router;

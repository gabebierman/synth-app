import express from "express";
import { login, register } from "../models/users.model";
import { getByUser } from "../models/moduleFavorite.model";
// import validateData from "../middleware/validateUserData.middleware";
const router = express.Router();
import jwt from "jsonwebtoken";
// import auth from "../middleware/auth.middleware";

router.put("/register", async (req, res) => {
    const { username, password } = req.body;
    const resObj = await register(username, password);
    return res.send(resObj);
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const resObj = await login(username, password);
    if (!resObj.success) return res.send(resObj);
    const token = jwt.sign({ user_id: resObj.id }, process.env.SECRET_KEY, {
        expiresIn: "7d",
    });
    res.cookie("auth", token, { httpOnly: true });
    return res.send({ success: true, data: resObj.data });
});

router.get("/logout", (req, res) => {
    res.clearCookie("auth");
    return res.send({ success: true, data: "successfully logged out" });
});

router.get("/verify", async (req, res) => {
    const resObj = await getByUser(req.user.id);
    if (!resObj.success) return res.send(resObj);
    return res.send({
        success: true,
        data: { user: { username: req.user.username }, favorites: resObj.data },
    });
});

export default router;

import express from "express";
import { login, register } from "../models/users.model";
import validateData from "../middleware/validateUserData.middleware";
const router = express.Router();
import jwt from "jsonwebtoken";

// router.put("/register", validateData, async (req, res) => {
//     const { username, password } = req.body;
//     const resObj = await register(username, password);
//     return res.send(resObj);
// });

router.post("/login", validateData, async (req, res) => {
    const { username, password } = req.body;
    const resObj = await login(username, password);
    if (!resObj.success) return res.send(resObj);
    //sign a jwt with an object {user_id: resObj.id}
    const token = jwt.sign({ usier_id: resObj.id }, process.env.SECRET_KEY, {
        expiresIn: "7d",
    });
    //attach it to a cookie on the response
    res.cookie("auth", token, { httpOnly: true });
    //send the response
    return res.send({ success: true, data: resObj.data });
});

router.get("/logout", (res) => {
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

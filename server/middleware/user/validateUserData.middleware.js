export default function validateData(req, res, next) {
    const { username, password } = req.body;
    if (!username || username.length < 4 || username.length > 20) {
        return res.send({ error: "Username does not meet requirements", success: false });
    }
    if (!password || password.length < 8 || password.length > 20) {
        return res.send({ error: "Password does not meet requirements", success: false });
    }
    return next();
}

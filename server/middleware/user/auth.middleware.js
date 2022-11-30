import passport from "passport";

export default function auth(req, res, next) {
    passport.authenticate("jwt", (err, user, info) => {
        if (err || !user) {
            return res.send({ error: "Unable to validate user", success: false });
        }
        req.user = user;
        return next();
    })(req, res, next);
}

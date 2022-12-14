import express from "express";
import userRoutes from "./server/routes/users.routes";
import hatFavoriteRoutes from "./server/routes/hatFavorite.routes";
import kickFavoriteRoutes from "./server/routes/kickFavorite.routes";
import snareFavoriteRoutes from "./server/routes/snareFavorite.routes";
import synthFavoriteRoutes from "./server/routes/synthFavorite.routes";
import passport from "./server/config/passport.config";
import cookieParser from "cookie-parser";
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/build"));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use("/api/users", userRoutes);
app.use("/api/synthfavorites", synthFavoriteRoutes);
app.use("/api/hatfavorites", hatFavoriteRoutes);
app.use("/api/kickfavorites", kickFavoriteRoutes);
app.use("/api/snarefavorites", snareFavoriteRoutes);
if (process.env.NODE_ENV === "production") {
    app.enable("trust proxy");
    app.use((req, res, next) => {
        req.secure ? next() : res.redirect("https://" + req.headers.host + req.url);
    });
}
app.get("*", (req, res) => {
    return res.sendFile(__dirname + "/build/index.html");
});

app.listen(PORT, () => console.log(`synth-app backend functional. Port ${PORT}`));

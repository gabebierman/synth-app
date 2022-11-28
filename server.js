import express from "express";
const app = express();
import userRoutes from "./server/routes/users.routes";
import moduleFavoritesRoute from "./server/routes/moduleFavorite.routes";
import mongoose from "mongoose";
import mongooseConf from "./server/config/database.config";
const PORT = process.env.PORT;
mongooseConf(mongoose);

app.use(express.static(__dirname + "/build"));
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/modules", moduleFavoritesRoute);
if (process.env.NODE_ENV === "production") {
    app.enable("trust proxy");
    app.use((req, res, next) => {
        req.secure ? next() : res.redirect("https://" + req.headers.host + req.url);
    });
}
app.get("*", (req, res) => {
    return res.sendFile(__dirname + "/build/index.html");
});

app.listen(PORT, () => console.log(`gif-app backend functional. Port ${PORT}`));

import express from "express";
import mysql from "mysql";
import mysqlQuery from "./server/config/mysql.config";
import mongoose from "mongoose";
import mongooseConf from "./server/config/database.config";
const app = express();
const PORT = process.env.PORT || 8080;
mongooseConf(mongoose);

app.use(express.static(__dirname + "/build"));
app.use(express.json());
// app.use("/api/users", userRoutes);
// app.use("/api/favorites", favoritesRoutes);
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

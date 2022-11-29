import mysql from "mysql";
import util from "util";
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    port: process.env.DB_PORT,
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error("Error connecting to the database");
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
            console.error("Database connection was closed");
        }
        if (err.code === "ER_CON_COUNT_ERROR") {
            console.error("Database has too many connections");
        }
        if (err.code === "ECONNREFUSED") {
            console.error("Database connection was refused");
        }
    }
    if (connection) connection.release();
    return;
});

const query = util.promisify(pool.query).bind(pool);

export default query;

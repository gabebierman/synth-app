import mysql from "mysql";
import util from "util";
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_SCHEMA,
    port: process.env.MYSQL_PORT,
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

const mysqlQuery = util.promisify(pool.query).bind(pool);

export default mysqlQuery;

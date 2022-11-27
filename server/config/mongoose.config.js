export default function mongooseConf(mongoose) {
    function gracefulExit() {
        mongoose.connection.close(() => {
            console.log(`Mongoose connection has disconnected through app termination`);
            process.exit(0);
        });
    }

    mongoose.connection.on("connected", (ref) => {
        console.log(`Successfully connected to ${process.env.NODE_ENV} database on startup `);
    });

    mongoose.connection.on("error", (err) => {
        console.error(
            `Failed to connect to ${process.env.NODE_ENV} database on startup `,
            err
        );
    });

    mongoose.connection.on("disconnected", () => {
        console.log(
            `Mongoose default connection to ${process.env.NODE_ENV} database disconnected`
        );
    });

    process.on("SIGINT", gracefulExit).on("SIGTERM", gracefulExit);
    mongoose.connect(process.env.MONGO_URI, (error) => {
        if (error) throw error;
    });
}

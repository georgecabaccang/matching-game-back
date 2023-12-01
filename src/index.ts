require("dotenv").config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import scoreRoutes from "./routes/scoreRoutes";

const app = express();

// mongoose setup to connect with MongoDB
mongoose.connect(process.env.MONGO_DB);
const database = mongoose.connection;

database.on("error", (error) => {
    console.log(error.message);
});
database.once("open", () => console.log("Connected to DB."));
// -----------------------------------------------------------------

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors({ origin: process.env.CORS_ORIGIN }));

app.use("/", (request, response) => {
    response.send("Test");
});
app.use("/scores", scoreRoutes);

export default app;

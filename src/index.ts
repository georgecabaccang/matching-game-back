require("dotenv").config();

import express, { Request, Response } from "express";
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

app.get("/", (request: Request, response: Response) => {
    response.send("Test");
});
app.use("/scores", scoreRoutes);

app.listen("8080", () => {
    return console.log(`Server is listening on 8080`);
});

export default app;

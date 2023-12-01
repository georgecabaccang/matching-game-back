"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const scoreRoutes_1 = __importDefault(require("./routes/scoreRoutes"));
const app = (0, express_1.default)();
// mongoose setup to connect with MongoDB
mongoose_1.default.connect(process.env.MONGO_DB);
const database = mongoose_1.default.connection;
database.on("error", (error) => {
    console.log(error.message);
});
database.once("open", () => console.log("Connected to DB."));
// -----------------------------------------------------------------
app.use((0, cors_1.default)({ origin: "https://matching-game-lovat.vercel.app/" }));
app.use(express_1.default.json({ limit: "50mb" }));
app.use(express_1.default.urlencoded({ limit: "50mb", extended: true }));
app.get("/", (request, response) => {
    response.send("Test");
});
app.use("/scores", scoreRoutes_1.default);
app.listen("8080", () => {
    return console.log(`Server is listening on 8080`);
});
exports.default = app;
//# sourceMappingURL=index.js.map
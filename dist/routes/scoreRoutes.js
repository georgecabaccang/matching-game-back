"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const scoreRoutes = express_1.default.Router();
const scoresController_js_1 = require("../controllers/scoresController.js");
scoreRoutes.get("/get-scores/:mode/:size", scoresController_js_1.getScores);
scoreRoutes.post("/add-score", scoresController_js_1.addScore);
scoreRoutes.delete("/delete-score", scoresController_js_1.deleteScore);
exports.default = scoreRoutes;
//# sourceMappingURL=scoreRoutes.js.map
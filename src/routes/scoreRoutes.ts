import express from "express";

const scoreRoutes = express.Router();

import { addScore, deleteScore, getScores } from "../controllers/scoresController.js";

scoreRoutes.get("/get-scores/:mode/:size", getScores);
scoreRoutes.post("/add-score", addScore);
scoreRoutes.delete("/delete-score", deleteScore);

export default scoreRoutes;

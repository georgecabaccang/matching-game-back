import { Request, Response } from "express";
import {
    IScoreSchema,
    ScoreColorsMode,
    ScoreImagesMode,
    ScoreNumbersMode,
} from "../models/scoreModel.js";
import { Model } from "mongoose";

export const addScore = async (request: Request, response: Response) => {
    try {
        const scoreDetails: IScoreSchema = request.body.payload;
        let mode: Model<IScoreSchema>;
        switch (scoreDetails.mode) {
            case "numbers":
                mode = ScoreNumbersMode;
                break;
            case "colors":
                mode = ScoreColorsMode;
                break;
            case "images":
                mode = ScoreImagesMode;
                break;
        }

        const newScore = new mode<IScoreSchema>({
            name: scoreDetails.name,
            time: scoreDetails.time,
            mode: scoreDetails.mode,
            size: scoreDetails.size,
        });
        await newScore.save();
        return response.send(newScore);
    } catch (error) {
        if (error) {
            // response.sendStatus(500);
            response.send({ message: error.message });
        }
    }
};

export const getScores = async (request: Request, response: Response) => {
    try {
        const scoreDetails = request.params;

        let mode: Model<IScoreSchema>;
        switch (scoreDetails.mode) {
            case "numbers":
                mode = ScoreNumbersMode;
                break;
            case "colors":
                mode = ScoreColorsMode;
                break;
            case "images":
                mode = ScoreImagesMode;
                break;
        }

        const scores = await mode.find({ size: scoreDetails.size }).sort({ time: "asc" }).limit(10);
        return response.send(scores);
    } catch (error) {
        if (error) {
            // response.sendStatus(404);
            response.send({ message: error.message });
        }
    }
};

export const deleteScore = async (request: Request, response: Response) => {
    try {
        const scoreDetails = request.body;

        let mode: Model<IScoreSchema>;
        switch (scoreDetails.mode) {
            case "numbers":
                mode = ScoreNumbersMode;
                break;
            case "colors":
                mode = ScoreColorsMode;
                break;
            case "images":
                mode = ScoreImagesMode;
                break;
        }

        const reponse = await mode.findByIdAndDelete(scoreDetails.scoreId);
        return response.send(scoreDetails);
    } catch (error) {
        if (error) {
            // response.sendStatus(404);
            response.send({ message: error.message });
        }
    }
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteScore = exports.getScores = exports.addScore = void 0;
const scoreModel_js_1 = require("../models/scoreModel.js");
const addScore = async (request, response) => {
    try {
        const scoreDetails = request.body.payload;
        let mode;
        switch (scoreDetails.mode) {
            case "numbers":
                mode = scoreModel_js_1.ScoreNumbersMode;
                break;
            case "colors":
                mode = scoreModel_js_1.ScoreColorsMode;
                break;
        }
        const newScore = new mode({
            name: scoreDetails.name,
            time: scoreDetails.time,
            mode: scoreDetails.mode,
            size: scoreDetails.size,
        });
        await newScore.save();
        return response.send(newScore);
    }
    catch (error) {
        if (error) {
            // response.sendStatus(500);
            response.send({ message: error.message });
        }
    }
};
exports.addScore = addScore;
const getScores = async (request, response) => {
    try {
        const scoreDetails = request.params;
        let mode;
        switch (scoreDetails.mode) {
            case "numbers":
                mode = scoreModel_js_1.ScoreNumbersMode;
                break;
            case "colors":
                mode = scoreModel_js_1.ScoreColorsMode;
                break;
        }
        const scores = await mode.find({ size: scoreDetails.size }).sort({ time: "asc" }).limit(10);
        return response.send(scores);
    }
    catch (error) {
        if (error) {
            // response.sendStatus(404);
            response.send({ message: error.message });
        }
    }
};
exports.getScores = getScores;
const deleteScore = async (request, response) => {
    try {
        const scoreDetails = request.body;
        let mode;
        switch (scoreDetails.mode) {
            case "numbers":
                mode = scoreModel_js_1.ScoreNumbersMode;
                break;
            case "colors":
                mode = scoreModel_js_1.ScoreColorsMode;
                break;
        }
        const reponse = await mode.findByIdAndDelete(scoreDetails.scoreId);
        return response.send(scoreDetails);
    }
    catch (error) {
        if (error) {
            // response.sendStatus(404);
            response.send({ message: error.message });
        }
    }
};
exports.deleteScore = deleteScore;
//# sourceMappingURL=scoresController.js.map
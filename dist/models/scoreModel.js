"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreImagesMode = exports.ScoreColorsMode = exports.ScoreNumbersMode = void 0;
const mongoose_1 = require("mongoose");
const ScoreSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    time: { type: Number, required: true },
    mode: { type: String, required: true },
    size: { type: Number, required: true },
}, { timestamps: true });
exports.ScoreNumbersMode = (0, mongoose_1.model)("ScoreNumbersMode", ScoreSchema);
exports.ScoreColorsMode = (0, mongoose_1.model)("ScoreColorsMode", ScoreSchema);
exports.ScoreImagesMode = (0, mongoose_1.model)("ScoreImagesMode", ScoreSchema);
//# sourceMappingURL=scoreModel.js.map
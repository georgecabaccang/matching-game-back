import { Schema, model } from "mongoose";

export interface IScoreSchema {
    name: string;
    time: number;
    mode: string;
    size: number;
}

const ScoreSchema = new Schema<IScoreSchema>(
    {
        name: { type: String, required: true },
        time: { type: Number, required: true },
        mode: { type: String, required: true },
        size: { type: Number, required: true },
    },
    { timestamps: true }
);

export const ScoreNumbersMode = model<IScoreSchema>("ScoreNumbersMode", ScoreSchema);
export const ScoreColorsMode = model<IScoreSchema>("ScoreColorsMode", ScoreSchema);
export const ScoreImagesMode = model<IScoreSchema>("ScoreImagesMode", ScoreSchema);

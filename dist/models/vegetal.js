"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const vegetalSchema = new mongoose_1.default.Schema({
    type: String,
    nombre: Number,
    surface: Number
});
const Vegetal = mongoose_1.default.model('Vegetal', vegetalSchema);
exports.default = Vegetal;

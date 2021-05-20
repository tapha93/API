"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const espacesvegetalSchema = new mongoose_1.default.Schema({
    type: String,
    properties: {
        libelle: String,
        codeclassification: String,
        uniteminimalecollecte: String,
        gid: String,
    },
    geometry: {
        type: { type: String },
        coordinates: [[[String]]],
    }
});
const EspacesVegetal = mongoose_1.default.model('EspacesVegetal', espacesvegetalSchema);
exports.default = EspacesVegetal;

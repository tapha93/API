"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const espacesvegetalservice_1 = require("../services/espacesvegetalservice");
const express_1 = __importDefault(require("express"));
const EspacesVegetalRouter = express_1.default();
EspacesVegetalRouter.get('/api/espacesvegetal', espacesvegetalservice_1.EspacesVegetalService.getAllVegetal);
EspacesVegetalRouter.post('/api/espacesvegetal', espacesvegetalservice_1.EspacesVegetalService.createEspacesVegetal);
exports.default = EspacesVegetalRouter;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vegetalservice_1 = require("../services/vegetalservice");
const express_1 = __importDefault(require("express"));
const VegetalRouter = express_1.default();
VegetalRouter.get('/api/vegetal', vegetalservice_1.VegetalService.getAllVegetal);
VegetalRouter.post('/api/vegetal', vegetalservice_1.VegetalService.createVegetal);
VegetalRouter.get('/api/vegetal/:id', vegetalservice_1.VegetalService.getOneVegetal);
VegetalRouter.put('/api/vegetal/:id', vegetalservice_1.VegetalService.putOneVegetal);
VegetalRouter.delete('/api/vegetal/:id', vegetalservice_1.VegetalService.deleteOneVegetal);
exports.default = VegetalRouter;

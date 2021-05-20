"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VegetalService = void 0;
const vegetal_1 = __importDefault(require("../models/vegetal"));
exports.VegetalService = {
    createVegetal: (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
        const vegetal = new vegetal_1.default(req.body);
        console.log(req.body);
        yield vegetal.save((error) => {
            if (error)
                resp.status(400).send(error);
            resp.status(200).send(vegetal);
        });
    }),
    getAllVegetal: (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
        yield vegetal_1.default.find().exec((error, vegetals) => {
            if (error)
                resp.status(400).send(error);
            resp.status(200).send(vegetals);
        });
    }),
    getOneVegetal: (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
        yield vegetal_1.default.findById(req.params.id).exec((error, vegetals) => {
            if (error)
                resp.status(400).send(error);
            resp.status(200).send(vegetals);
        });
    }),
    putOneVegetal: (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
        yield vegetal_1.default.findByIdAndUpdate(req.params.id, req.body).exec((error, vegetals) => {
            if (error)
                resp.status(400).send(error);
            resp.status(200).send(vegetals);
        });
    }),
    deleteOneVegetal: (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
        const vegetal = yield vegetal_1.default.findById(req.params.id);
        if (!!vegetal) {
            yield vegetal_1.default.deleteOne({ _id: req.params.id }).exec((error, vegetals) => {
                if (error)
                    resp.status(400).send(error);
                resp.status(200).send({ msg: "vegetal was deleted succces" });
            });
        }
        else {
            resp.status(404).send({ msg: "vegetal not found" });
        }
    })
};

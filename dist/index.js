"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_1 = __importDefault(require("./core/db"));
const vegetalUrl_1 = __importDefault(require("./routes/vegetalUrl"));
const body_parser_1 = __importDefault(require("body-parser"));
const espacesvegetalUrl_1 = __importDefault(require("./routes/espacesvegetalUrl"));
require("dotenv").config();
db_1.default;
app_1.default.use(body_parser_1.default.json());
app_1.default.use(vegetalUrl_1.default);
app_1.default.use(espacesvegetalUrl_1.default);
app_1.default.listen(3001, (error) => {
    if (error) {
        return console.log(error);
    }
    return console.log('serveur' + 3001);
});

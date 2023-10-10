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
const axios_1 = __importDefault(require("axios"));
const handleErrors_js_1 = require("../../helper/handleErrors.js");
exports.handler = function (event) {
    return __awaiter(this, void 0, void 0, function* () {
        const API_KEY = process.env.API_KEY;
        const userZip = event.queryStringParameters.userZip;
        try {
            let response = yield axios_1.default.get(`https://api.api-ninjas.com/v1/weather`, {
                headers: {
                    'Accept': 'application/json',
                    'Accept-Encoding': 'identity',
                    'X-Api-Key': API_KEY
                },
                params: { zip: userZip },
            });
            return {
                statusCode: 200,
                body: JSON.stringify(response.data),
            };
        }
        catch (err) {
            (0, handleErrors_js_1.handleErrors)(err);
            return {
                statusCode: 500,
                body: JSON.stringify({ error: err.message }),
            };
        }
    });
};
//# sourceMappingURL=apiCall.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var srcImagePath = path_1.default.resolve(__dirname + "/../../public/assets/srcImg");
var outImagePath = path_1.default.resolve(__dirname + "/../../public/assets/outImg");
var htmlPath = path_1.default.resolve(__dirname + "/../../public/html");
var publicPath = path_1.default.resolve(__dirname + "/../../public");
exports.default = { srcImagePath: srcImagePath, outImagePath: outImagePath, htmlPath: htmlPath, publicPath: publicPath };

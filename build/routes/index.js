"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Paths_1 = __importDefault(require("../utilities/Paths"));
var resize_1 = __importDefault(require("./api/resize"));
var routes = express_1.default.Router();
routes.get("/", function (request, response) {
    response.status(200).sendFile(Paths_1.default.htmlPath + "/index.html");
});
routes.use("/api", resize_1.default);
exports.default = routes;

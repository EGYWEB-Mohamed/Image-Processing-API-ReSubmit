"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var Paths_1 = __importDefault(require("./utilities/Paths"));
var index_1 = __importDefault(require("./routes/index"));
var PORT = 3500;
// create an instance server
var app = (0, express_1.default)();
// Make Public Path As Static To be able to fetch images
app.use(express_1.default.static(Paths_1.default.publicPath));
// HTTP request logger middleware
app.use((0, morgan_1.default)("short"));
// Add All Route As Middleware
app.use(index_1.default);
// start express server
app.listen(PORT, function () {
    console.log("Server Start - http://127.0.0.1:".concat(PORT));
});
exports.default = app;

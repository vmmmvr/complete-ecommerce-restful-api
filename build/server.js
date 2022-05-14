"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app/app"));
var logger_1 = __importDefault(require("./utils/logger"));
var routes_1 = __importDefault(require("./API/V1/routes"));
var config = require("./config/default")["default"][process.env.NODE_ENV || "development"];
logger_1.default.info(config);
app_1.default
    .listen(config.port, function () {
    logger_1.default.info("".concat(config.appname, " is running on PORT ").concat(config.port));
    (0, routes_1.default)(app_1.default);
})
    .on("error", function (e) { return logger_1.default.error(e); });

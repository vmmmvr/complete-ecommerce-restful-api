"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var config = {
    development: {
        appname: "Ecommerce API [development]",
        port: process.env.PORT,
    },
    test: {
        appname: "Ecommerce API [test]",
        port: process.env.PORT,
    },
    production: {
        appname: "Ecommerce API",
        port: process.env.PORT,
    },
};
exports.default = config;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(app) {
    app.get("/", function (req, res, next) {
        return res.json({
            success: true,
        });
    });
}
exports.default = default_1;

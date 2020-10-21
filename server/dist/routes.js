"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var boom_1 = __importDefault(require("@hapi/boom"));
var ProductApi_1 = __importDefault(require("./products/ProductApi"));
function default_1(app) {
    app.use('/api/products', ProductApi_1.default);
    // Error handling
    app.use(function (err, req, res, _) {
        var error = boom_1.default.isBoom(err) ? err : boom_1.default.boomify(err);
        // tslint:disable-next-line: no-console
        if (process.env.NODE_ENV !== 'test')
            console.trace(error);
        return res.status(error.output.statusCode).json({
            error: error.name,
            message: error.message,
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=routes.js.map
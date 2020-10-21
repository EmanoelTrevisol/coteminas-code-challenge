"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var boom_1 = __importDefault(require("@hapi/boom"));
var ProductApi_1 = __importDefault(require("./products/ProductApi"));
var path_1 = __importDefault(require("path"));
var serverPublicPath = path_1.default.resolve(__dirname, '/public/');
function default_1(app) {
    app.use('/api/products', ProductApi_1.default);
    app.use('/css', express_1.default.static(serverPublicPath + "css"));
    app.use('/fonts', express_1.default.static(serverPublicPath + "fonts"));
    app.use('/img', express_1.default.static(serverPublicPath + "img"));
    app.use('/js', express_1.default.static(serverPublicPath + "js"));
    app.use('/assets', express_1.default.static(serverPublicPath + "assets"));
    app.all('/*', function (req, res) {
        res
            .status(200)
            .set({
            'content-type': 'text/html; charset=utf-8',
        })
            .sendFile(serverPublicPath + "index.html");
    });
    app.use(express_1.default.static(serverPublicPath + "static"));
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
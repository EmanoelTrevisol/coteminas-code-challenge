"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var boom_1 = __importDefault(require("@hapi/boom"));
var ProductApi_1 = __importDefault(require("./products/ProductApi"));
var path_1 = __importDefault(require("path"));
var projectRootPath = path_1.default.normalize(__dirname);
function default_1(app) {
    app.use('/api/products', ProductApi_1.default);
    app.use('/css', express_1.default.static(path_1.default.resolve(projectRootPath, '/public/css')));
    app.use('/fonts', express_1.default.static(path_1.default.resolve(projectRootPath, '/public/fonts')));
    app.use('/img', express_1.default.static(path_1.default.resolve(projectRootPath, '/public/img')));
    app.use('/js', express_1.default.static(path_1.default.resolve(projectRootPath, '/public/js')));
    app.use('/assets', express_1.default.static(path_1.default.resolve(projectRootPath, '/public/assets')));
    app.all('/*', function (req, res) {
        res
            .status(200)
            .set({
            'content-type': 'text/html; charset=utf-8',
        })
            .sendFile(path_1.default.resolve(projectRootPath, '/public/index.html'));
    });
    app.use(express_1.default.static(path_1.default.resolve(projectRootPath, '/public/static')));
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
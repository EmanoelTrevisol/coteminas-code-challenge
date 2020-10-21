"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listPage = exports.listLimit = exports.checkValidators = void 0;
var boom_1 = __importDefault(require("@hapi/boom"));
var express_validator_1 = require("express-validator");
var validationOptions_1 = require("./validationOptions");
var messages_1 = __importDefault(require("../errors/messages"));
function checkValidators() {
    return function (req, _, next) {
        var errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty())
            next(boom_1.default.badData(errors.array()[0].msg));
        else
            next();
    };
}
exports.checkValidators = checkValidators;
function listLimit() {
    return function (req, _, next) {
        var limit = parseInt(req.query.limit, undefined);
        if (!Number.isNaN(limit) && !validationOptions_1.listLimitOptions.includes(limit)) {
            next(boom_1.default.badData(messages_1.default.list.invalidLimit));
        }
        next();
    };
}
exports.listLimit = listLimit;
function listPage() {
    return function (req, _, next) {
        var page = parseInt(req.query.page, undefined);
        if (!Number.isNaN(page) && page < 1) {
            next(boom_1.default.badData(messages_1.default.list.invalidPage));
        }
        next();
    };
}
exports.listPage = listPage;
//# sourceMappingURL=middleware.js.map
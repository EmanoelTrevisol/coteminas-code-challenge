"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var path_1 = __importDefault(require("path"));
function default_1() {
    if (process.env.NODE_ENV === 'test') {
        dotenv_1.default.config({ path: path_1.default.resolve(__dirname, 'test') });
    }
    else {
        dotenv_1.default.config({ path: path_1.default.resolve(__dirname, 'default') });
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map
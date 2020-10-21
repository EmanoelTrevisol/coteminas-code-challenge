"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var env_1 = __importDefault(require("./_config/env"));
var db_1 = __importDefault(require("./_config/db"));
var cors_1 = __importDefault(require("cors"));
env_1.default();
db_1.default();
var app = express_1.default();
app.use(cors_1.default({
    origin: ['http://localhost:3000'],
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
routes_1.default(app);
exports.default = app;
//# sourceMappingURL=server.js.map
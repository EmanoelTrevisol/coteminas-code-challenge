"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server"));
server_1.default.listen(process.env.PORT, function () {
    // tslint:disable-next-line: no-console
    console.log("Listening on port " + process.env.PORT);
});
//# sourceMappingURL=index.js.map
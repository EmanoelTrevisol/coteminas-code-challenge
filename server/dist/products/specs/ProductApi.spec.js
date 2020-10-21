"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var server_1 = __importDefault(require("../../server"));
var querystring_1 = __importDefault(require("querystring"));
var messages_1 = __importDefault(require("../../errors/messages"));
describe('getList', function () {
    var res;
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest_1.default(server_1.default).get('/api/products')];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test('returns 200 response', function () {
        expect(res.status).toBe(200);
    });
    test('response items is array', function () {
        expect(res.body.items).toBeArray();
    });
    test('response total to be positive number', function () {
        expect(res.body.total).toBeNumber();
        expect(res.body.total).not.toBeNegative();
    });
});
describe('getList validation', function () {
    describe('limit', function () {
        test('should not throw error with limit parameter undefined', function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, supertest_1.default(server_1.default).get('/api/products')];
                    case 1:
                        res = _a.sent();
                        expect(res.status).toBe(200);
                        expect(res.body.total).toBeNumber();
                        expect(res.body.total).not.toBeNegative();
                        expect(res.body.items).toBeArray();
                        expect(res.body.items.length).toBeWithin(0, 11);
                        return [2 /*return*/];
                }
            });
        }); });
        test('should have 10 or less items', function () { return __awaiter(void 0, void 0, void 0, function () {
            var query, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = {
                            limit: 10,
                        };
                        return [4 /*yield*/, supertest_1.default(server_1.default).get("/api/products?" + query)];
                    case 1:
                        res = _a.sent();
                        expect(res.status).toBe(200);
                        expect(res.body.total).toBeNumber();
                        expect(res.body.total).not.toBeNegative();
                        expect(res.body.items).toBeArray();
                        expect(res.body.items.length).toBeWithin(0, 11);
                        return [2 /*return*/];
                }
            });
        }); });
        test('should have 25 or less items', function () { return __awaiter(void 0, void 0, void 0, function () {
            var query, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = {
                            limit: 10,
                        };
                        return [4 /*yield*/, supertest_1.default(server_1.default).get("/api/products?" + query)];
                    case 1:
                        res = _a.sent();
                        expect(res.status).toBe(200);
                        expect(res.body.total).toBeNumber();
                        expect(res.body.total).not.toBeNegative();
                        expect(res.body.items).toBeArray();
                        expect(res.body.items.length).toBeWithin(0, 26);
                        return [2 /*return*/];
                }
            });
        }); });
        test('should have 50 or less items', function () { return __awaiter(void 0, void 0, void 0, function () {
            var query, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = {
                            limit: 10,
                        };
                        return [4 /*yield*/, supertest_1.default(server_1.default).get("/api/products?" + query)];
                    case 1:
                        res = _a.sent();
                        expect(res.status).toBe(200);
                        expect(res.body.total).toBeNumber();
                        expect(res.body.total).not.toBeNegative();
                        expect(res.body.items).toBeArray();
                        expect(res.body.items.length).toBeWithin(0, 51);
                        return [2 /*return*/];
                }
            });
        }); });
        test('should have 100 or less items', function () { return __awaiter(void 0, void 0, void 0, function () {
            var query, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = {
                            limit: 10,
                        };
                        return [4 /*yield*/, supertest_1.default(server_1.default).get("/api/products?" + query)];
                    case 1:
                        res = _a.sent();
                        expect(res.status).toBe(200);
                        expect(res.body.total).toBeNumber();
                        expect(res.body.total).not.toBeNegative();
                        expect(res.body.items).toBeArray();
                        expect(res.body.items.length).toBeWithin(0, 101);
                        return [2 /*return*/];
                }
            });
        }); });
        test('should throw invalid limit error', function () { return __awaiter(void 0, void 0, void 0, function () {
            var query, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = {
                            limit: 1,
                        };
                        return [4 /*yield*/, supertest_1.default(server_1.default).get("/api/products?" + querystring_1.default.stringify(query))];
                    case 1:
                        res = _a.sent();
                        expect(res.status).toBe(422);
                        expect(res.body.message).toBe(messages_1.default.list.invalidLimit);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('page', function () {
        test('throws error if page is < 1', function () { return __awaiter(void 0, void 0, void 0, function () {
            var query, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = {
                            page: 0,
                        };
                        return [4 /*yield*/, supertest_1.default(server_1.default).get("/api/products?" + querystring_1.default.stringify(query))];
                    case 1:
                        res = _a.sent();
                        expect(res.status).toBe(422);
                        expect(res.body.message).toBe(messages_1.default.list.invalidPage);
                        return [2 /*return*/];
                }
            });
        }); });
        test('does not throw error if page is not provided ', function () { return __awaiter(void 0, void 0, void 0, function () {
            var query, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = {
                            limit: 10,
                        };
                        return [4 /*yield*/, supertest_1.default(server_1.default).get("/api/products?" + querystring_1.default.stringify(query))];
                    case 1:
                        res = _a.sent();
                        expect(res.status).toBe(200);
                        expect(res.body.total).toBeNumber();
                        expect(res.body.total).not.toBeNegative();
                        expect(res.body.items).toBeArray();
                        expect(res.body.items.length).toBeWithin(0, 11);
                        return [2 /*return*/];
                }
            });
        }); });
        test('returns list and total if first page is provided', function () { return __awaiter(void 0, void 0, void 0, function () {
            var query, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = {
                            limit: 10,
                            page: 1,
                        };
                        return [4 /*yield*/, supertest_1.default(server_1.default).get("/api/products?" + querystring_1.default.stringify(query))];
                    case 1:
                        res = _a.sent();
                        expect(res.status).toBe(200);
                        expect(res.body.total).toBeNumber();
                        expect(res.body.total).not.toBeNegative();
                        expect(res.body.items).toBeArray();
                        expect(res.body.items.length).toBeWithin(0, 11);
                        return [2 /*return*/];
                }
            });
        }); });
        test('returns empty list if out of bound page is provided', function () { return __awaiter(void 0, void 0, void 0, function () {
            var query, firstRes, totalItems, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = {
                            limit: 10,
                            page: 1,
                        };
                        return [4 /*yield*/, supertest_1.default(server_1.default).get("/api/products?" + querystring_1.default.stringify(query))];
                    case 1:
                        firstRes = _a.sent();
                        totalItems = firstRes.body.total;
                        return [4 /*yield*/, supertest_1.default(server_1.default).get("/api/products?" + querystring_1.default.stringify(__assign(__assign({}, query), { page: totalItems > 0 ? totalItems : 100 })))];
                    case 2:
                        res = _a.sent();
                        expect(res.status).toBe(200);
                        expect(res.body.total).toBe(totalItems);
                        expect(res.body.items).toBeArray();
                        expect(res.body.items).toBeEmpty();
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
//# sourceMappingURL=ProductApi.spec.js.map
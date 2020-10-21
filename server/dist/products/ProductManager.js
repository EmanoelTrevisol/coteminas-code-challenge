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
exports.getPaginationSkipNumber = exports.getPerPageNumber = exports.getSearchQueryObject = void 0;
var ProductModel_1 = __importDefault(require("./model/ProductModel"));
var ProductStatics_1 = require("./model/ProductStatics");
var validationOptions_1 = require("../validation/validationOptions");
function sanitize(product) {
    return product.toObject();
}
function getSearchQueryObject(filter) {
    var baseFilterObj = {
        status: { $ne: ProductStatics_1.statuses.INACTIVE },
    };
    if (!filter)
        return baseFilterObj;
    var regex = RegExp(filter, 'gi');
    return __assign(__assign({}, baseFilterObj), { title: { $regex: regex } });
}
exports.getSearchQueryObject = getSearchQueryObject;
function getPerPageNumber(limit) {
    var perPage = parseInt(limit, undefined);
    if (!Number.isNaN(perPage))
        return perPage;
    else
        return validationOptions_1.listDefaultLimitOption;
}
exports.getPerPageNumber = getPerPageNumber;
function getPaginationSkipNumber(_a) {
    var page = _a.page, perPage = _a.perPage;
    var pageNumber = parseInt(page, undefined);
    if (!Number.isNaN(pageNumber))
        return (pageNumber - 1) * perPage;
    else
        return 0; // if no page number is provided the first is considered
}
exports.getPaginationSkipNumber = getPaginationSkipNumber;
exports.default = {
    getProductsList: function (_a) {
        var page = _a.page, limit = _a.limit, _b = _a.filter, filter = _b === void 0 ? '' : _b;
        return __awaiter(this, void 0, void 0, function () {
            var query, perPage, skip, _c, items, total;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        query = getSearchQueryObject(filter);
                        perPage = getPerPageNumber(limit);
                        skip = getPaginationSkipNumber({ page: page, perPage: perPage });
                        return [4 /*yield*/, Promise.all([
                                ProductModel_1.default.find(query).limit(perPage).skip(skip),
                                ProductModel_1.default.countDocuments(query),
                            ])];
                    case 1:
                        _c = _d.sent(), items = _c[0], total = _c[1];
                        return [2 /*return*/, {
                                items: items.map(sanitize),
                                total: total,
                            }];
                }
            });
        });
    },
};
//# sourceMappingURL=ProductManager.js.map
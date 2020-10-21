"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.seedProducts = void 0;
/* tslint:disable no-var-requires no-console */
var db_1 = __importStar(require("../../_config/db"));
var env_1 = __importDefault(require("../../_config/env"));
var ProductModel_1 = __importDefault(require("../model/ProductModel"));
var ProductStatics_1 = require("../model/ProductStatics");
var faker_1 = __importDefault(require("faker"));
var process_1 = require("process");
faker_1.default.locale = 'pt_BR';
var yargs = require('yargs/yargs');
var hideBin = require('yargs/helpers').hideBin;
var argv = yargs(hideBin(process.argv)).argv;
var quantity = argv.quantity || 500;
var sizesFilteredStringMap = new Map([
    ['SINGLE', 'solteiro'],
    ['COUPLE', 'casal'],
    ['QUEEN', 'queen'],
    ['KING', 'king'],
    ['KID', 'infantil'],
]);
var typesFilteredStringMap = new Map([
    ['SHEET', 'lençol'],
    ['PILLOW', 'travesseiro'],
    ['CUSHION', 'almofada'],
    ['BEDSPREAD', 'colcha'],
    ['BLANKET', 'cobertor'],
]);
var sizesArr = Array.from(sizesFilteredStringMap.keys());
var typesArr = Array.from(typesFilteredStringMap.keys());
function getSizeAndType() {
    return {
        type: typesArr[Math.floor(Math.random() * (typesArr.length - 1))],
        size: sizesArr[Math.floor(Math.random() * (sizesArr.length - 1))],
    };
}
function getTitle(_a) {
    var mainColor = _a.mainColor, type = _a.type, size = _a.size;
    var arr = ['kit', 'jogo', 'conjunto', ''];
    var _b = [
        Math.floor(Math.random() * (arr.length - 1)),
        Math.floor(Math.random() * 100),
    ], randomIndex = _b[0], randomOddOrEven = _b[1];
    var firstWord = arr[randomIndex];
    var title = firstWord ? firstWord + " " + type : type;
    if (randomOddOrEven % 3 === 0)
        title = title + " " + size;
    else if (randomOddOrEven % 2 === 0)
        title = title + " " + mainColor;
    else
        title = title + " " + size + " " + mainColor;
    return (randomIndex * (randomOddOrEven - randomIndex)) % 2 === 0
        ? faker_1.default.commerce.productAdjective() + " " + title
        : title;
}
function getPrices() {
    var price = Math.round(Math.random() * Math.random() * 1000 * 100) / 100;
    var hasOffer = Math.floor(Math.random() * 100) % 2 === 0;
    var offerPrice = hasOffer
        ? Math.round(price * Math.random() * 100) / 100
        : undefined;
    return {
        price: price,
        offerPrice: offerPrice,
    };
}
function getStatus() {
    var rounded = Math.floor(Math.random() * 100);
    if (rounded % 5 === 0)
        return ProductStatics_1.statuses.INACTIVE;
    else if (rounded % 3 === 0)
        return ProductStatics_1.statuses.SOLD_OUT;
    else
        return ProductStatics_1.statuses.ACTIVE;
}
function getProductObj() {
    var _a = getSizeAndType(), type = _a.type, size = _a.size;
    var mainColor = faker_1.default.commerce.color();
    var typeFilteredString = typesFilteredStringMap.get(type);
    var sizeFilteredString = sizesFilteredStringMap.get(size);
    var _b = getPrices(), price = _b.price, offerPrice = _b.offerPrice;
    return {
        title: getTitle({
            mainColor: mainColor,
            type: typeFilteredString,
            size: sizeFilteredString,
        }),
        images: [
            'http://placeimg.com/96/96/animals',
            'http://placeimg.com/96/96/animals',
            'http://placeimg.com/96/96/animals',
            'http://placeimg.com/96/96/animals',
        ],
        type: type,
        size: size,
        price: price,
        mainColor: mainColor,
        offerPrice: offerPrice,
        status: getStatus(),
    };
}
function getProductsArray() {
    console.log("Adding " + quantity + " products");
    var products = [];
    for (var i = 0; i < quantity; i++) {
        products.push(getProductObj());
    }
    return products;
}
function dropCollection() {
    return ProductModel_1.default.collection.drop();
}
function seedProducts() {
    return __awaiter(this, void 0, void 0, function () {
        var products, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    env_1.default();
                    return [4 /*yield*/, db_1.default()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, dropCollection()];
                case 2:
                    _a.sent();
                    products = getProductsArray();
                    return [4 /*yield*/, ProductModel_1.default.insertMany(products)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, db_1.killMongoMemoryServer()];
                case 4:
                    _a.sent();
                    process_1.exit(0);
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    console.error(error_1);
                    process_1.exit(1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.seedProducts = seedProducts;
seedProducts();
//# sourceMappingURL=seedProducts.js.map
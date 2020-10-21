"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var ProductStatics_1 = require("./ProductStatics");
var ProductSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        index: true,
        required: true,
    },
    mainColor: {
        type: String,
        index: true,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        index: true,
    },
    offerPrice: {
        type: Number,
        required: false,
        index: true,
    },
    status: {
        type: String,
        required: true,
        enum: Object.values(ProductStatics_1.statuses),
        default: ProductStatics_1.statuses.ACTIVE,
    },
    type: {
        type: String,
        required: true,
        enum: Object.values(ProductStatics_1.types),
    },
    images: {
        type: [String],
        required: true,
    },
    size: {
        type: String,
        required: true,
        enum: Object.values(ProductStatics_1.sizes),
    },
}, {
    timestamps: true,
    toObject: { virtuals: true, minimize: false },
    toJSON: { virtuals: true, minimize: false },
});
exports.default = mongoose_1.default.model('Product', ProductSchema);
//# sourceMappingURL=ProductModel.js.map
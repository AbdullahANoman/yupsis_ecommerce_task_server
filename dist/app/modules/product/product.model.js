"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1000,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        lowercase: true,
    },
    ageRange: {
        type: String,
        required: true,
        default: 'all',
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
        default: 0,
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
        default: 0,
    },
});
exports.Product = (0, mongoose_1.model)('Products', productSchema);

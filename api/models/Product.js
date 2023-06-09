import { Schema, model } from "mongoose";


const ProductSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image1: {
        type: String,
        required: true
    },
    image2: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    categories: {
        type: Array,
    },
    tags: {
        type: Array,
    },
    size: {
        type: Array,
        required: true
    },
    color: {
        type: Array,
        required: true
    },
    oldPrice: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        default: true,
    },
    is_New: {
        type: Boolean,
        default: false,
    },
    quantity: {
        type: Number,
        required: true,
    },
},
    {timestamps: true}
);

export default model("Product", ProductSchema);
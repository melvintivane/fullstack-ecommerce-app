import { Schema, model } from "mongoose";


const CartSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    product: [
        {
            productId: {
                type: String,
            },
            quantity: {
                type: Number,
                default: 1,
            }
        }
    ]
},
    {timestamps: true}
);


export default model("Cart", CartSchema);
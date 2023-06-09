import { Schema, model } from "mongoose";


const OrderSchema = new Schema({
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
                default: 1
            }, 
            price: {
                type: Number,
            }
        }
    ],
    amount: {
        type: Number,
        required: true
    },
    address: {
        type: Object,
        required: true
    },
    status: {
        type: String,
        default: "pending"
    }
},
    {timestamps: true}
);


export default model("Order", OrderSchema);
import express from "express";
import { connect } from "mongoose";
import { config } from "dotenv";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import productRoute from "./routes/product.js";
import cartRoute from "./routes/cart.js";
import orderRoute from "./routes/order.js";
import cors from "cors";


const app = express();

config();

//MIDDLEWARES
app.disable('x-powered-by'); // less hackers know about our stack
app.use(express.json());
app.use(cors());

//ROTAS
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);

//INICIALIZA O SERVIDOR SE TIVER CONEXÃO COM MONGODB
connect(process.env.MONGO_URL).then(() => {
    console.log('DB Connected!');
    try {
        app.listen(8080, () => {
            console.log(`Server connected to http://localhost:8080`);
        })
    } catch (error) {
        console.log('Cannot connect to the server');
    }
}).catch(error => {
    console.log(`Invalid database connection...!`);
})
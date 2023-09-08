import express from "express";
const router = express.Router();
import stripe from 'stripe';
import cors from "cors";


const app = express();

app.use(cors());

const stripeInstance = stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


const YOUR_DOMAIN = 'http://localhost:8080/';

router.post('/create-checkout-session', async (req, res) => {
  const session = await stripeInstance.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-Shirt'
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});


export default router; 
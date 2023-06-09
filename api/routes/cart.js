import express from "express";
const router = express.Router();
import Cart from "../models/Cart.js";
import { verificarToken, verificarTokenEAdmin, verificarTokenEAutorizacao } from "./verificarToken.js";


//CREATE CART
router.post("/", verificarToken, async (req, res)=>{
    const novoCart = new Cart(req.body);
    try {
      const savedCart = await novoCart.save();
      res.status(200).json(savedCart);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
//UPDATE CART
router.put("/:id", verificarTokenEAutorizacao, async (req, res) => {
try {
    const updatedCart = await Cart.findByIdAndUpdate(
    req.params.id,
    {
        $set: req.body,
    },
    { new: true }
    );
    res.status(200).json(updatedCart);
}catch (err) {
    res.status(500).json(err);
}
});

//DELETE CART
router.delete("/:id", verificarTokenEAutorizacao, async (req, res)=> {
try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted!")
} catch (err) {
    res.status(500).json(err);
}
});

//GET USER CART
router.get("/find/:userId", verificarTokenEAutorizacao,async (req, res)=> {
try {
    const cart = await Cart.findOne({id: req.params.id});
    res.status(200).json(cart)
} catch (err) {
    res.status(500).json(err);
}
});

//DASHBOARD
//GET ALL CARTS
router.get("/", verificarTokenEAdmin, async (req, res)=>{
try {
    const carts = await Cart.find();
    res.status(200).json(carts);
} catch (err) {
    res.status(500).json(err);
}
});

export default router;
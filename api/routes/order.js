import express from "express";
const router = express.Router();
import Order from "../models/Order.js";
import { verificarToken, verificarTokenEAdmin, verificarTokenEAutorizacao } from "./verificarToken.js";


//CREATE ORDER
router.post("/", verificarTokenEAdmin, async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE ORDER
router.put("/:id", verificarTokenEAutorizacao, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  }catch (err) {
    res.status(500).json(err)
  }
});

//DELETE ORDER
router.delete("/:id", verificarTokenEAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(res.params.id);
    res.status(200).json("Order has been deleted!")
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER ORDERS
router.get("/find/:id", verificarTokenEAutorizacao, async (req, res) => {
  try {
    const orders = await Order.find({id: req.params.id});
    res.status(200).json(orders)
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL ORDERS 
router.get("/", verificarTokenEAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
})

//DASHBOARD
//GET MONTHLY INCOME
router.get("/income", verificarTokenEAdmin, async(req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
})

  
export default router; 
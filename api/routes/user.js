import express from "express";
const router = express.Router();
import CryptoJS from "crypto-js";
import User from "../models/User.js";
import {verificarToken, verificarTokenEAutorizacao, verificarTokenEAdmin} from "./verificarToken.js";



//ACTUALIZAR USER
router.put("/:id", verificarTokenEAutorizacao, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTOJS_SECRET).toString();
    }

    try {
        const userActualizado = await User.findByIdAndUpdate( 
            req.params.id, 
            { $set: req.body },  
            { new: true }
        );
        res.status(200).json(userActualizado);
    } catch (error) {
        res.status(500).json(error);
    }
});


//APAGAR USER
router.delete("/:id", verificarTokenEAutorizacao, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("USUÁRIO APAGADO COM SUCESSO!");
    } catch (error) {
        res.status(500).json(error);
    }
});


//ADMIN DASHBOARD 
//GET USER
router.get("/find/:id", verificarTokenEAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error);
    }
});


//ADMIN DASHBOARD
//GET ALL USERS
router.get("/", verificarTokenEAdmin, async (req, res) => {
    const query = req.query.new;
    try {
        const users = query ? await User.find().sort({_id: -1}).limit(5) : await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
});


//ADMIN DASHBOARD
//GET ALL STATS
router.get("/stats", verificarTokenEAdmin, async(req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
    try {
      const data = await User.aggregate([
        {
          $match: {
            createdAt: {$gte: lastYear} 
          } 
        },
        {
          $project: {
            month: {$month: "$createdAt"},
          }
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          }
        }
      ]);
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
  
 export default router;
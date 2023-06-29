import express from "express";
const router = express.Router();
import CryptoJS from 'crypto-js';
import Jwt from 'jsonwebtoken';
import User from "../models/User.js";


//Registar
router.post("/register", async (req, res) => {
    const novoUser = new User({
        name: req.body.name,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTOJS_SECRET).toString()
    });

    try {
        const userSalvo = await novoUser.save();
        res.status(201).json(userSalvo);
    } catch (error) {
        res.status(500).json(error);
    }
});


//Login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username
        });
        //!user && res.status(401).json("CREDENCIAIS ERRADOS!");

        if (!user) {
            return res.status(401).json("CREDENCIAIS ERRADOS!");
            // stop further execution in this callback
            //return;
        }


        const passwordEncriptada = CryptoJS.AES.decrypt(user.password, process.env.CRYPTOJS_SECRET);
       
        const originalPassword = passwordEncriptada.toString(CryptoJS.enc.Utf8);

        const inputPassword = req.body.password;
        
        if (originalPassword != inputPassword) {
            return res.status(401).json("PALAVRA-PASSE OU E-MAIL ERRADO!");
        }

        const accessToken = Jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin, 
            },
            process.env.JWT_SECRET,
            { expiresIn: "3d" }
        );

        const {password, ...others} = user._doc;
        res.status(200).json({...others, accessToken});
    } catch (error) {
        res.status(500).json(error);
    }
});

export default router;
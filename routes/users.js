const express = require('express');
const userRouter = express.Router();

userRouter.get('/login',async(req,res)=>res.render('login'))

module.exports = userRouter;

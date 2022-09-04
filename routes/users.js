const express = require('express');
const userRouter = express.Router();
const passport = require('passport');

userRouter.get('/login',async(req,res)=>res.status(200).render('login'))
    .post('/login',(req,res,next)=>{
                    passport.authenticate('local',{
                        successRedirect:'/staffs',
                        failureRedirect:'/'
                    })(req,res,next)
                })
            .delete('/logout',(req,res,next)=>{
                req.logOut(err=>next(err))
                res.redirect('/')
            });

module.exports = userRouter;

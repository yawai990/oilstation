const connection = require('../db/db');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport){
    passport.use(new LocalStrategy({usernameField:'username'}
    ,(username,password,done)=>{
        
        connection.query(`SELECT * FROM oilproject.users WHERE username='${username}'`,(err,result)=>{

            if(err) done(err);
            if(!result){
                return done(null,false,{message:'Incorrect username and password'})
            }else{
                if(!password){
                    return done(null,false,{message:'Please enter the correct password'})
                }
                   if(password !== result[0].password){
                    return done(null,false,{message:'Incorrect Password'})
                   }
                   return done(null,result)
            }
        });
    }))
    passport.serializeUser((user,done)=>done(null,user));
    passport.deserializeUser((user,done)=>done(null,user))
}
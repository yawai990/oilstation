
const connection =require('../db/db');

//get method
//render the front end
const addNewdata = async(req,res)=>{
    res.render('addNewForm')
};

const addnewdata = async(req,res)=>{
    res.render('staffs')
}
module.exports = {addNewdata,addnewdata};
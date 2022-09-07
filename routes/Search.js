const express =require('express');
const searchRoutes = express.Router();
const {getFilterSales} =require('../controllers/Sale');

searchRoutes.get('/search',(req,res)=>res.render('saleSearch'))
                    .post('/getfiltersales',getFilterSales)
                    
module.exports = searchRoutes;
const express = require('express');
const saleRouter = express.Router();
const {getAllSales,deleteSale,deleteAllSale} = require('../controllers/Sale');

saleRouter.get('/',getAllSales)
                 .delete('/delete',deleteSale)
                 .delete('/deleteAllSale',deleteAllSale)

module.exports = saleRouter;
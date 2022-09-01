const express = require('express');
const saleRouter = express.Router();
const {getAllSales,deleteSale} = require('../controllers/Sale');

saleRouter.get('/',getAllSales)
                 .delete('/delete',deleteSale)

module.exports = saleRouter;
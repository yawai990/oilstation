const express = require('express');
const customerRouter=  express.Router();
const {getCustomers,deleteCustomer,getCustomer,updateCustomer} = require('../controllers/Customer');

customerRouter.get('/',getCustomers)
                         .get('/:id',getCustomer)
                         .patch('/:id',updateCustomer)
                          .delete('/',deleteCustomer);


module.exports = customerRouter;
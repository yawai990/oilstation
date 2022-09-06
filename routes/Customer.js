const express = require('express');
const customerRouter=  express.Router();
const {getCustomers,deleteAllCustomers,deleteCustomer,getCustomer,updateCustomer} = require('../controllers/Customer');

customerRouter.get('/',getCustomers)
                         .get('/:id',getCustomer)
                         .post('/',updateCustomer)
                          .delete('/',deleteCustomer)
                          .delete('/deleteAllCustomers',deleteAllCustomers)


module.exports = customerRouter;
const express = require('express')
const addRouter =express.Router();
const {addNewdata,addnewdata} = require('../controllers/addNew');

addRouter.get('/',addNewdata)
                .post('/add_new_data',addnewdata)

module.exports = addRouter;
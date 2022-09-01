const express = require('express');
const staffRouter = express.Router();
const {getAllStaffs,deleteStaff,addStaff,getStaff,updateStaff,deleteAllStaffs}  = require('../controllers/Staffs');

staffRouter.get('/',getAllStaffs)
                 .get('/staff/:id',getStaff)
                 .post('/staff/add_staff',addStaff)
                 .put('/staff/:id',updateStaff)
                 .delete('/staff/:id',deleteStaff)
                 .delete('/deleteAllstaffs',deleteAllStaffs);

module.exports = staffRouter;
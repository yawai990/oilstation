const express = require('express');
const staffRouter = express.Router();
const {  getAllStaffs,getStaff,
            addstaffForm,addStaff,
            updateStaff,updateStaffForm,
            deleteAllStaffs,deleteStaff}  = require('../controllers/Staffs');

staffRouter.get('/',getAllStaffs)
                 .get('/staff/:id',getStaff)
                 .get('/staff_add_form',addstaffForm)
                 .get('/staff/update_staff/:id',updateStaffForm)
                 .post('/staff/add_staff',addStaff)
                 .put('/staff/:id',updateStaff)
                 .delete('/staff/:id',deleteStaff)
                 .delete('/deleteAllstaffs',deleteAllStaffs);

module.exports = staffRouter;
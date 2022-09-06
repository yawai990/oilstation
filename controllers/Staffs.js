const connection = require('../db/db');

const getAllStaffs =async (req,res)=>{
    try {
        connection.query('SELECT * FROM oilproject.staffs',(err,results)=>{
            if(err) console.log(err)
            res.render('Staffs',{results})
        })
    } catch (error) {
            res.staffs(400).json({error})
    }

};
const getStaff = async(req,res)=>{
    const id = parseInt(req.params.id);   

    connection.query(`SELECT * FROM oilproject.staffs WHERE id=${id}`,(err,result)=>{
        if(err)throw new Error(err)
        res.status(200).render('./components/editstaff',{data:result})
    })
};

//need to add
const addstaffForm= async(req,res)=>{
    res.render('addStaffForm')
}
const addStaff=async(req,res)=>{
    const {staff_name,nrc,h_date,salary} = req.body;
    let errors = [];

        if(!staff_name || !nrc || !h_date || !salary){
          errors.push({message:'Please fill all fields'})
        }
     if(errors.length > 0){
        res.render('addStaffForm',{errors})
     }else{
        connection.query(`INSERT INTO oilproject.staffs(name,hire_date,nrc,salary) VALUES('${staff_name}','${h_date}','${nrc}',${parseInt(salary)})`,(err,result)=>{
            if(err) throw new Error(err);
            res.redirect('/staffs')
        })
     }
};

const updateStaffForm = async(req,res)=>{
    const id = parseInt(req.params.id);

    connection.query(`SELECT * FROM staffs WHERE id=${id}`,(err,result)=>{
        if(err)throw new Error(err);
        res.render('updateStaffForm',{result})
    })
}

const updateStaff = async (req,res)=>{
    const id = parseInt(req.params.id);

    const {staff_name,salary,h_date,status,nrc} = req.body;
    //grab the staff data that equal with the id
   //create the button for update in front-end page
   connection.query(`UPDATE oilproject.staffs SET name='${staff_name}',salary=${salary},hire_date='${h_date}',status='${status}',nrc='${nrc}' WHERE id=${id}`,(err,result)=>{
        if(err)throw new Error(err)
        res.status(201).redirect('/staffs')
   })
}
// delete controller
const deleteStaff = async(req,res)=>{
    const id = req.params.id;

    try {
            connection.query(`DELETE FROM oilproject.staffs WHERE id = ${id}`,(err,result)=>{
                if(err)throw new Error(err)
                res.redirect('/staffs')
            })
    } catch (error) {
            res.send(error)
    }
};
const deleteAllStaffs = async(req,res)=>{
    console.log('clear all data');

    //all staffs delete func make a comment
    // connection.query('TRUNCATE TABLE oilproject.staffs',(err,result)=>{
    //     if(err)throw new Error(err)
    //     res.redirect('/staffs')
    // });

};

module.exports = {
    getAllStaffs,getStaff,
    addstaffForm,addStaff,
    updateStaff,updateStaffForm,
    deleteAllStaffs,deleteStaff
};
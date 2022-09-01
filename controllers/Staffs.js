const connection = require('../db/db');

const getAllStaffs =async (req,res)=>{
    let staffs = [];
    try {
        connection.query('SELECT * FROM oilproject.staffs',(err,results)=>{
            if(err) console.log(err)
            staffs.push(...results)
            res.status(200).json({staffs})
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

const addStaff=async(req,res)=>{
    const {name,nrc,hire_date,salary,status} = req.body;
    
}

const updateStaff = async (req,res)=>{
    const id = req.params.id;

    console.log(req)
    res.json('i am update staff what u want to do')
    // const {name,salary,hire_date,status,region,township,N_id} = req.body;
    //grab the staff data that equal with the id
   //create the button for update in front-end page
//    connection.query(`UPDATE oilproject.staffs SET name='${name}',salary=${salary},hire_date='${hire_date}',status=${status}',nrc='${region}/${township}(N)${N_id} WHERE id=${id}'`,(err,result)=>{
//         if(err)throw new Error(err)
//         res.status(201).redirect('/staffs')
//    })
}
// delete controller
const deleteStaff = async(req,res)=>{
    const id = req.params.id;

    try {
            connection.query(`DELETE FROM oilproject.staffs WHERE id = ${id}`,(err,result)=>{
                if(err)throw new Error(err)
                res.status(202).json({
                    message:'staff deleted'
                });
            })
    } catch (error) {
            res.send(error)
    }
};
const deleteAllStaffs = async(req,res)=>{
    connection.query('TRUNCATE TABLE oilproject.staffs');

    res.staffs(201).json('all staff deleted')
};

module.exports = {getAllStaffs,addStaff,deleteStaff,getStaff,updateStaff,deleteAllStaffs};
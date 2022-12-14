const connection = require('../db/db');

const getCustomers = async(req,res)=>{
    
    connection.query('SELECT * FROM oilproject.customers',(err,results)=>{
        if(err) throw new Error(err)
      res.status(200).render('Customer',{cusdata:results})
    })
};

const getCustomer = async(req,res,next)=>{
    const id = parseInt(req.params.id);

    try {
            connection.query(`SELECT * FROM oilproject.customers WHERE id=${id}`,(err,result)=>{
                if(err)throw new Error(err)

                res.render('oneCustomer',{result})  
            })
    } catch (error) {
        console.log(error)
    }
};

//need to find out how to update the data
const updateCustomer = async(req,res)=>{
    const {id,cus_licence} = req.body;

    connection.query(`UPDATE oilproject.customers SET licence='${cus_licence}' WHERE id=${parseInt(id)}`,(err,result)=>{
        if(err)throw new Error(err);
        //will add flash message later
        res.redirect('/customers')
    })
}

const deleteCustomer = async(req,res)=>{
    const id = parseInt( req.query.id);

    try {
            if(id){
                connection.query(`DELETE FROM oilproject.customers WHERE id =${id}`,(err,result)=>{
                    if(err) throw new Error(err)
                    res.status(201).
                    redirect('/customers')
                })
            }
    } catch (error) {
            res.status(400).json({
                message:'can not delete'
            })
    }
};

const deleteAllCustomers = async(req,res)=>{

    console.log('all customers deleted')
    // connection.query('TRUNCATE TABLE FROM oilproject.customers',(err,result)=>{
    //     if(err)throw new Error(err)
    //     res.redirect('customers')
    // })
}

module.exports = {
    getCustomers,deleteCustomer,
    getCustomer,updateCustomer,
    deleteAllCustomers
};

const connection =require('../db/db');

//get method
//render the front end
const addNewdata = async(req,res)=>{

    connection.query(`SELECT * FROM oilproject.staffs`,(err,staffresults)=>{
        if(err)throw new Error(err);
        connection.query(`SELECT * FROM oilproject.products`,(err,proresults)=>{
            res.render('addNewForm',{staffresults,proresults})
        })
    })
 
};

const addnewdata = async(req,res)=>{
    const {licence_plate,date,product,amount,staff_name} = req.body;
    let errors=[];
    //first add the lincence to customers table
    if(!licence_plate || !product || !amount || !staff_name || !date){
        errors.push({
            message:'Please fill all fileds'
        })
    };

    if(errors.length > 0){
          connection.query(`SELECT * FROM oilproject.staffs`,(err,staffresults)=>{
        if(err)throw new Error(err);
        connection.query(`SELECT * FROM oilproject.products`,(err,proresults)=>{
            res.render('addNewForm',{staffresults,proresults,errors})
        })
    })
    }else{
            try {
                    connection.query(`INSERT INTO customers(licence) VALUES('${licence_plate}')`,(err,result)=>{
                        if(err)throw new Error(err);

                        connection.query(`SELECT * FROM oilproject.customers WHERE licence='${licence_plate}'`,(err,result)=>{
                                connection.query(`INSERT INTO oilproject.sales(product_id,staff_id,customer_id,sale_date_time,amount) VALUES(${parseInt(product)},${parseInt(staff_name)},${parseInt(result[0].id)},'${date}',${parseInt(amount)}
                        )`,(err,results)=>{
                            if(err)throw new Error(err);
                            res.redirect('/salesdata')
                        })
                        })
                    
                    })
            } catch (error) {
                console.log(error)
            }
    }
}
module.exports = {addNewdata,addnewdata};
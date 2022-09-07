const { connect } = require("../db/db");
const connection = require("../db/db")

const getAllSales =async(req,res)=>{
    try {
            connection.query(`SELECT * FROM vw_vouncher`,(err,results)=>{
                if(err)throw new Error(err)
                connection.query(`SELECT * FROM oilproject.sales`,(err,saleresults)=>{
                    if(err) throw new Error(err);
                    res.render('Sales',{results,saleresults})
                })
            })
    } catch (error) {
            console.log(error)
    }
};

const getFilterSales = async(req,res,next)=>{
   const {licence_plate,from_date,to_date} =req.body;

   //user search licence only
    if(!licence_plate && !from_date && !to_date){
        res.redirect('/salesdata')
    }else{
        //if user provide only licence no
        if(licence_plate && !from_date && !to_date){
    connection.query(`SELECT * FROM vw_vouncher WHERE licence='${licence_plate}'`,(err,results)=>{
        if(err)throw new Error(err);
        connection.query(`SELECT * FROM oilproject.sales`,(err,saleresults)=>{
            if(err) throw new Error(err);
            res.render('Sales',{results,saleresults})
        })
            }); 
        }
        //if user provide only date
        if(!licence_plate && from_date && to_date){
            connection.query(`SELECT * FROM vw_vouncher WHERE sale_date_time BETWEEN '${from_date}' AND '${to_date}'`,(err,results)=>{
                if(err)throw new Error(err);
                connection.query(`SELECT * FROM oilproject.sales`,(err,saleresults)=>{
                    if(err) throw new Error(err);
                    res.render('Sales',{results,saleresults})
                })
            }); 
        }

        
        //if user give all necessarie data
        if(licence_plate && from_date && to_date){
            connection.query(`SELECT * FROM vw_vouncher WHERE licence='${licence_plate}' AND sale_date_time BETWEEN '${from_date}' AND '${to_date}'`,(err,results)=>{
                if(err)throw new Error(err);
                connection.query(`SELECT * FROM oilproject.sales`,(err,saleresults)=>{
                    if(err) throw new Error(err);
                    res.render('Sales',{results,saleresults})
                })
            }); 
        };

}}

const deleteSale = async (req,res)=>{
    const id = parseInt(req.query.id);

 try {
        connection.query(`DELETE FROM oilproject.sales WHERE id=${id}`,(err,resutl)=>{
            if(err) throw new Error(err);
            res.redirect('/salesdata')
        })
 } catch (error) {
        console.log(error)
 }
};

const deleteAllSale = async(req,res)=>{

    console.log('all sales deleted')

    // connection.query('TRUNCATE TABLE FROM oilproject.sales',(err,result)=>{
    //     if(err) throw new Error(err)
    //     res.redirect('salesdata')
    // })
}

module.exports ={getAllSales,deleteSale,deleteAllSale,getFilterSales};
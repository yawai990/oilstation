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

module.exports ={getAllSales,deleteSale,deleteAllSale};
const { connect } = require('../db/db');
const connection = require('../db/db');

const getVouncher = async(req,res)=>{
    const id = parseInt(req.params.id);   

    try{
        connection.query(`SELECT * FROM oilproject.vw_vouncher WHERE amount =${id}`,(err,result)=>{
            if(err)throw new Error(err);
            console.log(result)
            res.render('Vouncher',{result})
        })
    }
   catch(error){
    console.log(error)
   }
};

module.exports = {getVouncher};
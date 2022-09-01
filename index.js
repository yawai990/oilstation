const express = require('express');
const app = express();
const ejsLayout = require('express-ejs-layouts');
const methodOverride  = require('method-override');

//EJS
app.use(ejsLayout);
app.set('view engine','ejs');

app.use(methodOverride('_method'));

app.get('/staffs',(req,res)=>{
    res.render('Staffs')
});
//api
app.use('/getallstaffs',require('./routes/Staffs'));
app.use('/customers',require('./routes/Customer'));

app.use('/salesdata',require('./routes/Sale'));

app.listen(5000,()=>console.log('servere running'));
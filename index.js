const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejsLayout = require('express-ejs-layouts');
const methodOverride  = require('method-override');

//EJS
app.use(ejsLayout);
app.set('view engine','ejs');

app.use(bodyParser.json({extended:false}));
app.use(bodyParser.urlencoded({extended:false}))
app.use(methodOverride('_method'));

//api
app.use('/staffs',require('./routes/Staffs'))
app.use('/customers',require('./routes/Customer'));
app.use('/salesdata',require('./routes/Sale'));
app.use('/vouncher',require('./routes/Vouncher'));
app.use('/add_new',require('./routes/addForm'));

app.listen(5000,()=>console.log('servere running'));
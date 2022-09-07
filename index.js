const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejsLayout = require('express-ejs-layouts');
const methodOverride  = require('method-override');
const passport = require('passport');
const session = require('express-session');
const {isAuthenticate} = require('./middleware/auth');
const flash = require('connect-flash');

var public = require('path').join(__dirname,'/public'); 
app.use(express.static(public)); 
//passport
require('./config/passport')(passport);
//EJS
app.use(ejsLayout);
app.set('view engine','ejs');
app.use(express.static('public/image',))

app.use(bodyParser.json({extended:false}));
app.use(bodyParser.urlencoded({extended:false}))
app.use(methodOverride('_method'));

app.use(
    session({
        secret:'secret',
        resave:true,
        saveUninitialized:true,
        cookie:{
            maxAge:1000*60*60*24,
            httpOnly:true
        }
    })
);
app.use(passport.initialize());
app.use(passport.session())
app.use(flash());

//api
app.get('/',(req,res)=>{
    res.status(200).redirect('/users/login')
});


app.use('/users',require('./routes/users'));
app.use('/staffs',isAuthenticate,require('./routes/Staffs'))
app.use('/customers',isAuthenticate,require('./routes/Customer'));
app.use('/salesdata',isAuthenticate,require('./routes/Sale'));
app.use('/sales',require('./routes/Search'));
app.use('/vouncher',isAuthenticate,require('./routes/Vouncher'));
app.use('/add_new',isAuthenticate,require('./routes/addForm'));
app.use('*',(req,res)=>res.render('404Page'))

app.listen(5000,()=>console.log('servere running'));
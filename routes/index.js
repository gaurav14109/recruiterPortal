const express = require('express')
const route = express.Router();


route.get('/', (req,res)=>{


    return res.render('login',{

        title:'Login Page'
    })
});

route.post('/index', (req,res)=>{

   
    return res.render('login',{

        title:'login_Page'
    })
});

module.exports = route;
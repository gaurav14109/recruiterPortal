const express = require('express')
const app = express()
const port = 8000
const db = require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts')
const sassMiddleware = require('node-sass-middleware')



app.use(express.urlencoded({extended:false}));
app.use(express.static('./assets'));
app.use(expressLayouts); //This for Setting partial in webpage
app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}));
app.set('layout extractStyles', true)
app.set('layout extractScripts', true)
app.set('view engine', 'ejs')
app.set('views', './views')
app.use('/',require('./routes'))

app.listen(port,(err)=>{

    console.log(`connected  to port ${port}`)
});
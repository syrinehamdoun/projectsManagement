const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')


app.use(express.json())
const list=require('./routes/api/List')
const task=require('./routes/api/Tasks')    
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use('/api/list',list)
app.use('/api/list',task)

const db = require('./config/keys').mongoURI
mongoose
    .connect(db)
    .then(()=>console.log('connected'))
    .catch(err=>console.log(err))
const port=process.env.port || 5000
app.listen(port,()=>console.log('server running on port '+port))
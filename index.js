const express =require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan=require('morgan');
const router = require('./router')
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/auth',{useNewUrlParser: true},{ useUnifiedTopology: true })

const app=express();

app.use(morgan('combined'));
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(bodyParser.json({type:'*/*'}));
router(app);

const port=process.env.PORT || 3090;
const server=http.createServer(app);
server.listen(port);
console.log('server listening on ' , port); 
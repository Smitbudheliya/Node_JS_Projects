const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://shubham:shubham123@cluster0.k198kt0.mongodb.net/Passport-Blog')

const db = mongoose.connection;

db.once('open',(err) => {
    if(err){
        console.log(err);
    }
    console.log('Connected to Database');
    
})
module.exports = db
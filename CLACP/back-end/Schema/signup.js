const express = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const registerUser = new Schema({
    phoneNumber:{
        type:"String",
        required:true
    },
    email:{
        type:"String",
        required:true
    },
    password:{
        type:"String",
        required:true
    },
    otp:{
        type:"String"
    }
});

module.exports = mongoose.model("registerUser", registerUser);
const express = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const addLaw = new Schema({
    key:{
        type:"String",
        required:true
    },
    section:{
        type:"String",
        required:true
    },
    lawName:{
        type:"String",
        required:true
    },
    description:{
        type:"String",
        required:true

    }
});

module.exports = mongoose.model("Laws",addLaw);
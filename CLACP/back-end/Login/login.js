const express = require('express');

const Route = express.Router();

const signupSchema = require("../Schema/signup");

const bcrypt = require('bcryptjs');

Route.post('/login', (req,res,next)=>{
    const { email, password } = req.body;
    
    signupSchema.findOne({email:email}).then((user)=>{
        if(user)
        {
            bcrypt.compare(password,user.password).then((valid)=>{
                if(valid)
                {
                    return res.status(200).json({message:"User Logged In"});
                }
                else
                {
                    return res.status(401).json({message:"Password Does not match"});
                }
            }).catch((err)=>{
                console.log(err);
            });
        }
        else
        {
            return res.status(400).json({message:"User Does not Exist"});
        }
    })
});

module.exports = Route;
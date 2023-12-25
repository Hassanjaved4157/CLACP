const express = require('express');

const app = express();

const SignupRoute = require("./Signup/signup");

const LoginRoute = require("./Login/login");

const VerifyOtp = require("./Otp/otp");

const AddLaw = require("./Laws/law");

const GetLaws = require("./Laws/getLaws");

const mongoose = require("mongoose");

app.use(express.json());


app.use("/",(req,res,next)=>{
    console.log("App is Running at localhost 5000");
    // console.log(error);
    next();
})

app.use(SignupRoute);

app.use(LoginRoute);

app.use(VerifyOtp);

app.use(AddLaw);

app.use(GetLaws);

mongoose.connect('mongodb+srv://ahmedbinkhalid321:ulEh0GoIgE1UelJ0@cluster0.xuo2m3l.mongodb.net/Law').then((connection)=>{
  app.listen(5000);
}).catch((err)=>{
  console.log(err);
})
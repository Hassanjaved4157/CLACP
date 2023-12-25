const express = require("express");

const Router = express.Router();

const addLaw = require("../Schema/law");

Router.post("/addLaw", (req,res,next)=>{
    const lawsArray = req.body;
    lawsArray.forEach((law) => {
        const { key, section, lawName, description } = law;
        const newLaw = new addLaw({key,section,lawName,description});

        newLaw.save().then((result)=>{
            null;
        }).catch((err)=>{
            console.log(err);
        });
    });
    res.status(200).json({ message: "Laws added successfully" });
})

module.exports = Router;
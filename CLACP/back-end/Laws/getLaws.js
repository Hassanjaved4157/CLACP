const express = require("express");
const Router = express.Router();
const addLaw = require("../Schema/law");

Router.get("/getLaws", async (req, res, next) => {
  try {
    const laws = await addLaw.find();
    res.json(laws);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = Router;
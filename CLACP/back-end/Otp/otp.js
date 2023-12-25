const express = require('express');
const Route = express.Router();
const signupSchema = require('../Schema/signup');

Route.post('/verifyOtp', async (req, res, next) => {
  const { otp } = req.body;

  try {
    const user = await signupSchema.findOne({ otp: otp });

     // Log all data in the collection
     const allData = await signupSchema.find({});
     console.log('All data in the collection:', allData);

    if (user) {
      return res.status(200).json({ message: 'Otp Matched' });
    } else if (res.status(401)) {
      return res.status(401).json({ message: 'Otp Does not Matched' });
    }
    else {
        return res.status(404).json({ message: 'Error 404 ! ' });
      }
  } catch (error) {
    console.error('Error during OTP verification:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = Route;
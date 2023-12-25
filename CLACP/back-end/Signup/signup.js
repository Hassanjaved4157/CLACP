// const express = require('express');

// const Route = express.Router();

// const signupSchema = require("../Schema/signup");

// const bcrypt = require('bcryptjs');

// Route.post("/signup", (req, res, next) => {
//     const { phoneNumber, email, password, confirmPassword } = req.body;

//     signupSchema.findOne({email:email}).then((user)=>{
//         if(!user)
//         {
//             if(password.length >= 5)
//             {
//                 if(password === confirmPassword)
//                 {
//                     bcrypt.hash(password,10).then((hashedPassword)=>{
//                         const signup = new signupSchema({
//                             phoneNumber: phoneNumber.toString(),
//                             email,
//                             password:hashedPassword,
//                             otp:Math.floor(1000 + Math.random() * 9000)
//                         });
//                         signup.save().then((result)=>{
//                             console.log("1 Row Inseretd");
//                             return res.status(200).json({message:"Successfully Signedup"});
//                         }).catch((err)=>{
//                             console.log(err);
//                         });
//                     }).then((hashed)=>{
//                         console.log("Hashed and Stored Successfully");
//                     }).catch((err)=>{
//                         console.log(err);
//                     })
//                 }
//                 else
//                 {
//                     return res.status(401).json({message:"Password Does not match"});
//                 }
//             }
//             else
//             {
//                 return res.status(402).json({message:"Password is Too Short"});
//             }
            
//         }
//         else
//         {
//             return res.status(400).json({message:"User Already Exists"});
//         }
//     })
// });


// module.exports = Route;



// import { otpHandler } from '../../front-end/AllPages/OtpPage';

const express = require('express');
const Route = express.Router();
const signupSchema = require("../Schema/signup");
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

Route.post("/signup", async (req, res, next) => {
    const { phoneNumber, email, password, confirmPassword } = req.body;

    try {
        const user = await signupSchema.findOne({ email: email });

        if (!user) {
            if (password.length >= 5) {
                if (password === confirmPassword) {
                    const hashedPassword = await bcrypt.hash(password, 10);

                    // Generate OTP
                    const otp = Math.floor(1000 + Math.random() * 9000);

                    const signup = new signupSchema({
                        phoneNumber: phoneNumber.toString(),
                        email,
                        password: hashedPassword,
                        otp,
                    });

                    await signup.save();

                    // Send OTP to the user's email
                    await sendOtpEmail(email, otp);

                    console.log("1 Row Inserted");
                    return res.status(200).json({ message: "Successfully Signed up" , otp});
                } else {
                    return res.status(401).json({ message: "Password does not match" });
                }
            } else {
                return res.status(402).json({ message: "Password is too short" });
            }
        } else {
            return res.status(400).json({ message: "User already exists" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

// Function to send OTP to user's email
const sendOtpEmail = async (email, otp) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mrpubgahmed@gmail.com', // replace with your email
                pass: 'grtr dpye abgf cjds',        // replace with your password
            },
        });

        const mailOptions = {
            from: 'mrpubgahmed@gmail.com',   // replace with your email
            to: email,
            subject: 'OTP for Sign Up',
            text: `Your OTP for sign up is: ${otp}`,
        };

        await transporter.sendMail(mailOptions);
        console.log('OTP Email sent successfully');
    } catch (error) {
        console.error('Error sending OTP email:', error);
    }
};

module.exports = Route;



// const express = require('express');
// const Route = express.Router();
// const signupSchema = require("../Schema/signup");
// const bcrypt = require('bcryptjs');
// const { Twilio } = require('twilio');

// const accountSid = "ACd2b99ebd3212da2c1bb1a88b740833df";
// const authToken = "3f770ff1d348595eeede51fb6f45445b";
// const verifySid = "VA897e8fd01cea0c8aa368a83642d62017";
// const twilioClient = new Twilio(accountSid, authToken);

// Route.post("/signup", async (req, res, next) => {
//     const { phoneNumber, email, password, confirmPassword } = req.body;

//     try {
//         const user = await signupSchema.findOne({ email: email });

//         if (!user) {
//             if (password.length >= 5) {
//                 if (password === confirmPassword) {
//                     const hashedPassword = await bcrypt.hash(password, 10);

//                     // Generate OTP
//                     const otp = Math.floor(1000 + Math.random() * 9000);

//                     const signup = new signupSchema({
//                         phoneNumber: phoneNumber.toString(),
//                         email,
//                         password: hashedPassword,
//                         otp,
//                     });

//                     await signup.save();

//                     // Send OTP to the user's phone number
//                     await sendOtpSMS(phoneNumber, otp);

//                     console.log("1 Row Inserted");
//                     return res.status(200).json({ message: "Successfully Signed up" });
//                 } else {
//                     return res.status(401).json({ message: "Password does not match" });
//                 }
//             } else {
//                 return res.status(402).json({ message: "Password is too short" });
//             }
//         } else {
//             return res.status(400).json({ message: "User already exists" });
//         }
//     } catch (err) {
//         console.error(err);
//         return res.status(500).json({ message: "Internal Server Error" });
//     }
// });

// // Function to send OTP to user's phone number
// const sendOtpSMS = async (phoneNumber, otp) => {
//     try {
//         await twilioClient.messages.create({
//             body: `Your OTP for sign up is: ${otp}`,
//             from: '+923404232435', // replace with your Twilio phone number
//             to: phoneNumber,
//         });

//         console.log('OTP SMS sent successfully');
//     } catch (error) {
//         console.error('Error sending OTP SMS:', error);
//     }
// };

// // Route for OTP verification
// Route.post("/verify-otp", async (req, res, next) => {
//     const { phoneNumber, otpCode } = req.body;

//     try {
//         const verification_check = await twilioClient.verify
//             .services(verifySid)
//             .verificationChecks.create({ to: phoneNumber, code: otpCode });

//         console.log(verification_check.status);

//         return res.status(200).json({ status: verification_check.status });
//     } catch (error) {
//         console.error('Error during OTP verification:', error);
//         return res.status(500).json({ message: "Internal Server Error" });
//     }
// });

// module.exports = Route;

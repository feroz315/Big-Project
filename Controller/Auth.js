import UserModal from '../Modal/UserScheme.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



const UserSignup = async(req,res) => {
    try {
           const { email, password, firstname, lastname } = req.body;
           if (!email || !password || !firstname || !lastname) {
               res.status(400).json({
                   message: "invaild email & password !",
                   data: null, 
                   status: false,
            })
               return;
           }
   
           const emailExit = await UserModal.findOne({email})
           if (emailExit !== null) {
               res.status(400).json({
                   message: "email is already exit"
               })
               return;
           }
   
           const hashPass = await bcrypt.hash(password, 10)
           const obj = {
               ...req.body,
               password: hashPass
           };
   
           const respone = await UserModal.create(obj)
           console.log(respone, "respone")
           res.json({
               message: "user successfully Signup!",
               status: true,
   
           });
   
       } catch (error) {
           res.json({
               message: error.message
           });
       }
   
   
   }
   
const UserLogin = async(req,res) => { 
       try {
           const { email, password } = req.body;
           if (!email || !password) {
               res.json({
                   message: "required fields are missing!",
                   data: null,
                   status: false,
   
               });
               return;
           }
   
           const checkemail = await UserModal.findOne({ email });
           if (!checkemail) {
               res.status(400).json({
                   message: "invaild email & password"
               });
               return;
           }
   
           const comparepass = await bcrypt.compare(password, checkemail.password);
           if (!comparepass) {
               res.status(400).json({
                   message: "invaild email & password"
               });
               return;
           }
           const obj = {
               email: checkemail.email,
               _id: checkemail._id,
               firstname: checkemail.firstname,
               lastname: checkemail.lastname,
           }      
   
           const token = jwt.sign(obj, "PAK" );

               res.json({
               message: "Login Successfully..!",
               data: token,
               success: true,
                             
           });
   
       } catch (error) {
           res.json({
               message: error.message
           })
       }
   }

const UserLogOut = async(req,res) => {
try {
        res.clearCookie("token")
        res.json({
            message: "Logged out successfully",
            error: false,
            success: true,
            data: []
        })
} catch (err) {
    res.json({
        message : err.message || err,
        error: true,
        success: false,
    })
 }
} 


    
export  {
       UserSignup,
       UserLogin,
       UserLogOut,
}
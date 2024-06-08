
import jwt from "jsonwebtoken";



const authMiddleware = async(req,res,next) => {
    console.log(req.headers["authorization"]);
   try {
       if(req.headers["authorization"]){
           const token = req.headers["authorization"].split(" ");
           console.log(token);

           const isVerify = jwt.verify(token, "PRIVATEKEY");
           console.log("isVerify", isVerify);
           
           if(isVerify){
               next()
           }
       }else{
           res.json({
               message: "UNAUTH"
           });
          
       }
   } catch (error) {
       res.json({
           message: "UNAUTH"
       });
    }
   }

const authtoken = async(req,res,next) => {
    try {
        const token = res.cookie?.token
        console.log("token",token)
        if(!token){
            res.json({
                message: "Please Login...!",
                error: true,
                success: false,
            })
        }
        jwt.verify(token, "PAK", function(err,decoded) {
            console.log(err);
            console.log(decoded);

            if(err){
                console.log("error auth", err)
            }
            req._id = decoded?._id;
            
            next();
            
        });

        
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            data: [],
            error: true,
            success: false

        });
    }
}



 export { 
    authMiddleware,
    authtoken,
};





// LiaquatMemorialMRH3
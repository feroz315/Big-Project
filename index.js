import express from "express";


const app = express();
const PORT = 5000;



app.get("/", (( req,res ) => {
    res.json({
        message:"server is connect"
    })
}));


app.listen(PORT, () => {
 console.log(`Server is localhost://${PORT}`)
})
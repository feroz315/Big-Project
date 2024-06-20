import express from "express";
const routes = express.Router();
import { getAllProducts,getProductDetails } from "../Controller/Product.js";
import { UserSignup,UserLogin,UserLogOut } from "../Controller/Auth.js";
import { authtoken } from "../Middlewares/Index.js";
// import { products } from "../Products.js";



routes.get("/products", getAllProducts,authtoken);
routes.get("/products-details", getProductDetails);


// routes.get("/products/:id", async (req, res) => {
//     const { id } = req.params;
//     try {
//       const singleproduct = await products.findById({ _id: id });
//       res.status(200).json(singleproduct);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });



routes.post("/signup", UserSignup);
routes.post("/login", UserLogin,authtoken);
routes.get("/logout", UserLogOut);







export default routes;
import express from "express";
const routes = express.Router();
import { getAllProducts,getSingleProduct } from "../Controller/Product.js";
import { UserSignup,UserLogin,UserLogOut } from "../Controller/Auth.js";
import { authtoken } from "../Middlewares/Index.js";



routes.get("/products", getAllProducts,authtoken);
routes.get("/products/:id", getSingleProduct);
routes.post("/signup", UserSignup);
routes.post("/login", UserLogin,authtoken);
routes.get("/logout", UserLogOut);







export default routes;
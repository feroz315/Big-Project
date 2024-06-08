import express from "express";
const routes = express.Router();
import { getAllProducts,getSingleProduct } from "../Controller/Product.js";
import { UserSignup,UserLogin,UserLogOut } from "../Controller/Auth.js";
import { authMiddleware } from "../Middlewares/Index.js";



routes.get("/products", getAllProducts,authMiddleware);
routes.get("/products/:id", getSingleProduct,getSingleProduct);
routes.post("/signup", UserSignup);
routes.post("/login", UserLogin);
routes.get("/logout", UserLogOut);







export default routes;
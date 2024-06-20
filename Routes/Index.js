import express from "express";
const routes = express.Router();
import { getAllProducts,getSingleProduct } from "../Controller/Product.js";
import { UserSignup,UserLogin,UserLogOut } from "../Controller/Auth.js";
import { authtoken } from "../Middlewares/Index.js";



routes.get("/products", getAllProducts,authtoken);
// routes.get("/products/:id", getSingleProduct);


routes.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const singleproduct = await userData.findById({ _id: id });
      res.status(200).json(singleproduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });



routes.post("/signup", UserSignup);
routes.post("/login", UserLogin,authtoken);
routes.get("/logout", UserLogOut);







export default routes;
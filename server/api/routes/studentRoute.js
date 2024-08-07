import express from "express"
import { create, FetchStudent, UpdateStudent, DeleteStudent } from "../Controllers/studentController.js";

const  Router = express.Router();

Router.post("/create", create);
Router.get("/fetch", FetchStudent);
Router.put("/update/:id", UpdateStudent);
Router.delete("/delete/:id", DeleteStudent);

export default Router;
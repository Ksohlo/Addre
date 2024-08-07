import express from "express";
import { create,fetch } from "../Controllers/attendanceController.js";

const attendanceRouter = express.Router();


attendanceRouter.post("/create", create);
attendanceRouter.get("/fetch", fetch);



export default attendanceRouter;
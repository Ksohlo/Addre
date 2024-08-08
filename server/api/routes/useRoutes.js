import express from "express";
import {Fetch, Create, Update, DeleteUser, Login} from "../Controllers/UserController.js" // eslint-disable-line import/no-unresolved


const router = express.Router();


router.post("/create", Create);
router.get("/fetch", Fetch);
router.put("update/:id", Update);
router.delete("delete/:id", DeleteUser);
router.post("/login", Login);

export default router
import express from "express";
import { authLogin, getData } from "../controllers/auth.js";

const router = express.Router();

router.route("/").get(getData);
router.route("/login").post(authLogin);

export default router;

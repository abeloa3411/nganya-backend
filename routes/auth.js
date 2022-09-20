import express from "express";
import { authCreate, authLogin } from "../controllers/auth.js";

const router = express.Router();

router.route("/login").post(authLogin);
router.route("/create").post(authCreate);

export default router;

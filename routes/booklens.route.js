import express from "express";
import { getBooklens, newBooklens } from "../controllers/booklens.controller.js";

const router = express.Router();

router.get("/", getBooklens);
router.post("/", newBooklens);

export default router;

import express from "express";
import { getRecommend, newRecommend } from "../controllers/recommend.controller.js";

const router = express.Router();

router.get("/:id", getRecommend);
router.post("/", newRecommend);

export default router;

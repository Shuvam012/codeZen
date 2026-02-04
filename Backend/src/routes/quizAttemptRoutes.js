import express from "express";
import { protect } from "../middleware/authMiddleware.js";

import {
    // getQuizForUser,
    startQuiz,
    submitQuiz,
    getMyAttempts,
} from "../controllers/quizAttemptController.js";

const router = express.Router();

router.get("/:quizId/start", protect, startQuiz);
router.post("/submit", protect, submitQuiz);
router.get("/my/attempts", protect, getMyAttempts);

export default router;
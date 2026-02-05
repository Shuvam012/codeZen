import express from "express";
import { protect } from "../middleware/authMiddleware.js";

import {
    // getQuizForUser,
    startQuiz,
    submitQuiz,
    getMyAttempts,
    getPublicTopics,
    getQuizById,
    getTopics,
    getQuizByTopic
} from "../controllers/quizAttemptController.js";

const router = express.Router();

// router.get("/:quizId/start", protect, startQuiz);
// router.post("/submit", protect, submitQuiz);
// router.get("/my/attempts", protect, getMyAttempts);
// // router.get("/topics", getPublicTopics);
// router.get("/:id", getQuizById);
// router.get("/topics", getTopics);


router.get("/topics", getTopics);

router.get("/topic/:topic", getQuizByTopic);

router.get("/:quizId/start", protect, startQuiz);
router.post("/submit", protect, submitQuiz);
router.get("/my/attempts", protect, getMyAttempts);
router.get("/:id", getQuizById);




export default router;
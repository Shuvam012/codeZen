import express from "express"
import {protect} from "../middleware/authMiddleware.js"
import {getLeaderboardByTopic,getMyStats} from "../controllers/leaderboardController.js"

const router = express.Router();

router.get("/:topic", getLeaderboardByTopic);
router.get("/me/stats", protect, getMyStats);

export default router
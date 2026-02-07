import express from "express"
import {protect} from "../middleware/authMiddleware.js"
import {getLeaderboardByTopic,getMyStats} from "../controllers/leaderboardController.js"

const router = express.Router();

// router.get("/:topic", getLeaderboardByTopic);
// router.get("/me/stats", protect, getMyStats);

router.get("/me/stats", protect, getMyStats);
router.get("/:topic", getLeaderboardByTopic);


export default router
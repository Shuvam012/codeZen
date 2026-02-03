import express from "express";
import { 
    createQuiz,
    getAllQuizzes,
    updateQuiz,
    deleteQuiz 
} from "../controllers/adminQuizControllers.js";

import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminMiddleware.js";


const router = express.Router();

router.use(protect,adminOnly)

router.post('/', createQuiz)
router.get('/', getAllQuizzes)
router.put('/:id', updateQuiz)
router.delete('/:id', deleteQuiz)


export default router
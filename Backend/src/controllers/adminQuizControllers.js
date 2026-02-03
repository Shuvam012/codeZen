
import Quiz from "../models/Quiz.js";

/* ---------------- CREATE QUIZ ---------------- */
 const createQuiz = async (req, res) => {
  try {
    const { title, topic, questions } = req.body;

    if (!title || !topic || !questions || questions.length === 0) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const quiz = await Quiz.create({
      title,
      topic,
      questions,
      createdBy: req.user.id, // from JWT
    });

    res.status(201).json({
      message: "Quiz created successfully",
      quiz,
    });
  } catch (error) {
    console.error("Create Quiz Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/* ---------------- GET ALL QUIZZES ---------------- */
 const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find()
      .populate("createdBy", "name email role")
      .sort({ createdAt: -1 });

    res.status(200).json(quizzes);
  } catch (error) {
    console.error("Get All Quizzes Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/* ---------------- UPDATE QUIZ ---------------- */
 const updateQuiz = async (req, res) => {
  try {
    const { id } = req.params;

    const quiz = await Quiz.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    res.status(200).json({
      message: "Quiz updated successfully",
      quiz,
    });
  } catch (error) {
    console.error("Update Quiz Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/* ---------------- DELETE QUIZ ---------------- */
const deleteQuiz = async (req, res) => {
  try {
    const { id } = req.params;

    const quiz = await Quiz.findByIdAndDelete(id);

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    res.status(200).json({ message: "Quiz deleted successfully" });
  } catch (error) {
    console.error("Delete Quiz Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { createQuiz, getAllQuizzes, updateQuiz, deleteQuiz };

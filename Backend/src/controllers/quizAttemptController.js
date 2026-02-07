

import mongoose from "mongoose";
import Quiz from "../models/Quiz.js";
import QuizAttempt from "../models/QuizAttempt.js";

/* ---------------- START QUIZ ---------------- */
const startQuiz = async (req, res) => {
  const { quizId } = req.params;

  const quiz = await Quiz.findById(quizId).select("-questions.correctAnswer");
  if (!quiz) {
    return res.status(404).json({ message: "Quiz not found" });
  }

  let attempt = await QuizAttempt.findOne({
    user: req.user.id,
    quiz: quizId,
    submittedAt: { $exists: false },
  });

  if (!attempt) {
    attempt = await QuizAttempt.create({
      user: req.user.id,
      quiz: quizId,
      totalQuestions: quiz.questions.length,
    });
  }

  res.status(200).json({
    attemptId: attempt._id,
    timeLimit: quiz.timeLimit,
    quiz,
  });
};

/* ---------------- SUBMIT QUIZ ---------------- */
// const submitQuiz = async (req, res) => {
//   const { quizId, answers } = req.body;

//   // const quiz = await Quiz.findById(quizId);
//   const quiz = await Quiz.findById(quizId).select("+questions.correctAnswer");

//   if (!quiz) return res.status(404).json({ message: "Quiz not found" });

//   const attempt = await QuizAttempt.findOne({
//     user: req.user.id,
//     quiz: quizId,
//     submittedAt: { $exists: false },
//   });

//   if (!attempt) {
//     return res.status(400).json({ message: "Quiz not started" });
//   }

//   // ⏱ TIMER CHECK
//   const elapsedMinutes =
//     (Date.now() - attempt.startedAt.getTime()) / 1000 / 60;

//   if (elapsedMinutes > quiz.timeLimit) {
//     return res.status(403).json({ message: "Time is over" });
//   }

//   let score = 0;
//   quiz.questions.forEach((q) => {
//     const ans = answers.find(
//       (a) => a.questionId.toString() === q._id.toString()
//     );
//     if (ans && ans.selectedOption === q.correctAnswer) score++;
//   });

//   attempt.answers = answers;
//   attempt.score = score;
//   attempt.submittedAt = new Date();
//   await attempt.save();

//   res.json({
//     message: "Quiz submitted successfully",
//     score,
//     totalQuestions: quiz.questions.length,
//   });
// };


const submitQuiz = async (req, res) => {
  const { quizId, answers } = req.body;

  const quiz = await Quiz.findById(quizId)
    .select("+questions.correctAnswer");

  if (!quiz) {
    return res.status(404).json({ message: "Quiz not found" });
  }

  const attempt = await QuizAttempt.findOne({
    user: req.user.id,
    quiz: quizId,
    submittedAt: { $exists: false },
  });

  if (!attempt) {
    return res.status(400).json({ message: "Quiz not started" });
  }

  let score = 0;

  quiz.questions.forEach((q) => {
    const ans = answers.find(
      (a) => a.questionId.toString() === q._id.toString()
    );

    if (ans && ans.selectedOption === q.correctAnswer) {
      score++;
    }
  });

  attempt.answers = answers;
  attempt.score = score;
  attempt.submittedAt = new Date();
  await attempt.save();

  res.json({
    message: "Quiz submitted successfully",
    score,
    totalQuestions: quiz.questions.length,
  });
};

/* ---------------- USER ATTEMPTS ---------------- */
const getMyAttempts = async (req, res) => {
  const attempts = await QuizAttempt.find({ user: req.user.id })
    .populate("quiz", "title topic")
    .sort({ createdAt: -1 });

  res.json(attempts);
};




const getPublicTopics = async (req, res) => {
  try {
    // We fetch all quizzes but only return the necessary info for the topic cards
    const quizzes = await Quiz.find().select("title topic timeLimit questions");
    
    // Transform data to match your frontend "Topic Card" expectations
    const topics = quizzes.map(quiz => ({
      _id: quiz._id,
      name: quiz.topic, // The topic name (e.g., "DSA")
      title: quiz.title, // The specific quiz title
      questionsCount: quiz.questions.length,
      estimatedTime: quiz.timeLimit,
      difficulty: "Medium" // You can add a difficulty field to your Schema later
    }));

    res.status(200).json(topics);
  } catch (error) {
    res.status(500).json({ message: "Error fetching topics" });
  }
};

 const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    res.status(200).json(quiz);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};




const getTopics = async (req, res) => {
  try {
    const topics = await Quiz.aggregate([
      {
        $group: {
          _id: "$topic",
          quizCount: { $sum: 1 },
          totalQuestions: {
            $sum: { $size: { $ifNull: ["$questions", []] } }
          },
          estimatedTime: { $sum: { $ifNull: ["$timeLimit", 0] } }
        }
      },
      {
        $project: {
          _id: 0,
          topic: "$_id",
          quizCount: 1,
          totalQuestions: 1,
          estimatedTime: 1
        }
      }
    ]);

    res.status(200).json(topics);
  } catch (err) {
    console.error("Aggregation Error:", err);
    res.status(500).json({ message: "Failed to fetch topics" });
  }
};

const getQuizByTopic = async (req, res) => {
  try {
    const { topic } = req.params;

    const quiz = await Quiz.findOne({ topic });
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found for this topic" });
    }

    res.status(200).json(quiz);
  } catch (err) {
    console.error("GetQuizByTopic Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};




//  const getMyRecentAttempts = async (req, res) => {
//   try {
//     if (!req.user || !req.user._id) {
//       return res.status(401).json({ message: "Not authorized" });
//     }

//     const limit = parseInt(req.query.limit) || 5;

//     const attempts = await QuizAttempt.find({ user: req.user._id })
//       .sort({ submittedAt: -1, startedAt: -1 })
//       .limit(limit)
//       .populate("quiz", "title topic totalQuestions");

//     res.status(200).json(attempts);
//   } catch (err) {
//     console.error("Fetch Recent Attempts Error:", err);
//     res.status(500).json({ message: "Failed to load recent attempts", error: err.message });
//   }
// };

// const getMyRecentAttempts = async (req, res) => {
//   try {
//     if (!req.user || !req.user.id) {
//       return res.status(401).json({ message: "Not authorized" });
//     }

//     const limit = parseInt(req.query.limit) || 5;

//     // Populate quiz, then map to add totalQuestions
//     const attempts = await QuizAttempt.find({ user: req.user._id })
//       .sort({ submittedAt: -1, startedAt: -1 })
//       .limit(limit)
//       .populate("quiz", "title topic questions");

//     const formattedAttempts = attempts.map((attempt) => ({
//       _id: attempt._id,
//       score: attempt.score,
//       totalQuestions: attempt.quiz?.questions.length || 0,
//       startedAt: attempt.startedAt,
//       submittedAt: attempt.submittedAt,
//       quiz: {
//         _id: attempt.quiz?._id,
//         title: attempt.quiz?.title || "Untitled Quiz",
//         topic: attempt.quiz?.topic || "No topic",
//       },
//     }));

//     res.status(200).json(formattedAttempts);
//   } catch (err) {
//     console.error("Fetch Recent Attempts Error:", err);
//     res.status(500).json({
//       message: "Failed to load recent attempts",
//       error: err.message,
//     });
//   }
// };


// const getMyRecentAttempts = async (req, res) => {
//   try {
//     console.log("getMyRecentAttempts called");
//     console.log("req.user:", req.user);

//     if (!req.user || !req.user._id) {
//       return res.status(401).json({ message: "Not authorized" });
//     }

//     const limit = parseInt(req.query.limit) || 5;
//     console.log("limit:", limit);

//     const attempts = await QuizAttempt.find({ user: req.user._id })
//       .sort({ submittedAt: -1, startedAt: -1 })
//       .limit(limit)
//       .populate("quiz", "title topic questions");

//     console.log("attempts fetched:", attempts.length);

//     const formattedAttempts = attempts.map((attempt) => ({
//       _id: attempt._id,
//       score: attempt.score,
//       totalQuestions: attempt.quiz?.questions.length || 0,
//       startedAt: attempt.startedAt,
//       submittedAt: attempt.submittedAt,
//       quiz: {
//         _id: attempt.quiz?._id,
//         title: attempt.quiz?.title || "Untitled Quiz",
//         topic: attempt.quiz?.topic || "No topic",
//       },
//     }));

//     console.log("formattedAttempts:", formattedAttempts);

//     res.status(200).json(formattedAttempts);
//   } catch (err) {
//     console.error("Fetch Recent Attempts Error:", err);
//     res.status(500).json({
//       message: "Failed to load recent attempts",
//       error: err.message,
//     });
//   }
// };


// const getMyRecentAttempts = async (req, res) => {
//   try {
//     console.log("getMyRecentAttempts called");
//     console.log("req.user:", req.user);

//     if (!req.user || !req.user._id) {
//       console.log("User not authorized");
//       return res.status(401).json({ message: "Not authorized" });
//     }

//     const limit = parseInt(req.query.limit) || 5;
//     console.log("Limit:", limit);

//     const attempts = await QuizAttempt.find({ user: req.user._id })
//       .sort({ submittedAt: -1, startedAt: -1 })
//       .limit(limit)
//       .populate("quiz", "title topic questions")
//       .exec();

//     console.log("Attempts fetched:", attempts);

//     const formattedAttempts = attempts.map((attempt) => ({
//       _id: attempt._id,
//       score: attempt.score,
//       totalQuestions: attempt.quiz?.questions?.length || 0,
//       startedAt: attempt.startedAt,
//       submittedAt: attempt.submittedAt,
//       quiz: {
//         _id: attempt.quiz?._id,
//         title: attempt.quiz?.title || "Untitled Quiz",
//         topic: attempt.quiz?.topic || "No topic",
//       },
//     }));

//     console.log("Formatted Attempts:", formattedAttempts);

//     res.status(200).json(formattedAttempts);
//   } catch (err) {
//     console.error("Full Error in getMyRecentAttempts:", err);
//     res.status(500).json({
//       message: "Failed to load recent attempts",
//       error: err.message,
//     });
//   }
// };


const getMyRecentAttempts = async (req, res) => {
  try {
    console.log("getMyRecentAttempts called");
    console.log("req.user:", req.user);

    if (!req.user || !req.user._id) {
      console.log("User not authenticated");
      return res.status(401).json({ message: "Not authenticated" });
    }

    const limit = parseInt(req.query.limit) || 5;
    console.log("Limit:", limit);

    const attempts = await QuizAttempt.find({ user: req.user._id, quiz: { $ne: null } })
      .sort({ submittedAt: -1, startedAt: -1 })
      .limit(limit)
      .populate("quiz", "title topic questions")
      .exec();

    console.log("Attempts fetched:", attempts);

    const formattedAttempts = attempts.map((attempt) => ({
      _id: attempt._id,
      score: attempt.score,
      totalQuestions: attempt.quiz?.questions?.length || 0,
      startedAt: attempt.startedAt,
      submittedAt: attempt.submittedAt,
      quiz: {
        _id: attempt.quiz?._id,
        title: attempt.quiz?.title || "Untitled Quiz",
        topic: attempt.quiz?.topic || "No topic",
      },
    }));

    console.log("Formatted attempts:", formattedAttempts);

    res.status(200).json(formattedAttempts);
  } catch (err) {
    console.error("Full error in getMyRecentAttempts:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};









export { startQuiz, submitQuiz, getMyAttempts, getPublicTopics , getQuizById, getTopics , getQuizByTopic,
  getMyRecentAttempts}
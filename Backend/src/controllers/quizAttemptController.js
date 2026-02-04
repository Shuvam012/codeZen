// import Quiz from "../models/Quiz.js";
// import QuizAttempt from "../models/QuizAttempt.js";


//  const getQuizForUser = async (req, res) => {
//   const { quizId } = req.params;

//   const quiz = await Quiz.findById(quizId).select("-questions.correctAnswer");

//   if (!quiz) {
//     return res.status(404).json({ message: "Quiz not found" });
//   }

//   res.json(quiz);
// };



//  const submitQuiz = async (req, res) => {
//   const { quizId, answers } = req.body;

//   const quiz = await Quiz.findById(quizId);
//   if (!quiz) return res.status(404).json({ message: "Quiz not found" });

//   let score = 0;

//   quiz.questions.forEach((q) => {
//     const userAnswer = answers.find(
//       (a) => a.questionId.toString() === q._id.toString()
//     );

//     if (userAnswer && userAnswer.selectedOption === q.correctAnswer) {
//       score++;
//     }
//   });

//   const attempt = await QuizAttempt.create({
//     user: req.user.id,
//     quiz: quizId,
//     answers,
//     score,
//     totalQuestions: quiz.questions.length,
//   });

//   res.status(201).json({
//     message: "Quiz submitted successfully",
//     score,
//     totalQuestions: quiz.questions.length,
//   });
// };


//  const getMyAttempts = async (req, res) => {
//   const attempts = await QuizAttempt.find({ user: req.user.id })
//     .populate("quiz", "topic")
//     .sort({ createdAt: -1 });

//   res.json(attempts);
// };


// export {
//   getQuizForUser,
//   submitQuiz,
//   getMyAttempts,
// };


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
const submitQuiz = async (req, res) => {
  const { quizId, answers } = req.body;

  const quiz = await Quiz.findById(quizId);
  if (!quiz) return res.status(404).json({ message: "Quiz not found" });

  const attempt = await QuizAttempt.findOne({
    user: req.user.id,
    quiz: quizId,
    submittedAt: { $exists: false },
  });

  if (!attempt) {
    return res.status(400).json({ message: "Quiz not started" });
  }

  // ⏱ TIMER CHECK
  const elapsedMinutes =
    (Date.now() - attempt.startedAt.getTime()) / 1000 / 60;

  if (elapsedMinutes > quiz.timeLimit) {
    return res.status(403).json({ message: "Time is over" });
  }

  let score = 0;
  quiz.questions.forEach((q) => {
    const ans = answers.find(
      (a) => a.questionId.toString() === q._id.toString()
    );
    if (ans && ans.selectedOption === q.correctAnswer) score++;
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

export { startQuiz, submitQuiz, getMyAttempts };

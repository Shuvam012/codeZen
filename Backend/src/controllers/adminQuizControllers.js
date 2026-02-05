
// import Quiz from "../models/Quiz.js";

// /* ---------------- CREATE QUIZ ---------------- */
//  const createQuiz = async (req, res) => {
//   try {
//     const { title, topic, questions } = req.body;

//     if (!title || !topic || !questions || questions.length === 0) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const quiz = await Quiz.create({
//       title,
//       topic,
//       questions,
//       // createdBy: req.user.id, // from JWT
//       createdBy: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: "User",
//   required: true
// }
//     });

//     res.status(201).json({
//       message: "Quiz created successfully",
//       quiz,
//     });
//   } catch (error) {
//     console.error("Create Quiz Error:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// /* ---------------- GET ALL QUIZZES ---------------- */
//  const getAllQuizzes = async (req, res) => {
//   try {
//     const quizzes = await Quiz.find()
//       .populate("createdBy", "name email role")
//       .sort({ createdAt: -1 });

//     res.status(200).json(quizzes);
//   } catch (error) {
//     console.error("Get All Quizzes Error:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// /* ---------------- UPDATE QUIZ ---------------- */
//  const updateQuiz = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const quiz = await Quiz.findByIdAndUpdate(id, req.body, {
//       new: true,
//       runValidators: true,
//     });

//     if (!quiz) {
//       return res.status(404).json({ message: "Quiz not found" });
//     }

//     res.status(200).json({
//       message: "Quiz updated successfully",
//       quiz,
//     });
//   } catch (error) {
//     console.error("Update Quiz Error:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// /* ---------------- DELETE QUIZ ---------------- */
// const deleteQuiz = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const quiz = await Quiz.findByIdAndDelete(id);

//     if (!quiz) {
//       return res.status(404).json({ message: "Quiz not found" });
//     }

//     res.status(200).json({ message: "Quiz deleted successfully" });
//   } catch (error) {
//     console.error("Delete Quiz Error:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// export { createQuiz, getAllQuizzes, updateQuiz, deleteQuiz };



import Quiz from "../models/Quiz.js";

/* =========================
   CREATE QUIZ (ADMIN)
========================= */
// const createQuiz = async (req, res) => {
//   try {
//     const { title, topic, questions,timeLimit } = req.body;

//     // Basic validation
//     if (!title || !topic || !questions || questions.length === 0) {
//       return res.status(400).json({
//         message: "Title, topic and questions are required",
//       });
//     }

//     // Validate questions structure
//     for (const q of questions) {
//       if (
//         !q.question ||
//         !Array.isArray(q.options) ||
//         q.options.length < 2 ||
//         q.correctAnswer === undefined
//       ) {
//         return res.status(400).json({
//           message:
//             "Each question must have question, options (min 2) and correctAnswer",
//         });
//       }
//     }

//     const quiz = await Quiz.create({
//       title,
//       topic,
//       questions,
//       timeLimit,
//       createdBy: req.user.id, // admin ID from JWT
//     });

//     res.status(201).json({
//       message: "Quiz created successfully",
//       quiz,
//     });
//   } catch (error) {
//     console.error("Create Quiz Error:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

const createQuiz = async (req, res) => {
  try {
    const { title, topic, questions, timeLimit } = req.body;

    if (!title || !topic || !questions || !timeLimit) {
      return res.status(400).json({ message: "All fields required" });
    }

    // 🔎 Check if quiz already exists for topic
    let quiz = await Quiz.findOne({ topic });

    if (quiz) {
      // ✅ Topic exists → add questions
      quiz.questions.push(...questions);
      quiz.timeLimit = timeLimit; // optional update
      await quiz.save();

      return res.status(200).json({
        message: "Questions added to existing quiz",
        quiz,
      });
    }

    // ❌ Topic does not exist → create new quiz
    quiz = await Quiz.create({
      title,
      topic,
      questions,
      timeLimit,
      createdBy: req.user.id,
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

/* =========================
   GET ALL QUIZZES (ADMIN)
========================= */
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

/* =========================
   UPDATE QUIZ (ADMIN)
========================= */
const updateQuiz = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, topic, questions } = req.body;

    const quiz = await Quiz.findById(id);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    // Optional validations
    if (questions) {
      for (const q of questions) {
        if (
          !q.question ||
          !Array.isArray(q.options) ||
          q.options.length < 2 ||
          q.correctAnswer === undefined
        ) {
          return res.status(400).json({
            message:
              "Each question must have question, options (min 2) and correctAnswer",
          });
        }
      }
    }

    quiz.title = title || quiz.title;
    quiz.topic = topic || quiz.topic;
    quiz.questions = questions || quiz.questions;

    const updatedQuiz = await quiz.save();

    res.status(200).json({
      message: "Quiz updated successfully",
      quiz: updatedQuiz,
    });
  } catch (error) {
    console.error("Update Quiz Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/* =========================
   DELETE QUIZ (ADMIN)
========================= */
const deleteQuiz = async (req, res) => {
  try {
    const { id } = req.params;

    const quiz = await Quiz.findById(id);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    await quiz.deleteOne();

    res.status(200).json({
      message: "Quiz deleted successfully",
    });
  } catch (error) {
    console.error("Delete Quiz Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { createQuiz, getAllQuizzes, updateQuiz, deleteQuiz };

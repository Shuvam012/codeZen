// import mongoose from "mongoose";


// const quizAttemptSchema = new mongoose.Schema(
//     {
//         user: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "User",
//             required: true,
//         },
//         quiz: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "Quiz",
//             required: true,
//         },
//         answers: [
//             {
//                 questionId: {
//                     type: mongoose.Schema.Types.ObjectId,
//                     required: true,
//                 },
//                 selectedOption: {
//                     type: Number, // index of option
//                     required: true,
//                 },
//             },
//         ],
//         score: {
//             type: Number,
//             required: true,
//         },
//         totalQuestions: {
//             type: Number,
//             required: true,
//         },
//         startedAt: {
//   type: Date,
//   default: Date.now
// }

//     },
//     { timestamps: true }
// );

// export default mongoose.model("QuizAttempt", quizAttemptSchema);



import mongoose from "mongoose";

const quizAttemptSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    quiz: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
      required: true,
    },
    answers: [
      {
        questionId: mongoose.Schema.Types.ObjectId,
        selectedOption: Number,
      },
    ],
    score: {
      type: Number,
      default: 0,
    },
    totalQuestions: {
      type: Number,
      required: true,
    },
    startedAt: {
      type: Date,
      default: Date.now,
    },
    submittedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.model("QuizAttempt", quizAttemptSchema);

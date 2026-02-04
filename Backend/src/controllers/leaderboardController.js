// import QuizAttempt from "../models/QuizAttempt.js";

// // Top score by topics --------------------------------------*

// const getLeaderboardByTopic = async (req, res) => {
//     try {
//         const { topic } = req.params;

//         const leaderboard = await QuizAttempt.aggregate([
//             {
//                 $lookup: {
//                     from: "quizzes",
//                     localField: "quiz",
//                     foreignField: "_id",
//                     as: "quizData",
//                 },
//             },
//             { $unwind: "$quizData" },
//             {
//                 $match: {
//                     "quizData.topic": topic,
//                 },
//             },
//             {
//                 $group: {
//                     _id: "$user",
//                     bestScore: { $max: "$score" },
//                     totalAttempts: { $sum: 1 },
//                 },
//             },
//             { $sort: { bestScore: -1 } },
//             { $limit: 10 },
//             {
//                 $lookup: {
//                     from: "users",
//                     localField: "_id",
//                     foreignField: "_id",
//                     as: "user",
//                 },
//             },
//             { $unwind: "$user" },
//             {
//                 $project: {
//                     _id: 0,
//                     userId: "$user._id",
//                     name: "$user.name",
//                     bestScore: 1,
//                     totalAttempts: 1,
//                 },
//             },
//         ]);

//         res.status(200).json(leaderboard);
//     } catch (error) {
//         console.error("Leaderboard Error:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };


//    //  USER STATS ---------------------------------------------------------*

// const getMyStats = async (req, res) => {
//     try {
//         const userId = req.user.id;

//         const stats = await QuizAttempt.aggregate([
//             { $match: { user: userId } },
//             {
//                 $group: {
//                     _id: null,
//                     totalAttempts: { $sum: 1 },
//                     bestScore: { $max: "$score" },
//                     avgScore: { $avg: "$score" },
//                 },
//             },
//         ]);

//         res.status(200).json(
//             stats[0] || {
//                 totalAttempts: 0,
//                 bestScore: 0,
//                 avgScore: 0,
//             },
//         );
//     } catch (error) {
//         console.error("Stats Error:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };

// export { getLeaderboardByTopic, getMyStats };



import QuizAttempt from "../models/QuizAttempt.js";

/* ---------------- LEADERBOARD BY TOPIC ---------------- */
const getLeaderboardByTopic = async (req, res) => {
  const { topic } = req.params;

  const leaderboard = await QuizAttempt.aggregate([
    {
      $lookup: {
        from: "quizzes",
        localField: "quiz",
        foreignField: "_id",
        as: "quiz",
      },
    },
    { $unwind: "$quiz" },
    { $match: { "quiz.topic": topic } },
    {
      $group: {
        _id: "$user",
        bestScore: { $max: "$score" },
        attempts: { $sum: 1 },
      },
    },
    { $sort: { bestScore: -1 } },
    { $limit: 10 },
    {
      $lookup: {
        from: "users",
        localField: "_id",
        foreignField: "_id",
        as: "user",
      },
    },
    { $unwind: "$user" },
    {
      $project: {
        name: "$user.name",
        bestScore: 1,
        attempts: 1,
      },
    },
  ]);

  res.json(leaderboard);
};

/* ---------------- USER STATS ---------------- */
const getMyStats = async (req, res) => {
  const stats = await QuizAttempt.aggregate([
    { $match: { user: req.user._id } },
    {
      $group: {
        _id: null,
        totalAttempts: { $sum: 1 },
        bestScore: { $max: "$score" },
        avgScore: { $avg: "$score" },
      },
    },
  ]);

  res.json(
    stats[0] || { totalAttempts: 0, bestScore: 0, avgScore: 0 }
  );
};

export { getLeaderboardByTopic, getMyStats };

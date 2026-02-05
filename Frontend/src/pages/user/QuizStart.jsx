// import React, { useState, useEffect, useCallback } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Timer, ChevronLeft, ChevronRight, Send, AlertCircle, Loader2 } from 'lucide-react';
// // import { startQuizApi, submitQuizApi } from '../api/quizService';
// import { startQuizApi, submitQuizApi } from '../../api/quizService';
// import { toast } from 'react-toastify';

// const QuizStart = () => {
//   const { quizId } = useParams();
//   const navigate = useNavigate();

//   // State
//   const [quiz, setQuiz] = useState(null);
//   const [currentIdx, setCurrentIdx] = useState(0);
//   const [answers, setAnswers] = useState({}); // { questionId: selectedOptionIndex }
//   const [timeLeft, setTimeLeft] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Fetch Quiz Data
//   useEffect(() => {
//     const initQuiz = async () => {
//       try {
//         const { data } = await startQuizApi(quizId);
//         setQuiz(data.quiz);
//         setTimeLeft(data.timeLimit * 60); // Convert minutes to seconds
//       } catch (err) {
//         toast.error(err.response?.data?.message || "Could not start quiz");
//         navigate('/topics');
//       } finally {
//         setLoading(false);
//       }
//     };
//     initQuiz();
//   }, [quizId, navigate]);

//   // Submission Logic
//   const handleSubmit = useCallback(async (isAuto = false) => {
//     if (isSubmitting) return;
//     setIsSubmitting(true);

//     const formattedAnswers = Object.entries(answers).map(([qId, opt]) => ({
//       questionId: qId,
//       selectedOption: opt
//     }));

//     try {
//       const { data } = await submitQuizApi({ quizId, answers: formattedAnswers });
//       toast.success(isAuto ? "Time up! Quiz auto-submitted." : "Quiz submitted successfully!");
//       // Navigate to a results page (we'll build this next) or dashboard
//       navigate('/dashboard', { state: { result: data } });
//     } catch (err) {
//       toast.error("Submission failed. Please contact support.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   }, [answers, quizId, navigate, isSubmitting]);

//   // Timer Logic
//   useEffect(() => {
//     if (timeLeft <= 0 && !loading && quiz) {
//       handleSubmit(true);
//       return;
//     }
//     const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
//     return () => clearInterval(timer);
//   }, [timeLeft, loading, quiz, handleSubmit]);

//   // UI Helpers
//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
//   };

//   const handleOptionSelect = (optionIdx) => {
//     setAnswers(prev => ({
//       ...prev,
//       [quiz.questions[currentIdx]._id]: optionIdx
//     }));
//   };

//   if (loading) return (
//     <div className="h-screen flex flex-col items-center justify-center bg-white">
//       <Loader2 className="animate-spin text-blue-600 mb-4" size={40} />
//       <p className="font-bold text-slate-400 uppercase tracking-widest text-sm">Initializing Secure Session...</p>
//     </div>
//   );

//   const currentQuestion = quiz.questions[currentIdx];
//   const totalQuestions = quiz.questions.length;
//   const progress = ((currentIdx + 1) / totalQuestions) * 100;

//   return (
//     <div className="min-h-screen bg-slate-50 flex flex-col items-center py-10 px-6">
//       <div className="w-full max-w-3xl">
        
//         {/* Header: Title & Timer */}
//         <div className="flex justify-between items-center mb-8">
//           <div>
//             <h1 className="text-2xl font-black text-slate-900">{quiz.title}</h1>
//             <p className="text-slate-500 text-sm font-medium">Topic: {quiz.topic}</p>
//           </div>
//           <div className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-mono font-bold text-lg shadow-sm border ${
//             timeLeft < 60 ? 'bg-red-50 text-red-600 border-red-100 animate-pulse' : 'bg-white text-slate-700 border-slate-200'
//           }`}>
//             <Timer size={20} />
//             {formatTime(timeLeft)}
//           </div>
//         </div>

//         {/* Progress Bar */}
//         <div className="w-full h-2 bg-slate-200 rounded-full mb-8 overflow-hidden">
//           <div 
//             className="h-full bg-blue-600 transition-all duration-300" 
//             style={{ width: `${progress}%` }}
//           />
//         </div>

//         {/* Main Quiz Card */}
//         <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
//           <div className="mb-10">
//             <span className="text-blue-600 font-black text-sm uppercase tracking-widest mb-2 block">
//               Question {currentIdx + 1} of {totalQuestions}
//             </span>
//             <h2 className="text-xl md:text-2xl font-bold text-slate-800 leading-snug">
//               {currentQuestion.question}
//             </h2>
//           </div>

//           {/* Options List */}
//           <div className="space-y-4 mb-12">
//             {currentQuestion.options.map((option, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => handleOptionSelect(idx)}
//                 className={`w-full text-left p-5 rounded-2xl border-2 font-semibold transition-all flex items-center justify-between group ${
//                   answers[currentQuestion._id] === idx 
//                   ? 'border-blue-600 bg-blue-50 text-blue-700' 
//                   : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-300'
//                 }`}
//               >
//                 <span>{option}</span>
//                 <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
//                   answers[currentQuestion._id] === idx 
//                   ? 'border-blue-600 bg-blue-600' 
//                   : 'border-slate-300 group-hover:border-slate-400'
//                 }`}>
//                   {answers[currentQuestion._id] === idx && <div className="w-2 h-2 bg-white rounded-full" />}
//                 </div>
//               </button>
//             ))}
//           </div>

//           {/* Navigation Controls */}
//           <div className="flex items-center justify-between border-t border-slate-100 pt-8">
//             <button
//               disabled={currentIdx === 0}
//               onClick={() => setCurrentIdx(prev => prev - 1)}
//               className="flex items-center gap-2 px-6 py-3 font-bold text-slate-400 disabled:opacity-30 hover:text-slate-600 transition-colors"
//             >
//               <ChevronLeft size={20} /> Previous
//             </button>

//             {currentIdx === totalQuestions - 1 ? (
//               <button
//                 onClick={() => handleSubmit()}
//                 disabled={isSubmitting}
//                 className="flex items-center gap-2 px-8 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all shadow-lg shadow-green-200 disabled:opacity-50"
//               >
//                 {isSubmitting ? "Submitting..." : "Finish Quiz"}
//                 <Send size={18} />
//               </button>
//             ) : (
//               <button
//                 onClick={() => setCurrentIdx(prev => prev + 1)}
//                 className="flex items-center gap-2 px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-lg"
//               >
//                 Next <ChevronRight size={20} />
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Warning Note */}
//         <div className="mt-8 flex items-center gap-3 text-slate-400 justify-center">
//           <AlertCircle size={16} />
//           <p className="text-xs font-medium">Do not refresh the page. Your progress will be lost.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuizStart;



// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import API from "../../api/axios";
// import { Clock } from "lucide-react";
// import { toast } from "react-toastify";

// const QuizStart = () => {
//   const { topicId } = useParams();
//   const navigate = useNavigate();

//   const [quiz, setQuiz] = useState(null);
//   const [currentQ, setCurrentQ] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [timeLeft, setTimeLeft] = useState(0);
//   const [loading, setLoading] = useState(true);

//   /* ---------------- Fetch Quiz ---------------- */
//   useEffect(() => {
//     const fetchQuiz = async () => {
//       try {
//         const res = await API.get(`/quiz/topic/${topicId}`);

//         setQuiz(res.data);
//         setTimeLeft(res.data.timeLimit * 60);
//       } catch (err) {
//         toast.error("Failed to load quiz");
//         navigate("/topics");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchQuiz();
//   }, [topicId, navigate]);

//   /* ---------------- Timer ---------------- */
//   // useEffect(() => {
//   //   if (timeLeft <= 0) {
//   //     handleSubmit();
//   //     return;
//   //   }

//   //   const timer = setInterval(() => {
//   //     setTimeLeft((t) => t - 1);
//   //   }, 1000);

//   //   return () => clearInterval(timer);
//   // }, [timeLeft]);

// useEffect(() => {
//   if (!quiz) return;          // 🛑 wait for quiz
//   if (timeLeft <= 0) {
//     handleSubmit();
//     return;
//   }

//   const timer = setInterval(() => {
//     setTimeLeft((t) => t - 1);
//   }, 1000);

//   return () => clearInterval(timer);
// }, [timeLeft, quiz]);


//   /* ---------------- Handlers ---------------- */
//   const handleOptionSelect = (index) => {
//     setAnswers({
//       ...answers,
//       [currentQ]: index,
//     });
//   };

//   // const handleSubmit = () => {
//   //   navigate("/result/${attemptId}", {
//   //     state: {
//   //       quiz,
//   //       answers,
//   //     },
//   //   });
//   // };

//  const handleSubmit = async () => {
//   const res = await API.post("/quiz/submit", {
//     quizId: quiz._id,
//     answers: Object.entries(answers).map(([index, value]) => ({
//       questionId: quiz.questions[index]._id,
//       selectedOption: value,
//     })),
//   });

//   navigate("/result", {
//     state: {
//       result: {
//         quizId: quiz._id,
//         quizTitle: quiz.title,
//         score: res.data.score,
//         totalQuestions: res.data.totalQuestions,
//       },
//     },
//   });
// };


//   if (loading) {
//     return <div className="text-center py-20">Loading quiz...</div>;
//   }

//   const question = quiz.questions[currentQ];

//   return (
//     <div className="min-h-screen bg-slate-50 px-6 py-10">
//       <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow">

//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-2xl font-black">{quiz.title}</h1>
//           <div className="flex items-center gap-2 text-red-600 font-bold">
//             <Clock size={18} />
//             {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
//           </div>
//         </div>

//         {/* Question */}
//         <h2 className="text-lg font-bold mb-6">
//           Q{currentQ + 1}. {question.question}
//         </h2>

//         {/* Options */}
//         <div className="space-y-4">
//           {question.options.map((opt, idx) => (
//             <button
//               key={idx}
//               onClick={() => handleOptionSelect(idx)}
//               className={`w-full text-left px-6 py-4 rounded-xl border font-medium transition
//                 ${
//                   answers[currentQ] === idx
//                     ? "bg-blue-600 text-white border-blue-600"
//                     : "bg-slate-50 hover:bg-blue-50 border-slate-200"
//                 }`}
//             >
//               {opt}
//             </button>
//           ))}
//         </div>

//         {/* Navigation */}
//         <div className="flex justify-between mt-10">
//           <button
//             disabled={currentQ === 0}
//             onClick={() => setCurrentQ((q) => q - 1)}
//             className="px-6 py-3 rounded-xl bg-slate-200 font-bold disabled:opacity-50"
//           >
//             Previous
//           </button>

//           {currentQ === quiz.questions.length - 1 ? (
//             <button
//               onClick={handleSubmit}
//               className="px-6 py-3 rounded-xl bg-green-600 text-white font-bold"
//             >
//               Submit Quiz
//             </button>
//           ) : (
//             <button
//               onClick={() => setCurrentQ((q) => q + 1)}
//               className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold"
//             >
//               Next
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuizStart;



import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../api/axios";
import { Clock } from "lucide-react";
import { toast } from "react-toastify";

const QuizStart = () => {
  const { topicId } = useParams();
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState(null);
  const [attemptId, setAttemptId] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  /* ================= FETCH QUIZ + START ATTEMPT ================= */
  useEffect(() => {
    const initQuiz = async () => {
      try {
        // 1️⃣ Get quiz by topic
        const quizRes = await API.get(`/quiz/topic/${topicId}`);
        const quizData = quizRes.data;

        // 2️⃣ Start quiz (creates attempt)
        const startRes = await API.get(`/quiz/${quizData._id}/start`);

        setQuiz(startRes.data.quiz);
        setAttemptId(startRes.data.attemptId);
        setTimeLeft(startRes.data.timeLimit * 60);
      } catch (err) {
        toast.error(err.response?.data?.message || "Failed to start quiz");
        navigate("/topics");
      } finally {
        setLoading(false);
      }
    };

    initQuiz();
  }, [topicId, navigate]);

  /* ================= TIMER ================= */
  useEffect(() => {
    if (!quiz) return;

    if (timeLeft <= 0) {
      handleSubmit(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, quiz]);

  /* ================= OPTION SELECT ================= */
  const handleOptionSelect = (index) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQ]: index,
    }));
  };

  /* ================= SUBMIT QUIZ ================= */
  const handleSubmit = async (isAuto = false) => {
    if (submitting) return;
    setSubmitting(true);

    try {
      const formattedAnswers = Object.entries(answers).map(
        ([index, value]) => ({
          questionId: quiz.questions[index]._id,
          selectedOption: value,
        })
      );

      const res = await API.post("/quiz/submit", {
        quizId: quiz._id,
        answers: formattedAnswers,
      });

      toast.success(
        isAuto ? "Time up! Quiz auto-submitted." : "Quiz submitted successfully"
      );

      navigate("/result/${attemptId}", {
        state: {
          result: {
            quizId: quiz._id,
            quizTitle: quiz.title,
            score: res.data.score,
            totalQuestions: res.data.totalQuestions,
          },
        },
      });
      // navigate("/result/${:attemptId}")
    } catch (err) {
      toast.error(err.response?.data?.message || "Submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  /* ================= LOADING ================= */
  if (loading) {
    return <div className="text-center py-20">Loading quiz...</div>;
  }

  const question = quiz.questions[currentQ];

  /* ================= UI ================= */
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-black">{quiz.title}</h1>
          <div className="flex items-center gap-2 text-red-600 font-bold">
            <Clock size={18} />
            {Math.floor(timeLeft / 60)}:
            {String(timeLeft % 60).padStart(2, "0")}
          </div>
        </div>

        {/* Question */}
        <h2 className="text-lg font-bold mb-6">
          Q{currentQ + 1}. {question.question}
        </h2>

        {/* Options */}
        <div className="space-y-4">
          {question.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionSelect(idx)}
              className={`w-full text-left px-6 py-4 rounded-xl border font-medium transition
                ${
                  answers[currentQ] === idx
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-slate-50 hover:bg-blue-50 border-slate-200"
                }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-10">
          <button
            disabled={currentQ === 0}
            onClick={() => setCurrentQ((q) => q - 1)}
            className="px-6 py-3 rounded-xl bg-slate-200 font-bold disabled:opacity-50"
          >
            Previous
          </button>

          {currentQ === quiz.questions.length - 1 ? (
            <button
              onClick={() => handleSubmit(false)}
              disabled={submitting}
              className="px-6 py-3 rounded-xl bg-green-600 text-white font-bold"
            >
              {submitting ? "Submitting..." : "Submit Quiz"}
            </button>
          ) : (
            <button
              onClick={() => setCurrentQ((q) => q + 1)}
              className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizStart;

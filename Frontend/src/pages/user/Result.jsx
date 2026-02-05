// // import React from 'react';
// import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import { 
//   Trophy, 
//   XCircle, 
//   CheckCircle2, 
//   Clock, 
//   ArrowLeft, 
//   RotateCcw, 
//   ExternalLink,
//   ChevronDown
// } from 'lucide-react';

// const Result = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const { result } = state || {}; // Fallback if navigated directly

//   // Redirect if no result data is present
//   if (!result) {
//     return (
//       <div className="h-screen flex flex-col items-center justify-center bg-slate-50">
//         <h2 className="text-xl font-bold text-slate-800 mb-4">No Result Found</h2>
//         <button 
//           onClick={() => navigate('/topics')}
//           className="px-6 py-2 bg-blue-600 text-white rounded-xl"
//         >
//           Back to Topics
//         </button>
//       </div>
//     );
//   }

//   const percentage = Math.round((result.score / result.totalQuestions) * 100);
  
//   // Dynamic styling based on performance
//   const getPerformanceColor = () => {
//     if (percentage >= 80) return 'text-green-600 border-green-200 bg-green-50';
//     if (percentage >= 50) return 'text-amber-600 border-amber-200 bg-amber-50';
//     return 'text-red-600 border-red-200 bg-red-50';
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 py-12 px-6">
//       <div className="max-w-4xl mx-auto">
        
//         {/* --- Hero Section --- */}
//         <div className="bg-white rounded-[3rem] shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden mb-8">
//           <div className={`p-10 text-center border-b ${getPerformanceColor()}`}>
//             <Trophy className="mx-auto mb-4" size={48} />
//             <h1 className="text-3xl font-black uppercase tracking-tight mb-1">Quiz Completed!</h1>
//             <p className="font-bold opacity-80 uppercase text-xs tracking-widest">
//               {result.quizTitle || "Technical Assessment"}
//             </p>
//           </div>

//           <div className="p-10 flex flex-col items-center">
//             {/* Main Score Display */}
//             <div className="mb-8">
//               <span className={`text-8xl font-black ${getPerformanceColor().split(' ')[0]}`}>
//                 {result.score}
//               </span>
//               <span className="text-2xl font-bold text-slate-300"> / {result.totalQuestions}</span>
//               <p className="text-slate-500 font-bold mt-2">Accuracy: {percentage}%</p>
//             </div>

//             {/* Quick Stats Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
//               <div className="bg-slate-50 p-6 rounded-3xl flex items-center gap-4">
//                 <div className="p-3 bg-green-100 text-green-600 rounded-2xl">
//                   <CheckCircle2 size={24} />
//                 </div>
//                 <div>
//                   <p className="text-xs font-black text-slate-400 uppercase">Correct</p>
//                   <p className="text-xl font-bold text-slate-800">{result.score}</p>
//                 </div>
//               </div>

//               <div className="bg-slate-50 p-6 rounded-3xl flex items-center gap-4">
//                 <div className="p-3 bg-red-100 text-red-600 rounded-2xl">
//                   <XCircle size={24} />
//                 </div>
//                 <div>
//                   <p className="text-xs font-black text-slate-400 uppercase">Wrong</p>
//                   <p className="text-xl font-bold text-slate-800">{result.totalQuestions - result.score}</p>
//                 </div>
//               </div>

//               <div className="bg-slate-50 p-6 rounded-3xl flex items-center gap-4">
//                 <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
//                   <Clock size={24} />
//                 </div>
//                 <div>
//                   <p className="text-xs font-black text-slate-400 uppercase">Status</p>
//                   <p className="text-xl font-bold text-slate-800">Completed</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* --- Review Section (Simplified Preview) --- */}
//         <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100 mb-8">
//           <div className="flex justify-between items-center mb-8">
//             <h3 className="text-xl font-black text-slate-800">Question Review</h3>
//             <span className="text-slate-400 text-sm font-medium italic">Detailed feedback below</span>
//           </div>

//           {/* This is a placeholder for your question map logic */}
//           <div className="space-y-6">
//             <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-green-500">
//                <div className="flex justify-between gap-4 mb-2">
//                  <p className="font-bold text-slate-800">Q1. Sample Question Text...</p>
//                  <CheckCircle2 className="text-green-500" size={20} />
//                </div>
//                <p className="text-sm text-slate-500">Your Answer: <span className="text-green-600 font-bold">Option A</span></p>
//             </div>
            
//             <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-red-500">
//                <div className="flex justify-between gap-4 mb-2">
//                  <p className="font-bold text-slate-800">Q2. Sample Question Text...</p>
//                  <XCircle className="text-red-500" size={20} />
//                </div>
//                <p className="text-sm text-slate-500">Your Answer: <span className="text-red-600 font-bold">Option C</span></p>
//                <p className="text-sm text-slate-400 mt-1">Correct Answer: <span className="text-slate-800 font-bold">Option B</span></p>
//             </div>
//           </div>
//         </div>

//         {/* --- Action Buttons --- */}
//         <div className="flex flex-col md:flex-row gap-4 justify-center">
//           <button 
//             onClick={() => navigate('/topics')}
//             className="flex items-center justify-center gap-2 px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-lg"
//           >
//             <ArrowLeft size={18} /> Back to Topics
//           </button>
//           <button 
//              onClick={() => navigate(-1)} // Goes back to the specific quiz start
//              className="flex items-center justify-center gap-2 px-10 py-4 bg-white text-slate-900 border-2 border-slate-200 font-bold rounded-2xl hover:bg-slate-50 transition-all"
//           >
//             <RotateCcw size={18} /> Retry Quiz
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Result;


import { useLocation, useNavigate } from "react-router-dom";
import {
  Trophy,
  XCircle,
  CheckCircle2,
  Clock,
  ArrowLeft,
  RotateCcw,
} from "lucide-react";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const result = location.state?.result;

  if (!result) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-xl font-bold text-slate-800 mb-4">
          No Result Found
        </h2>
        <button
          onClick={() => navigate("/topics")}
          className="px-6 py-2 bg-blue-600 text-white rounded-xl"
        >
          Back to Topics
        </button>
      </div>
    );
  }

  const percentage = Math.round(
    (result.score / result.totalQuestions) * 100
  );

  const getPerformanceColor = () => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 50) return "text-amber-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="bg-white rounded-3xl p-10 shadow mb-8 text-center">
          <Trophy className={`mx-auto mb-4 ${getPerformanceColor()}`} size={48} />
          <h1 className="text-3xl font-black">Quiz Completed</h1>
          <p className="text-slate-500 font-bold mt-2">
            {result.quizTitle}
          </p>

          <div className="mt-8">
            <span className={`text-7xl font-black ${getPerformanceColor()}`}>
              {result.score}
            </span>
            <span className="text-2xl text-slate-400">
              {" "}
              / {result.totalQuestions}
            </span>
            <p className="text-slate-500 font-bold mt-2">
              Accuracy: {percentage}%
            </p>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-white p-6 rounded-2xl flex items-center gap-4">
            <CheckCircle2 className="text-green-600" />
            <div>
              <p className="text-xs font-bold text-slate-400">CORRECT</p>
              <p className="text-xl font-bold">{result.score}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl flex items-center gap-4">
            <XCircle className="text-red-600" />
            <div>
              <p className="text-xs font-bold text-slate-400">WRONG</p>
              <p className="text-xl font-bold">
                {result.totalQuestions - result.score}
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl flex items-center gap-4">
            <Clock className="text-blue-600" />
            <div>
              <p className="text-xs font-bold text-slate-400">STATUS</p>
              <p className="text-xl font-bold">Completed</p>
            </div>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/topics")}
            className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold"
          >
            <ArrowLeft size={18} /> Back to Topics
          </button>

          <button
            onClick={() => navigate(`/quiz/${result.quizId}`)}
            className="flex items-center gap-2 px-8 py-4 border-2 rounded-xl font-bold"
          >
            <RotateCcw size={18} /> Retry Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;

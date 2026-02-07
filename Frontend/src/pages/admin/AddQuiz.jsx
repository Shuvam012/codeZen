




// import React, { useState } from "react";
// import { Plus, Trash2, ArrowLeft, Save, HelpCircle } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import AdminLayout from "../../components/admin/AdminLayout";
// import API from "../../api/axios";

// const TOPICS = [
//   "JavaScript",
//   "DSA",
//   "DBMS",
//   "Computer Networks",
//   "Operating System",
// ];

// const AddQuiz = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const [quizData, setQuizData] = useState({
//     title: "",
//     topic: "",
//     timeLimit: 15,
//     questions: [
//       {
//         question: "",
//         options: ["", "", "", ""],
//         correctAnswer: 0,
//       },
//     ],
//   });

//   /* ---------------- ADD / REMOVE QUESTION ---------------- */
//   const addQuestion = () => {
//     setQuizData((prev) => ({
//       ...prev,
//       questions: [
//         ...prev.questions,
//         { question: "", options: ["", "", "", ""], correctAnswer: 0 },
//       ],
//     }));
//   };

//   const removeQuestion = (index) => {
//     setQuizData((prev) => ({
//       ...prev,
//       questions: prev.questions.filter((_, i) => i !== index),
//     }));
//   };

//   /* ---------------- QUESTION HANDLERS ---------------- */
//   const handleQuestionChange = (qIndex, value) => {
//     const updated = [...quizData.questions];
//     updated[qIndex].question = value;
//     setQuizData({ ...quizData, questions: updated });
//   };

//   const handleOptionChange = (qIndex, oIndex, value) => {
//     const updated = [...quizData.questions];
//     updated[qIndex].options[oIndex] = value;
//     setQuizData({ ...quizData, questions: updated });
//   };

//   const handleCorrectAnswer = (qIndex, value) => {
//     const updated = [...quizData.questions];
//     updated[qIndex].correctAnswer = value;
//     setQuizData({ ...quizData, questions: updated });
//   };

//   /* ---------------- SUBMIT ---------------- */
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // ✅ FRONTEND VALIDATION (VERY IMPORTANT)
//     for (const q of quizData.questions) {
//       if (!q.question.trim()) {
//         alert("All questions must have text");
//         return;
//       }

//       if (q.options.some((opt) => !opt.trim())) {
//         alert("All options must be filled");
//         return;
//       }
//     }

//     if (!quizData.topic) {
//       alert("Please select a topic");
//       return;
//     }

//     setLoading(true);

//     try {
//       await API.post("/admin/quizzes", quizData);
//       navigate("/admin-dashboard");
//     } catch (error) {
//       console.error("Save failed:", error.response?.data || error);
//       alert(error.response?.data?.message || "Quiz creation failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AdminLayout>
//       <form
//         onSubmit={handleSubmit}
//         className="max-w-4xl mx-auto space-y-10 pb-20"
//       >
//         {/* HEADER */}
//         <div className="flex items-center justify-between">
//           <button
//             type="button"
//             onClick={() => navigate(-1)}
//             className="flex items-center gap-2 text-slate-500 font-bold"
//           >
//             <ArrowLeft size={18} /> Back
//           </button>

//           <h1 className="text-2xl font-black text-slate-900">
//             Add New Quiz
//           </h1>

//           <button
//             type="submit"
//             disabled={loading}
//             className="bg-green-600 text-white px-7 py-3 rounded-2xl font-black flex items-center gap-2 disabled:opacity-60"
//           >
//             <Save size={18} /> {loading ? "Saving..." : "Save Quiz"}
//           </button>
//         </div>

//         {/* QUIZ DETAILS */}
//         <div className="bg-white p-8 rounded-3xl border space-y-6">
//           <div className="grid md:grid-cols-2 gap-6">
//             <input
//               required
//               placeholder="Quiz Title"
//               className="input"
//               value={quizData.title}
//               onChange={(e) =>
//                 setQuizData({ ...quizData, title: e.target.value })
//               }
//             />

//             {/* ✅ ENUM SAFE DROPDOWN */}
//             <select
//               required
//               className="input"
//               value={quizData.topic}
//               onChange={(e) =>
//                 setQuizData({ ...quizData, topic: e.target.value })
//               }
//             >
//               <option value="">Select Topic</option>
//               {TOPICS.map((t) => (
//                 <option key={t} value={t}>
//                   {t}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <input
//             type="number"
//             min={1}
//             max={180}
//             className="input w-40"
//             value={quizData.timeLimit}
//             onChange={(e) =>
//               setQuizData({
//                 ...quizData,
//                 timeLimit: Number(e.target.value),
//               })
//             }
//           />
//         </div>

//         {/* QUESTIONS */}
//         <div className="space-y-6">
//           <h2 className="text-xl font-black flex items-center gap-2">
//             <HelpCircle className="text-blue-500" />
//             Questions ({quizData.questions.length})
//           </h2>

//           {quizData.questions.map((q, qIndex) => (
//             <div
//               key={qIndex}
//               className="bg-white p-8 rounded-3xl border relative"
//             >
//               {quizData.questions.length > 1 && (
//                 <button
//                   type="button"
//                   onClick={() => removeQuestion(qIndex)}
//                   className="absolute top-6 right-6 text-red-500"
//                 >
//                   <Trash2 />
//                 </button>
//               )}

//               <input
//                 className="input mb-6"
//                 placeholder={`Question ${qIndex + 1}`}
//                 value={q.question}
//                 onChange={(e) =>
//                   handleQuestionChange(qIndex, e.target.value)
//                 }
//               />

//               <div className="grid md:grid-cols-2 gap-4">
//                 {q.options.map((opt, oIndex) => (
//                   <label
//                     key={oIndex}
//                     className="flex items-center gap-3"
//                   >
//                     <input
//                       type="radio"
//                       checked={q.correctAnswer === oIndex}
//                       onChange={() =>
//                         handleCorrectAnswer(qIndex, oIndex)
//                       }
//                     />
//                     <input
//                       className="input flex-1"
//                       placeholder={`Option ${oIndex + 1}`}
//                       value={opt}
//                       onChange={(e) =>
//                         handleOptionChange(
//                           qIndex,
//                           oIndex,
//                           e.target.value
//                         )
//                       }
//                     />
//                   </label>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ADD QUESTION */}
//         <button
//           type="button"
//           onClick={addQuestion}
//           className="w-full border-4 border-dashed py-6 rounded-3xl font-black text-slate-400 hover:text-blue-600"
//         >
//           <Plus /> Add Question
//         </button>
//       </form>
//     </AdminLayout>
//   );
// };

// export default AddQuiz;





// import React, { useState, useEffect } from "react";
// import { Plus, Trash2, ArrowLeft, Save, HelpCircle } from "lucide-react";
// import { useNavigate, useParams } from "react-router-dom";
// import AdminLayout from "../../components/admin/AdminLayout";
// import API from "../../api/axios";

// const TOPICS = [
//   "JavaScript",
//   "DSA",
//   "DBMS",
//   "Computer Networks",
//   "Operating System",
// ];

// const emptyQuestion = {
//   question: "",
//   options: ["", "", "", ""],
//   correctAnswer: 0,
// };

// const AddQuiz = () => {
//   const { id } = useParams(); // edit mode if id exists
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const [quizData, setQuizData] = useState({
//     title: "",
//     topic: "",
//     timeLimit: 15,
//     questions: [{ ...emptyQuestion }],
//   });

//   /* ================= FETCH QUIZ FOR EDIT ================= */
//   useEffect(() => {
//     if (!id) return;

//     const fetchQuiz = async () => {
//       try {
//         const { data } = await API.get("/admin/quizzes");
//         const quiz = data.find((q) => q._id === id);

//         if (!quiz) {
//           alert("Quiz not found");
//           navigate("/admin-dashboard");
//           return;
//         }

//         setQuizData({
//           title: quiz.title,
//           topic: quiz.topic,
//           timeLimit: quiz.timeLimit,
//           questions: quiz.questions.map((q) => ({
//             question: q.question,
//             options: q.options,
//             correctAnswer: q.correctAnswer ?? 0,
//           })),
//         });
//       } catch (err) {
//         console.error(err);
//         alert("Failed to load quiz");
//       }
//     };

//     fetchQuiz();
//   }, [id, navigate]);

//   /* ================= QUESTION HANDLERS ================= */
//   const addQuestion = () => {
//     setQuizData((prev) => ({
//       ...prev,
//       questions: [...prev.questions, { ...emptyQuestion }],
//     }));
//   };

//   const removeQuestion = (index) => {
//     if (quizData.questions.length === 1) return;
//     setQuizData((prev) => ({
//       ...prev,
//       questions: prev.questions.filter((_, i) => i !== index),
//     }));
//   };

//   const updateQuestion = (i, value) => {
//     const updated = [...quizData.questions];
//     updated[i].question = value;
//     setQuizData({ ...quizData, questions: updated });
//   };

//   const updateOption = (qi, oi, value) => {
//     const updated = [...quizData.questions];
//     updated[qi].options[oi] = value;
//     setQuizData({ ...quizData, questions: updated });
//   };

//   const updateCorrect = (qi, value) => {
//     const updated = [...quizData.questions];
//     updated[qi].correctAnswer = value;
//     setQuizData({ ...quizData, questions: updated });
//   };

//   /* ================= SUBMIT ================= */
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // FRONTEND VALIDATION (prevents 500)
//     if (!quizData.title.trim()) return alert("Title required");
//     if (!quizData.topic) return alert("Topic required");

//     for (const q of quizData.questions) {
//       if (!q.question.trim()) {
//         alert("All questions must have text");
//         return;
//       }
//       if (q.options.some((o) => !o.trim())) {
//         alert("All 4 options required");
//         return;
//       }
//     }

//     setLoading(true);

//     try {
//       if (id) {
//         await API.put(`/admin/quizzes/${id}`, quizData);
//       } else {
//         await API.post("/admin/quizzes", quizData);
//       }
//       navigate("/admin-dashboard");
//     } catch (err) {
//       console.error(err.response?.data || err);
//       alert("Save failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AdminLayout>
//       <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-10 pb-20">
//         {/* HEADER */}
//         <div className="flex justify-between items-center">
//           <button type="button" onClick={() => navigate(-1)}>
//             <ArrowLeft />
//           </button>
//           <h1 className="text-2xl font-black">
//             {id ? "Edit Quiz" : "Add Quiz"}
//           </h1>
//           <button
//             type="submit"
//             disabled={loading}
//             className="bg-green-600 text-white px-6 py-3 rounded-xl font-black flex items-center gap-2"
//           >
//             <Save size={18} />
//             {loading ? "Saving..." : "Save"}
//           </button>
//         </div>

//         {/* QUIZ INFO */}
//         <div className="bg-white p-8 rounded-3xl space-y-6">
//           <input
//             className="w-full border rounded-xl px-5 py-3 font-bold"
//             placeholder="Quiz Title"
//             value={quizData.title}
//             onChange={(e) =>
//               setQuizData({ ...quizData, title: e.target.value })
//             }
//           />

//           <select
//             className="w-full border rounded-xl px-5 py-3 font-bold"
//             value={quizData.topic}
//             onChange={(e) =>
//               setQuizData({ ...quizData, topic: e.target.value })
//             }
//           >
//             <option value="">Select Topic</option>
//             {TOPICS.map((t) => (
//               <option key={t}>{t}</option>
//             ))}
//           </select>

//           <input
//             type="number"
//             min="1"
//             max="180"
//             className="w-40 border rounded-xl px-5 py-3 font-bold"
//             value={quizData.timeLimit}
//             onChange={(e) =>
//               setQuizData({ ...quizData, timeLimit: Number(e.target.value) })
//             }
//           />
//         </div>

//         {/* QUESTIONS */}
//         <h2 className="text-xl font-black flex items-center gap-2">
//           <HelpCircle /> Questions ({quizData.questions.length})
//         </h2>

//         {quizData.questions.map((q, qi) => (
//           <div
//             key={qi}
//             className="bg-white p-8 rounded-3xl border relative"
//           >
//             <button
//               type="button"
//               onClick={() => removeQuestion(qi)}
//               className="absolute top-6 right-6 text-red-400"
//             >
//               <Trash2 />
//             </button>

//             <input
//               className="w-full border rounded-xl px-5 py-4 text-lg font-bold mb-6"
//               placeholder={`Question ${qi + 1}`}
//               value={q.question}
//               onChange={(e) => updateQuestion(qi, e.target.value)}
//             />

//             {q.options.map((opt, oi) => (
//               <div key={oi} className="flex items-center gap-3 mb-3">
//                 <input
//                   type="radio"
//                   name={`correct-${qi}`}
//                   checked={q.correctAnswer === oi}
//                   onChange={() => updateCorrect(qi, oi)}
//                 />
//                 <input
//                   className="flex-1 border rounded-xl px-4 py-2"
//                   placeholder={`Option ${oi + 1}`}
//                   value={opt}
//                   onChange={(e) =>
//                     updateOption(qi, oi, e.target.value)
//                   }
//                 />
//               </div>
//             ))}
//           </div>
//         ))}

//         <button
//           type="button"
//           onClick={addQuestion}
//           className="w-full border-4 border-dashed rounded-3xl py-6 font-black text-slate-400 flex justify-center gap-2"
//         >
//           <Plus /> Add Question
//         </button>
//       </form>
//     </AdminLayout>
//   );
// };

// export default AddQuiz;







import React, { useState, useEffect } from "react";
import { Plus, Trash2, ArrowLeft, Save, HelpCircle, Clock, BookOpen } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";
import API from "../../api/axios";

const TOPICS = [
  "JavaScript",
  "DSA",
  "DBMS",
  "Computer Networks",
  "Operating System",
];

const emptyQuestion = {
  question: "",
  options: ["", "", "", ""],
  correctAnswer: 0,
};

const AddQuiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [quizData, setQuizData] = useState({
    title: "",
    topic: "",
    timeLimit: 15,
    questions: [{ ...emptyQuestion }],
  });

  useEffect(() => {
    if (!id) return;
    const fetchQuiz = async () => {
      try {
        const { data } = await API.get("/admin/quizzes");
        const quiz = data.find((q) => q._id === id);
        if (!quiz) {
          navigate("/admin-dashboard");
          return;
        }
        setQuizData({
          title: quiz.title,
          topic: quiz.topic,
          timeLimit: quiz.timeLimit,
          questions: quiz.questions.map((q) => ({
            question: q.question,
            options: q.options,
            correctAnswer: q.correctAnswer ?? 0,
          })),
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchQuiz();
  }, [id, navigate]);

  const addQuestion = () => {
    setQuizData((prev) => ({
      ...prev,
      questions: [...prev.questions, { ...emptyQuestion }],
    }));
  };

  const removeQuestion = (index) => {
    if (quizData.questions.length === 1) return;
    setQuizData((prev) => ({
      ...prev,
      questions: prev.questions.filter((_, i) => i !== index),
    }));
  };

  const updateQuestion = (i, value) => {
    const updated = [...quizData.questions];
    updated[i].question = value;
    setQuizData({ ...quizData, questions: updated });
  };

  const updateOption = (qi, oi, value) => {
    const updated = [...quizData.questions];
    updated[qi].options[oi] = value;
    setQuizData({ ...quizData, questions: updated });
  };

  const updateCorrect = (qi, value) => {
    const updated = [...quizData.questions];
    updated[qi].correctAnswer = value;
    setQuizData({ ...quizData, questions: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (id) {
        await API.put(`/admin/quizzes/${id}`, quizData);
      } else {
        await API.post("/admin/quizzes", quizData);
      }
      navigate("/admin-dashboard");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-10 pb-20">
        
        {/* TOP NAVBAR */}
        <div className="flex justify-between items-center sticky top-0 bg-slate-50/80 backdrop-blur-md py-4 z-10 border-b border-slate-200 -mx-4 px-4">
          <div className="flex items-center gap-4">
            <button 
              type="button" 
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-white rounded-xl border border-transparent hover:border-slate-200 transition-all text-slate-500"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              {id ? "Edit Quiz" : "Create New Quiz"}
            </h1>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-black flex items-center gap-2 hover:bg-blue-600 transition-all shadow-lg shadow-slate-200 disabled:opacity-50 active:scale-95"
          >
            {loading ? "Saving..." : <><Save size={18} /> Save Quiz</>}
          </button>
        </div>

        {/* SECTION 1: QUIZ INFO */}
        <section className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm space-y-8">
          <div className="flex items-center gap-2 text-blue-600">
            <BookOpen size={20} />
            <span className="text-xs font-black uppercase tracking-widest">General Information</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 ml-2">QUIZ TITLE</label>
              <input
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 font-bold text-slate-800 outline-none focus:border-blue-500 focus:bg-white transition-all"
                placeholder="e.g., Master React Hooks"
                value={quizData.title}
                onChange={(e) => setQuizData({ ...quizData, title: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 ml-2">TOPIC</label>
              <select
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 font-bold text-slate-800 outline-none focus:border-blue-500 focus:bg-white transition-all appearance-none"
                value={quizData.topic}
                onChange={(e) => setQuizData({ ...quizData, topic: e.target.value })}
              >
                <option value="">Select Category</option>
                {TOPICS.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="w-full md:w-1/3 space-y-2">
            <label className="text-xs font-bold text-slate-400 ml-2">TIME LIMIT (MINUTES)</label>
            <div className="relative">
              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="number"
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl pl-12 pr-5 py-4 font-bold text-slate-800 outline-none focus:border-blue-500 focus:bg-white transition-all"
                value={quizData.timeLimit}
                onChange={(e) => setQuizData({ ...quizData, timeLimit: Number(e.target.value) })}
              />
            </div>
          </div>
        </section>

        {/* SECTION 2: QUESTIONS */}
        <div className="flex items-center justify-between px-2">
            <h2 className="text-xl font-black text-slate-900 flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><HelpCircle size={20}/></div>
              Questions ({quizData.questions.length})
            </h2>
        </div>

        <div className="space-y-6">
          {quizData.questions.map((q, qi) => (
            <div key={qi} className="group bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm relative hover:border-blue-200 transition-all">
              <button
                type="button"
                onClick={() => removeQuestion(qi)}
                className="absolute top-6 right-6 p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
              >
                <Trash2 size={20} />
              </button>

              <div className="mb-6 space-y-2">
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">Question {qi + 1}</span>
                <input
                  className="w-full bg-white border-b-2 border-slate-100 py-4 text-xl font-bold text-slate-800 outline-none focus:border-blue-500 transition-all"
                  placeholder="Enter your question here..."
                  value={q.question}
                  onChange={(e) => updateQuestion(qi, e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {q.options.map((opt, oi) => (
                  <div 
                    key={oi} 
                    className={`flex items-center gap-3 p-3 rounded-2xl border-2 transition-all ${
                      q.correctAnswer === oi 
                      ? "border-green-500 bg-green-50/30" 
                      : "border-slate-50 bg-slate-50/50"
                    }`}
                  >
                    <div className="relative flex items-center justify-center">
                      <input
                        type="radio"
                        name={`correct-${qi}`}
                        checked={q.correctAnswer === oi}
                        onChange={() => updateCorrect(qi, oi)}
                        className="w-6 h-6 cursor-pointer accent-green-600"
                      />
                    </div>
                    <input
                      className="flex-1 bg-transparent py-2 font-bold text-slate-700 outline-none placeholder:text-slate-300"
                      placeholder={`Option ${String.fromCharCode(65 + oi)}`}
                      value={opt}
                      onChange={(e) => updateOption(qi, oi, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addQuestion}
          className="w-full border-4 border-dashed border-slate-200 rounded-[2rem] py-8 font-black text-slate-400 flex items-center justify-center gap-3 hover:border-blue-400 hover:text-blue-500 hover:bg-blue-50/30 transition-all group"
        >
          <div className="p-2 bg-slate-100 rounded-xl group-hover:bg-blue-100 transition-colors">
            <Plus size={24} />
          </div>
          ADD ANOTHER QUESTION
        </button>
      </form>
    </AdminLayout>
  );
};

export default AddQuiz;
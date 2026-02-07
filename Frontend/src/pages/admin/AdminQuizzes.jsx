// import React, { useEffect, useState } from "react";
// import { Plus, Pencil, Trash2 } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import AdminLayout from "../../components/admin/AdminLayout";
// import API from "../../api/axios";

// const AdminQuizzes = () => {
//   const navigate = useNavigate();
//   const [quizzes, setQuizzes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchQuizzes();
//   }, []);

//   const fetchQuizzes = async () => {
//     try {
//       const { data } = await API.get("/admin/quizzes");
//       setQuizzes(data);
//     } catch (err) {
//       console.error("Failed to fetch quizzes");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteQuiz = async (id) => {
//     if (!confirm("Delete this quiz?")) return;

//     try {
//       await API.delete(`/admin/quizzes/${id}`);
//       setQuizzes((prev) => prev.filter((q) => q._id !== id));
//     } catch (err) {
//       alert("Delete failed");
//     }
//   };

//   return (
//     <AdminLayout>
//       <div className="space-y-6">
//         {/* Header */}
//         <div className="flex justify-between items-center">
//           <h1 className="text-2xl font-black">Manage Quizzes</h1>
//           <button
//             onClick={() => navigate("/add-quiz")}
//             className="bg-blue-600 text-white px-5 py-2 rounded-xl font-bold flex items-center gap-2"
//           >
//             <Plus size={18} /> Add Quiz
//           </button>
//         </div>

//         {/* Table */}
//         <div className="bg-white rounded-3xl border overflow-hidden">
//           {loading ? (
//             <p className="p-6">Loading...</p>
//           ) : quizzes.length === 0 ? (
//             <p className="p-6 text-slate-500">No quizzes found</p>
//           ) : (
//             <table className="w-full">
//               <thead className="bg-slate-50 text-xs uppercase text-slate-400">
//                 <tr>
//                   <th className="px-6 py-4 text-left">Title</th>
//                   <th className="px-6 py-4">Topic</th>
//                   <th className="px-6 py-4">Questions</th>
//                   <th className="px-6 py-4">Time</th>
//                   <th className="px-6 py-4 text-right">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y">
//                 {quizzes.map((quiz) => (
//                   <tr key={quiz._id} className="hover:bg-slate-50">
//                     <td className="px-6 py-4 font-bold">{quiz.title}</td>
//                     <td className="px-6 py-4">
//                       <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold">
//                         {quiz.topic}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-center">
//                       {quiz.questions.length}
//                     </td>
//                     <td className="px-6 py-4 text-center">
//                       {quiz.timeLimit} min
//                     </td>
//                     <td className="px-6 py-4 text-right space-x-4">
//                       <button
//                         onClick={() =>
//                           navigate(`/admin/quizzes/edit/${quiz._id}`)
//                         }
//                         className="text-blue-600 font-bold text-xs"
//                       >
//                         <Pencil size={16} />
//                       </button>
//                       <button
//                         onClick={() => deleteQuiz(quiz._id)}
//                         className="text-red-500 font-bold text-xs"
//                       >
//                         <Trash2 size={16} />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </AdminLayout>
//   );
// };

// export default AdminQuizzes;




import React, { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, Search, BookOpen, Clock, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";
import API from "../../api/axios";

const AdminQuizzes = () => {
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const fetchQuizzes = async () => {
    try {
      const { data } = await API.get("/admin/quizzes");
      setQuizzes(data);
    } catch (err) {
      console.error("Failed to fetch quizzes");
    } finally {
      setLoading(false);
    }
  };

  const deleteQuiz = async (id) => {
    if (!window.confirm("Are you sure you want to delete this quiz? This action cannot be undone.")) return;

    try {
      await API.delete(`/admin/quizzes/${id}`);
      setQuizzes((prev) => prev.filter((q) => q._id !== id));
    } catch (err) {
      alert("Delete failed");
    }
  };

  const filteredQuizzes = quizzes.filter(q => 
    q.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    q.topic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Manage Quizzes</h1>
            <p className="text-slate-500 font-medium">Create, edit, and monitor your quiz inventory.</p>
          </div>
          <button
            onClick={() => navigate("/admin/quizzes/add")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-black flex items-center justify-center gap-2 shadow-lg shadow-blue-200 transition-all active:scale-95"
          >
            <Plus size={20} /> Add New Quiz
          </button>
        </div>

        {/* Filters & Search */}
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
          <input 
            type="text"
            placeholder="Search by title or topic..."
            className="w-full bg-white border border-slate-200 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-blue-500 shadow-sm font-medium transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-20 text-center">
              <div className="animate-spin w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Synchronizing Data...</p>
            </div>
          ) : filteredQuizzes.length === 0 ? (
            <div className="p-20 text-center space-y-4">
              <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-slate-300">
                <BookOpen size={40} />
              </div>
              <p className="text-slate-500 font-bold text-lg">No quizzes matching your search.</p>
              <button onClick={() => setSearchTerm("")} className="text-blue-600 font-black text-sm uppercase">Clear Search</button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-100">
                    <th className="px-8 py-5 text-left text-[10px] font-black uppercase text-slate-400 tracking-widest">Quiz Info</th>
                    <th className="px-8 py-5 text-left text-[10px] font-black uppercase text-slate-400 tracking-widest">Topic</th>
                    <th className="px-8 py-5 text-center text-[10px] font-black uppercase text-slate-400 tracking-widest">Questions</th>
                    <th className="px-8 py-5 text-center text-[10px] font-black uppercase text-slate-400 tracking-widest">Duration</th>
                    <th className="px-8 py-5 text-right text-[10px] font-black uppercase text-slate-400 tracking-widest">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {filteredQuizzes.map((quiz) => (
                    <tr key={quiz._id} className="hover:bg-blue-50/30 transition-colors group">
                      <td className="px-8 py-6">
                        <p className="font-black text-slate-800 text-lg group-hover:text-blue-600 transition-colors">{quiz.title}</p>
                        <p className="text-xs text-slate-400 font-medium">ID: {quiz._id.slice(-6).toUpperCase()}</p>
                      </td>
                      <td className="px-8 py-6">
                        <span className="px-4 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-black text-slate-600 shadow-sm">
                          {quiz.topic}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center justify-center gap-2 text-slate-600 font-bold">
                          <HelpCircle size={14} className="text-slate-300" />
                          {quiz.questions.length}
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center justify-center gap-2 text-slate-600 font-bold">
                          <Clock size={14} className="text-slate-300" />
                          {quiz.timeLimit}m
                        </div>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => navigate(`/admin/quizzes/edit/${quiz._id}`)}
                            className="p-3 bg-slate-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                            title="Edit Quiz"
                          >
                            <Pencil size={18} />
                          </button>
                          <button
                            onClick={() => deleteQuiz(quiz._id)}
                            className="p-3 bg-slate-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm"
                            title="Delete Quiz"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminQuizzes;

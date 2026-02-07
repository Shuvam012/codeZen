
// import React from 'react';
// import { Plus, FileText, HelpCircle, Layers } from 'lucide-react';
// import AdminLayout from '../../components/admin/AdminLayout';

// const AdminDashboard = () => {
//   return (
//     // WRAP everything inside the AdminLayout
//     <AdminLayout>
//       <div className="space-y-8">
//         <div className="flex justify-between items-center">
//           <h1 className="text-2xl font-black text-slate-900">System Overview</h1>
//           <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
//             <Plus size={18} /> Create New Quiz
//           </button>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <AdminStatCard label="Total Quizzes" value="24" icon={<FileText />} color="bg-blue-50 text-blue-600" />
//           <AdminStatCard label="Total Questions" value="142" icon={<HelpCircle />} color="bg-purple-50 text-purple-600" />
//           <AdminStatCard label="Active Topics" value="8" icon={<Layers />} color="bg-orange-50 text-orange-600" />
//         </div>

//         {/* Recent Quizzes Table */}
//         <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
//           <div className="p-6 border-b border-slate-100 flex justify-between items-center">
//             <h3 className="font-black text-slate-800">Recently Created Quizzes</h3>
//             <button className="text-blue-600 text-sm font-bold hover:underline">View All</button>
//           </div>
//           <table className="w-full text-left">
//             <thead className="bg-slate-50 text-[10px] font-black uppercase text-slate-400 tracking-widest">
//               <tr>
//                 <th className="px-6 py-4">Title</th>
//                 <th className="px-6 py-4">Topic</th>
//                 <th className="px-6 py-4">Questions</th>
//                 <th className="px-6 py-4">Time</th>
//                 <th className="px-6 py-4 text-right">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-100">
//               <QuizRow title="Modern React" topic="React" count="10" time="15m" />
//               <QuizRow title="Data Structures 101" topic="DSA" count="15" time="20m" />
//               <QuizRow title="SQL Mastery" topic="DBMS" count="12" time="15m" />
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </AdminLayout>
//   );
// };

// // Helper components stay the same
// const AdminStatCard = ({ label, value, icon, color }) => (
//   <div className="bg-white p-6 rounded-3xl border border-slate-200 flex items-center gap-5 shadow-sm">
//     <div className={`p-4 rounded-2xl ${color}`}>{icon}</div>
//     <div>
//       <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{label}</p>
//       <p className="text-3xl font-black text-slate-900">{value}</p>
//     </div>
//   </div>
// );

// const QuizRow = ({ title, topic, count, time }) => (
//   <tr className="hover:bg-slate-50 transition-colors">
//     <td className="px-6 py-4 font-bold text-slate-800">{title}</td>
//     <td className="px-6 py-4"><span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">{topic}</span></td>
//     <td className="px-6 py-4 text-sm font-medium text-slate-500">{count} Qs</td>
//     <td className="px-6 py-4 text-sm font-medium text-slate-500">{time}</td>
//     <td className="px-6 py-4 text-right">
//       <button className="text-blue-600 font-bold text-xs hover:underline mr-4">Edit</button>
//       <button className="text-red-500 font-bold text-xs hover:underline">Delete</button>
//     </td>
//   </tr>
// );

// export default AdminDashboard;  






// import React, { useEffect, useState } from "react";
// import { Plus, FileText, HelpCircle, Layers } from "lucide-react";
// import AdminLayout from "../../components/admin/AdminLayout";
// import axios from "axios";

// const AdminDashboard = () => {
//   const [quizzes, setQuizzes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Fetch quizzes from backend
//   // useEffect(() => {
//   //   const fetchQuizzes = async () => {
//   //     try {
//   //       setLoading(true);
//   //       const { data } = await axios.get("/api/admin/quizzes"); // your admin route
//   //       setQuizzes(data);
//   //       setLoading(false);
//   //     } catch (err) {
//   //       console.error("Failed to fetch quizzes:", err);
//   //       setError(err.response?.data?.message || "Server error");
//   //       setLoading(false);
//   //     }
//   //   };

//   //   fetchQuizzes();
//   // }, []);


//   useEffect(() => {
//   const fetchQuizzes = async () => {
//     try {
//       setLoading(true);
//       const { data } = await axios.get("/api/admin/quizzes");
//       setQuizzes(Array.isArray(data) ? data : []); // <-- FIX HERE
//       setLoading(false);
//     } catch (err) {
//       console.error("Failed to fetch quizzes:", err);
//       setError(err.response?.data?.message || "Server error");
//       setLoading(false);
//     }
//   };
//   fetchQuizzes();
// }, []);


//   // Compute stats dynamically
//   const totalQuizzes = quizzes.length;
//   const totalQuestions = quizzes.reduce((sum, quiz) => sum + quiz.questions.length, 0);
//   const activeTopics = [...new Set(quizzes.map(q => q.topic))].length;

//   return (
//     <AdminLayout>
//       <div className="space-y-8">
//         <div className="flex justify-between items-center">
//           <h1 className="text-2xl font-black text-slate-900">System Overview</h1>
//           <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
//             <Plus size={18} /> Create New Quiz
//           </button>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <AdminStatCard label="Total Quizzes" value={totalQuizzes} icon={<FileText />} color="bg-blue-50 text-blue-600" />
//           <AdminStatCard label="Total Questions" value={totalQuestions} icon={<HelpCircle />} color="bg-purple-50 text-purple-600" />
//           <AdminStatCard label="Active Topics" value={activeTopics} icon={<Layers />} color="bg-orange-50 text-orange-600" />
//         </div>

//         {/* Recent Quizzes Table */}
//         <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
//           <div className="p-6 border-b border-slate-100 flex justify-between items-center">
//             <h3 className="font-black text-slate-800">Recently Created Quizzes</h3>
//             <button className="text-blue-600 text-sm font-bold hover:underline">View All</button>
//           </div>
//           {loading ? (
//             <p className="p-6 text-slate-500 font-bold">Loading quizzes...</p>
//           ) : error ? (
//             <p className="p-6 text-red-500 font-bold">{error}</p>
//           ) : (
//             <table className="w-full text-left">
//               <thead className="bg-slate-50 text-[10px] font-black uppercase text-slate-400 tracking-widest">
//                 <tr>
//                   <th className="px-6 py-4">Title</th>
//                   <th className="px-6 py-4">Topic</th>
//                   <th className="px-6 py-4">Questions</th>
//                   <th className="px-6 py-4">Time</th>
//                   <th className="px-6 py-4 text-right">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-100">
//                 {quizzes.map((quiz) => (
//                   <QuizRow
//                     key={quiz._id}
//                     id={quiz._id}
//                     title={quiz.title}
//                     topic={quiz.topic}
//                     count={quiz.questions.length}
//                     time={`${quiz.timeLimit}m`}
//                   />
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </AdminLayout>
//   );
// };

// // Helper components
// const AdminStatCard = ({ label, value, icon, color }) => (
//   <div className="bg-white p-6 rounded-3xl border border-slate-200 flex items-center gap-5 shadow-sm">
//     <div className={`p-4 rounded-2xl ${color}`}>{icon}</div>
//     <div>
//       <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{label}</p>
//       <p className="text-3xl font-black text-slate-900">{value}</p>
//     </div>
//   </div>
// );

// const QuizRow = ({ id, title, topic, count, time }) => (
//   <tr className="hover:bg-slate-50 transition-colors">
//     <td className="px-6 py-4 font-bold text-slate-800">{title}</td>
//     <td className="px-6 py-4">
//       <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">{topic}</span>
//     </td>
//     <td className="px-6 py-4 text-sm font-medium text-slate-500">{count} Qs</td>
//     <td className="px-6 py-4 text-sm font-medium text-slate-500">{time}</td>
//     <td className="px-6 py-4 text-right">
//       <button className="text-blue-600 font-bold text-xs hover:underline mr-4">Edit</button>
//       <button className="text-red-500 font-bold text-xs hover:underline">Delete</button>
//     </td>
//   </tr>
// );

// export default AdminDashboard;





// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Plus, FileText, HelpCircle, Layers } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import AdminLayout from "../../components/admin/AdminLayout";
// import API from "../../api/axios";

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const [quizzes, setQuizzes] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchQuizzes = async () => {
//       try {
//         setLoading(true);
//         const { data } = await API.get("/admin/quizzes"); // your backend route
//         setQuizzes(Array.isArray(data) ? data : []); // ensure it's an array
//         setLoading(false);
//       } catch (err) {
//         console.error("Failed to fetch quizzes:", err);
//         setError(err.response?.data?.message || "Server error");
//         setLoading(false);
//       }
//     };
//     fetchQuizzes();
//   }, []);

//   // const navigate = useNavigate();

//   // Compute stats dynamically
//   const totalQuizzes = quizzes.length;
//   const totalQuestions = quizzes.reduce((sum, quiz) => sum + (quiz.questions?.length || 0), 0);
//   const activeTopics = [...new Set(quizzes.map(q => q.topic))].length;

//   return (
//     <AdminLayout>
//       <div className="space-y-8">
//         <div className="flex justify-between items-center">
//           <h1 className="text-2xl font-black text-slate-900">System Overview</h1>
//           <button
//           // onClick={navigate }
//           onClick={() => navigate("/add-quiz")}
//           // HOW TO add  ADDQuiz page


//           className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
//             <Plus size={18} /> Create New Quiz
//           </button>
//         </div>

//         {loading ? (
//           <p>Loading...</p>
//         ) : error ? (
//           <p className="text-red-500">{error}</p>
//         ) : (
//           <>
//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <AdminStatCard label="Total Quizzes" value={totalQuizzes} icon={<FileText />} color="bg-blue-50 text-blue-600" />
//               <AdminStatCard label="Total Questions" value={totalQuestions} icon={<HelpCircle />} color="bg-purple-50 text-purple-600" />
//               <AdminStatCard label="Active Topics" value={activeTopics} icon={<Layers />} color="bg-orange-50 text-orange-600" />
//             </div>

//             {/* Recent Quizzes Table */}
//             <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
//               <div className="p-6 border-b border-slate-100 flex justify-between items-center">
//                 <h3 className="font-black text-slate-800">Recently Created Quizzes</h3>
//                 <button className="text-blue-600 text-sm font-bold hover:underline">View All</button>
//               </div>
//               <table className="w-full text-left">
//                 <thead className="bg-slate-50 text-[10px] font-black uppercase text-slate-400 tracking-widest">
//                   <tr>
//                     <th className="px-6 py-4">Title</th>
//                     <th className="px-6 py-4">Topic</th>
//                     <th className="px-6 py-4">Questions</th>
//                     <th className="px-6 py-4">Time</th>
//                     <th className="px-6 py-4 text-right">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-slate-100">
//                   {quizzes.map((quiz) => (
//                     <QuizRow
//                       key={quiz._id}
//                       title={quiz.title}
//                       topic={quiz.topic}
//                       count={quiz.questions.length}
//                       time={quiz.timeLimit + "m"}
//                     />
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </>
//         )}
//       </div>
//     </AdminLayout>
//   );
// };

// const AdminStatCard = ({ label, value, icon, color }) => (
//   <div className="bg-white p-6 rounded-3xl border border-slate-200 flex items-center gap-5 shadow-sm">
//     <div className={`p-4 rounded-2xl ${color}`}>{icon}</div>
//     <div>
//       <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{label}</p>
//       <p className="text-3xl font-black text-slate-900">{value}</p>
//     </div>
//   </div>
// );

// const QuizRow = ({ title, topic, count, time }) => (
//   <tr className="hover:bg-slate-50 transition-colors">
//     <td className="px-6 py-4 font-bold text-slate-800">{title}</td>
//     <td className="px-6 py-4"><span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">{topic}</span></td>
//     <td className="px-6 py-4 text-sm font-medium text-slate-500">{count} Qs</td>
//     <td className="px-6 py-4 text-sm font-medium text-slate-500">{time}</td>
//     <td className="px-6 py-4 text-right">
//       <button 
//       onClick={() => navigate(`/admin/quizzes/edit/${quiz._id}`)}
      
//       className="text-blue-600 font-bold text-xs hover:underline mr-4">Edit</button>
//       <button className="text-red-500 font-bold text-xs hover:underline">Delete</button>
//     </td>
//   </tr>
// );

// export default AdminDashboard;






import React, { useEffect, useState } from "react";
import { Plus, FileText, HelpCircle, Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";
import API from "../../api/axios";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        setLoading(true);
        const { data } = await API.get("/admin/quizzes");

        // SAFETY: ensure array
        setQuizzes(Array.isArray(data) ? data : []);
        setError("");
      } catch (err) {
        console.error("Failed to fetch quizzes:", err);
        setError(err.response?.data?.message || "Server error");
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, []);

  /* -------------------- Stats -------------------- */
  const totalQuizzes = quizzes.length;

  const totalQuestions = quizzes.reduce(
    (sum, quiz) => sum + (quiz.questions?.length || 0),
    0
  );

  const activeTopics = new Set(quizzes.map((q) => q.topic)).size;

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-black text-slate-900">
            System Overview
          </h1>

          <button
            onClick={() => navigate("/add-quiz")}
            className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
          >
            <Plus size={18} />
            Create New Quiz
          </button>
        </div>

        {/* Loading / Error */}
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AdminStatCard
                label="Total Quizzes"
                value={totalQuizzes}
                icon={<FileText />}
                color="bg-blue-50 text-blue-600"
              />

              <AdminStatCard
                label="Total Questions"
                value={totalQuestions}
                icon={<HelpCircle />}
                color="bg-purple-50 text-purple-600"
              />

              <AdminStatCard
                label="Active Topics"
                value={activeTopics}
                icon={<Layers />}
                color="bg-orange-50 text-orange-600"
              />
            </div>

            {/* Quizzes Table */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-black text-slate-800">
                  Recently Created Quizzes
                </h3>
              </div>

              <table className="w-full text-left">
                <thead className="bg-slate-50 text-[10px] font-black uppercase text-slate-400 tracking-widest">
                  <tr>
                    <th className="px-6 py-4">Title</th>
                    <th className="px-6 py-4">Topic</th>
                    <th className="px-6 py-4">Questions</th>
                    <th className="px-6 py-4">Time</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {quizzes.map((quiz) => (
                    <QuizRow
                      key={quiz._id}
                      title={quiz.title}
                      topic={quiz.topic}
                      count={quiz.questions?.length || 0}
                      time={`${quiz.timeLimit}m`}
                      onEdit={() =>
                        navigate(`/admin/quizzes/edit/${quiz._id}`)
                      }
                    />
                  ))}

                  {quizzes.length === 0 && (
                    <tr>
                      <td
                        colSpan="5"
                        className="text-center py-6 text-slate-400 font-medium"
                      >
                        No quizzes created yet
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </AdminLayout>
  );
};

/* -------------------- Components -------------------- */

const AdminStatCard = ({ label, value, icon, color }) => (
  <div className="bg-white p-6 rounded-3xl border border-slate-200 flex items-center gap-5 shadow-sm">
    <div className={`p-4 rounded-2xl ${color}`}>{icon}</div>
    <div>
      <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
        {label}
      </p>
      <p className="text-3xl font-black text-slate-900">{value}</p>
    </div>
  </div>
);

const QuizRow = ({ title, topic, count, time, onEdit }) => (
  <tr className="hover:bg-slate-50 transition-colors">
    <td className="px-6 py-4 font-bold text-slate-800">{title}</td>
    <td className="px-6 py-4">
      <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">
        {topic}
      </span>
    </td>
    <td className="px-6 py-4 text-sm font-medium text-slate-500">
      {count} Qs
    </td>
    <td className="px-6 py-4 text-sm font-medium text-slate-500">
      {time}
    </td>
    <td className="px-6 py-4 text-right">
      <button
        onClick={onEdit}
        className="text-blue-600 font-bold text-xs hover:underline mr-4"
      >
        Edit
      </button>
      {/* <button className="text-red-500 font-bold text-xs hover:underline">
        Delete
      </button> */}
    </td>
  </tr>
);

export default AdminDashboard;


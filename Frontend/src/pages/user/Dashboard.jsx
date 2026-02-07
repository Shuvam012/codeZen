// import React, { useEffect, useState } from 'react';
// import { Target, Zap, Activity, Award } from 'lucide-react';
// import { getMyStats } from '../../api/leaderboardApi';

// const Dashboard = () => {
//   const [stats, setStats] = useState({ 
//     totalAttempts: 0, 
//     bestScore: 0, 
//     avgAccuracy: 0 });

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const { data } = await getMyStats();
//         setStats(data);
//       } catch (err) { console.error("Failed to load stats"); }
//     };
//     fetchStats();
//   }, []);

//   const statCards = [
//     { label: 'Total Quizzes', value: stats.totalAttempts, icon: <Activity />, color: 'text-blue-600', bg: 'bg-blue-50' },
//     { label: 'Best Score', value: stats.bestScore, icon: <Award />, color: 'text-amber-600', bg: 'bg-amber-50' },
//     { label: 'Avg. Accuracy', value: `${Math.round(stats.avgAccuracy)}%`, icon: <Target />, color: 'text-green-600', bg: 'bg-green-50' },
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//       {statCards.map((s, i) => (
//         <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-6">
//           <div className={`p-4 rounded-2xl ${s.bg} ${s.color}`}>
//             {React.cloneElement(s.icon, { size: 28 })}
//           </div>
//           <div>
//             <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{s.label}</p>
//             <p className="text-3xl font-black text-slate-900">{s.value}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Dashboard;







// import React, { useEffect, useState } from "react";
// import { Target, Activity, Award } from "lucide-react";
// import { getMyStats } from "../../api/leaderboardApi";
// import API from "../../api/axios";
// // import { useAuth } from "../../context/AuthContext";
// import { useAuth } from "../../context/authContext";

// const Dashboard = () => {
//   const { user } = useAuth(); // Get logged-in user
//   const [stats, setStats] = useState({
//     totalAttempts: 0,
//     bestScore: 0,
//     avgAccuracy: 0,
//   });
//   const [recentAttempts, setRecentAttempts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDashboard = async () => {
//       if (!user) {
//         setLoading(false);
//         return; // Don't fetch if not logged in
//       }

//       try {
//         // Fetch user stats
//         const { data: statsData } = await getMyStats();
//         setStats(statsData || { totalAttempts: 0, bestScore: 0, avgAccuracy: 0 });

//         // Fetch recent quiz attempts (limit to 5)
//         // const { data: attemptsData } = await API.get("/quiz/my-attempts?limit=5");
//         const { data: attemptsData } = await API.get("/quiz/my-attempts?limit=5", {
//   withCredentials: true, // ⚠ Add this
// });

//         setRecentAttempts(attemptsData || []);
//       } catch (err) {
//         console.error("Failed to load dashboard data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDashboard();
//   }, [user]);

//   if (!user) {
//     return (
//       <div className="flex items-center justify-center h-40">
//         <p className="text-slate-400 text-sm">Please log in to view your dashboard.</p>
//       </div>
//     );
//   }

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-40">
//         <p className="text-slate-400 text-sm">Loading your dashboard…</p>
//       </div>
//     );
//   }

//   const statCards = [
//     {
//       label: "Total Quizzes",
//       value: stats.totalAttempts,
//       icon: <Activity />,
//       color: "text-blue-600",
//       bg: "bg-blue-50",
//     },
//     {
//       label: "Best Score",
//       value: stats.bestScore,
//       icon: <Award />,
//       color: "text-amber-600",
//       bg: "bg-amber-50",
//     },
//     {
//       label: "Avg. Accuracy",
//       value: `${Math.round(stats.avgAccuracy || 0)}%`,
//       icon: <Target />,
//       color: "text-green-600",
//       bg: "bg-green-50",
//     },
//   ];

//   return (
//     <div className="space-y-10">
//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//         {statCards.map((s, i) => (
//           <div
//             key={i}
//             className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-6"
//           >
//             <div className={`p-4 rounded-2xl ${s.bg} ${s.color}`}>
//               {React.cloneElement(s.icon, { size: 28 })}
//             </div>
//             <div>
//               <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{s.label}</p>
//               <p className="text-3xl font-black text-slate-900">{s.value}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Recent Quiz Attempts */}
//       <div className="bg-white rounded-2xl border border-slate-100 p-8">
//         <h2 className="text-lg font-bold text-slate-900 mb-4">Recent Quiz Attempts</h2>
//         {recentAttempts.length === 0 ? (
//           <p className="text-sm text-slate-500">You haven't attempted any quizzes yet.</p>
//         ) : (
//           <div className="space-y-3">
//             {recentAttempts.map((attempt) => (
//               <div
//                 key={attempt._id}
//                 className="flex justify-between items-center bg-slate-50 p-4 rounded-xl"
//               >
//                 <div>
//                   <p className="font-semibold text-slate-900">{attempt.quiz?.title || "Untitled Quiz"}</p>
//                   <p className="text-sm text-slate-500">{attempt.quiz?.topic || "No topic"}</p>
//                 </div>
//                 <div className="text-right">
//                   <p className="font-bold text-slate-900">
//                     {attempt.score}/{attempt.totalQuestions}
//                   </p>
//                   <p className="text-sm text-slate-500">
//                     Accuracy: {Math.round((attempt.score / attempt.totalQuestions) * 100) || 0}%
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;






import React, { useEffect, useState } from 'react';
import { Target, Zap, Activity, Award, TrendingUp, ChevronRight } from 'lucide-react';
import { getMyStats } from '../../api/leaderboardApi';

const Dashboard = () => {
  const [stats, setStats] = useState({ 
    totalAttempts: 0, 
    bestScore: 0, 
    avgAccuracy: 0 
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await getMyStats();
        setStats(data);
      } catch (err) { 
        console.error("Failed to load stats"); 
      }
    };
    fetchStats();
  }, []);

  const statCards = [
    { 
      label: 'Quizzes Completed', 
      value: stats.totalAttempts, 
      icon: <Activity />, 
      color: 'text-blue-600', 
      bg: 'bg-blue-50',
      description: 'Your total participation'
    },
    { 
      label: 'Personal Best', 
      value: stats.bestScore, 
      icon: <Award />, 
      color: 'text-amber-600', 
      bg: 'bg-amber-50',
      description: 'Highest points earned'
    },
    { 
      label: 'Avg. Accuracy', 
      value: `${Math.round(stats.avgAccuracy)}%`, 
      icon: <Target />, 
      color: 'text-emerald-600', 
      bg: 'bg-emerald-50',
      isProgress: true,
      description: 'Correctness rate'
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 pt-5">
      {/* Welcome Header */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.2em]">Overview</h2>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Performance <span className="text-slate-400 font-medium">Metrics</span></h1>
        </div>
        <div className="flex items-center gap-2 text-slate-500 font-bold bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm text-sm">
          <TrendingUp size={16} className="text-emerald-500" />
          Keep it up! You're in the top 15%
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {statCards.map((s, i) => (
          <div 
            key={i} 
            className="group relative bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-2 transition-all duration-300"
          >
            {/* Top Row: Icon & Label */}
            <div className="flex justify-between items-start mb-6">
              <div className={`p-4 rounded-2xl ${s.bg} ${s.color} group-hover:scale-110 transition-transform duration-300`}>
                {React.cloneElement(s.icon, { size: 28, strokeWidth: 2.5 })}
              </div>
              <ChevronRight className="text-slate-200 group-hover:text-slate-400 transition-colors" size={20} />
            </div>

            {/* Middle Row: Value */}
            <div className="space-y-1">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">
                {s.label}
              </p>
              <h3 className="text-4xl font-black text-slate-900 tracking-tighter">
                {s.value}
              </h3>
            </div>

            {/* Bottom Row: Context/Progress */}
            <div className="mt-6 pt-6 border-t border-slate-50">
              {s.isProgress ? (
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold uppercase text-slate-400">
                    <span>Precision</span>
                    <span>{s.value}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: s.value }}
                    />
                  </div>
                </div>
              ) : (
                <p className="text-xs font-medium text-slate-400 italic">
                  {s.description}
                </p>
              )}
            </div>
            
            {/* Subtle Gradient Glow */}
            <div className={`absolute -z-10 inset-0 opacity-0 group-hover:opacity-100 blur-[80px] rounded-full transition-opacity duration-500 ${s.bg}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

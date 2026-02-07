


// import React, { useState, useEffect } from 'react';
// import { Trophy, Medal, Timer, Target, Filter, ChevronRight, Loader2 } from 'lucide-react';
// // import API from '../../api/axios';
// import API from '../api/axios';
// import { getTopicLeaderboard } from '../api/leaderboardApi';

// const Leaderboard = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [filter, setFilter] = useState("All");

// /*************  ✨ Windsurf Command ⭐  *************/
// /**
//  * Fetch the leaderboard data from the API.
//  * Set the loading state to true before making the request.
//  * Try to fetch the data and set the data state to the response.
//  * Catch any errors and log them to the console.
//  * Set the loading state to false after the request is complete.
// /*******  8854520f-8a7c-45b0-b06f-d0ea7e2811b1  *******/  
// useEffect(() => {
 
//     const fetchLeaderboard = async () => {
//       setLoading(true);
//       try {
//         // const res = await API.get(`/quiz/leaderboard?topic=${filter}`);
//         const res = await getTopicLeaderboard(filter);
//         setData(res.data);
//       } catch (err) { console.error(err); }
//       setLoading(false);
//     };
//     fetchLeaderboard();
//   }, [filter]);

//   const topThree = data.slice(0, 3);
//   const remaining = data.slice(3);

//   if (loading) return (
//     <div className="h-96 flex items-center justify-center">
//       <Loader2 className="animate-spin text-blue-600" size={40} />
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-slate-50 py-12 px-4">
//       <div className="max-w-5xl mx-auto">
        
//         {/* Header & Filter */}
//         <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
//           <div>
//             <h1 className="text-4xl font-black text-slate-900 flex items-center gap-3">
//               <Trophy className="text-amber-500" size={36} /> LEADERBOARD
//             </h1>
//             <p className="text-slate-500 font-medium">Top performers across all CodeZen challenges</p>
//           </div>
//           <select 
//             onChange={(e) => setFilter(e.target.value)}
//             className="bg-white border-2 border-slate-200 px-6 py-3 rounded-2xl font-bold text-slate-700 outline-none focus:border-blue-500 transition-all"
//           >
//             <option value="All">All Topics</option>
//             <option value="JavaScript">JavaScript</option>
//             <option value="DSA">DSA</option>
//             <option value="DBMS">DBMS</option>
//           </select>
//         </div>

//         {/* Top 3 Podium */}
//         <div className="flex flex-col md:flex-row items-end justify-center gap-4 mb-16">
//           {/* Rank 2 */}
//           {topThree[1] && <PodiumCard user={topThree[1]} rank={2} color="text-slate-400" bg="bg-slate-100" height="h-64" />}
//           {/* Rank 1 */}
//           {topThree[0] && <PodiumCard user={topThree[0]} rank={1} color="text-amber-500" bg="bg-amber-50" height="h-80" isMain={true} />}
//           {/* Rank 3 */}
//           {topThree[2] && <PodiumCard user={topThree[2]} rank={3} color="text-orange-600" bg="bg-orange-50" height="h-56" />}
//         </div>

//         {/* Remaining Ranks Table */}
//         <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-slate-50 text-slate-400 text-xs font-black uppercase tracking-widest">
//                 <th className="px-8 py-5">Rank</th>
//                 <th className="px-8 py-5">User</th>
//                 <th className="px-8 py-5 text-center">Score</th>
//                 <th className="px-8 py-5 text-center">Accuracy</th>
//                 <th className="px-8 py-5 text-right">Topic</th>
//               </tr>
//             </thead>
//             <tbody>
//               {remaining.map((user, index) => (
//                 <tr key={index} className="border-t border-slate-50 hover:bg-slate-50 transition-colors group">
//                   <td className="px-8 py-6 font-black text-slate-400 group-hover:text-blue-600">#{index + 4}</td>
//                   <td className="px-8 py-6 font-bold text-slate-800">{user.username}</td>
//                   <td className="px-8 py-6 text-center font-bold">{user.score} / {user.totalQuestions}</td>
//                   <td className="px-8 py-6 text-center">
//                     <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-bold">
//                       {Math.round((user.score / user.totalQuestions) * 100)}%
//                     </span>
//                   </td>
//                   <td className="px-8 py-6 text-right">
//                     <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{user.topic}</span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// const PodiumCard = ({ user, rank, color, bg, height, isMain }) => (
//   <div className={`w-full md:w-64 ${bg} ${height} rounded-[2.5rem] p-6 flex flex-col items-center justify-center relative border-2 border-white shadow-lg ${isMain ? 'scale-110 z-10' : ''}`}>
//     <div className={`absolute -top-6 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center font-black ${color} text-xl`}>
//       {rank === 1 ? <Trophy size={24} /> : rank}
//     </div>
//     <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{user.topic}</p>
//     <h3 className="text-xl font-black text-slate-800 mb-2 truncate w-full text-center">{user.username}</h3>
//     <div className="flex items-center gap-2 text-slate-600 font-bold bg-white px-4 py-1 rounded-full shadow-sm">
//       <Target size={14} className="text-blue-500" />
//       {user.score}/{user.totalQuestions}
//     </div>
//     {isMain && <p className="mt-4 text-[10px] font-black text-amber-600 bg-amber-200/50 px-3 py-1 rounded-full uppercase">Top Performer</p>}
//   </div>
// );

// export default Leaderboard;    











import React, { useState, useEffect } from 'react';
import { Trophy, Medal, Timer, Target, Filter, ChevronRight, Loader2, User, Award } from 'lucide-react';
import { getTopicLeaderboard } from '../api/leaderboardApi';

const Leaderboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true);
      try {
        const res = await getTopicLeaderboard(filter);
        setData(res.data || []);
      } catch (err) { 
        console.error(err); 
        setData([]);
      }
      setLoading(false);
    };
    fetchLeaderboard();
  }, [filter]);

  const topThree = data.slice(0, 3);
  const remaining = data.slice(3);

  if (loading) return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
      <div className="relative">
        <Loader2 className="animate-spin text-blue-600" size={48} />
        <Trophy className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-200" size={20} />
      </div>
      <p className="text-slate-400 font-bold animate-pulse uppercase tracking-widest text-xs">Syncing Rankings...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-600 text-xs font-black uppercase tracking-wider">
              <Award size={14} /> Global Rankings
            </div>
            <h1 className="text-5xl font-black text-slate-900 tracking-tight">
              HALL OF <span className="text-blue-600">FAME</span>
            </h1>
            <p className="text-slate-500 font-medium text-lg">Celebrating the top minds in tech.</p>
          </div>

          <div className="relative group w-full md:w-72">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-blue-500 transition-colors" size={18} />
            <select 
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
              className="w-full bg-white border-2 border-slate-100 pl-12 pr-6 py-4 rounded-2xl font-bold text-slate-700 appearance-none outline-none focus:border-blue-500 shadow-sm transition-all cursor-pointer"
            >
              <option value="All">Global Leaderboard</option>
              <option value="JavaScript">JavaScript Core</option>
              <option value="DSA">Data Structures</option>
              <option value="DBMS">Database Systems</option>
            </select>
          </div>
        </div>

        {data.length > 0 ? (
          <>
            {/* Top 3 Podium */}
            <div className="flex flex-col md:flex-row items-end justify-center gap-6 mb-20 px-4">
              {topThree[1] && <PodiumCard user={topThree[1]} rank={2} color="text-slate-400" bg="bg-white" borderColor="border-slate-200" height="h-72" />}
              {topThree[0] && <PodiumCard user={topThree[0]} rank={1} color="text-amber-500" bg="bg-white" borderColor="border-amber-200" height="h-96" isMain={true} />}
              {topThree[2] && <PodiumCard user={topThree[2]} rank={3} color="text-orange-500" bg="bg-white" borderColor="border-orange-100" height="h-64" />}
            </div>

            {/* Remaining Ranks Table */}
            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/40 border border-slate-100 overflow-hidden">
              <div className="p-8 border-b border-slate-50 bg-slate-50/50">
                <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">Challengers</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-slate-400 text-[10px] font-black uppercase tracking-widest border-b border-slate-50">
                      <th className="px-10 py-5">Rank</th>
                      <th className="px-10 py-5">Developer</th>
                      <th className="px-10 py-5 text-center">Efficiency</th>
                      <th className="px-10 py-5 text-center">Score</th>
                      <th className="px-10 py-5 text-right">Topic</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {remaining.map((user, index) => (
                      <tr key={index} className="hover:bg-blue-50/30 transition-all group">
                        <td className="px-10 py-6 font-black text-slate-300 group-hover:text-blue-600 transition-colors">
                          {(index + 4).toString().padStart(2, '0')}
                        </td>
                        <td className="px-10 py-6">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                              {user.username.charAt(0).toUpperCase()}
                            </div>
                            <span className="font-bold text-slate-700 group-hover:text-slate-900">{user.username}</span>
                          </div>
                        </td>
                        <td className="px-10 py-6 text-center">
                          <div className="flex flex-col items-center gap-1">
                            <span className="text-xs font-black text-slate-900">
                              {Math.round((user.score / user.totalQuestions) * 100)}%
                            </span>
                            <div className="w-16 h-1 bg-slate-100 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-green-500" 
                                style={{ width: `${(user.score / user.totalQuestions) * 100}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="px-10 py-6 text-center font-black text-slate-700">
                          {user.score} <span className="text-slate-300 font-medium">/ {user.totalQuestions}</span>
                        </td>
                        <td className="px-10 py-6 text-right">
                          <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-lg text-[10px] font-black uppercase tracking-tighter group-hover:bg-white transition-colors">
                            {user.topic}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-[3rem] p-20 text-center border-2 border-dashed border-slate-200">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
               <User className="text-slate-300" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">No rankings yet</h3>
            <p className="text-slate-400">Be the first to complete a {filter} quiz!</p>
          </div>
        )}
      </div>
    </div>
  );
};

const PodiumCard = ({ user, rank, color, bg, borderColor, height, isMain }) => (
  <div className={`w-full md:w-72 ${bg} ${height} rounded-[3rem] p-8 flex flex-col items-center justify-end relative border-4 ${borderColor} shadow-2xl transition-all duration-500 hover:-translate-y-2 ${isMain ? 'scale-110 z-10' : ''}`}>
    {/* Glow effect for #1 */}
    {isMain && <div className="absolute inset-0 bg-amber-400/10 blur-[60px] -z-10 rounded-full"></div>}
    
    <div className={`absolute -top-8 w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center font-black ${color} text-2xl border-2 ${borderColor}`}>
      {rank === 1 ? <Trophy className="animate-bounce" size={32} /> : rank}
    </div>

    <div className="flex flex-col items-center w-full mb-4">
      <div className={`w-20 h-20 rounded-full ${isMain ? 'bg-amber-100' : 'bg-slate-100'} flex items-center justify-center mb-4 border-4 border-white shadow-inner`}>
        <User size={40} className={isMain ? 'text-amber-600' : 'text-slate-400'} />
      </div>
      <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] mb-1">{user.topic}</p>
      <h3 className="text-2xl font-black text-slate-800 truncate w-full text-center tracking-tight">{user.username}</h3>
    </div>

    <div className="w-full space-y-3">
      <div className="flex items-center justify-between text-slate-600 font-bold bg-slate-50 p-3 rounded-2xl">
        <div className="flex items-center gap-2 text-xs">
          <Target size={14} className="text-blue-500" /> Score
        </div>
        <span className="text-slate-900">{user.score} / {user.totalQuestions}</span>
      </div>
      
      {isMain && (
        <div className="bg-amber-500 text-white py-3 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-amber-200">
           <Medal size={16} />
           <span className="text-xs font-black uppercase tracking-widest">Master</span>
        </div>
      )}
    </div>
  </div>
);

export default Leaderboard;
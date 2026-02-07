// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { 
//   Search, 
//   Clock, 
//   BarChart, 
//   BookOpen, 
//   ArrowRight,
//   Loader2 
// } from 'lucide-react';
// // import { getTopics } from '../api/topicApi';
// import { getTopics } from '../../api/topicApi';
// import { toast } from 'react-toastify';

// const Topics = () => {
//   const [topics, setTopics] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchTopics = async () => {
//       try {
//         const data = await getTopics();
//         setTopics(data);
//       } catch (err) {
//         toast.error("Failed to load topics. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchTopics();
//   }, []);

//   // Filter topics based on search input
//   // const filteredTopics = topics.filter(topic =>
//   //   topic.name.toLowerCase().includes(searchTerm.toLowerCase())
//   // );
//   const filteredTopics = topics.filter(t =>
//   t.topic.toLowerCase().includes(searchTerm.toLowerCase())
// );

//   if (loading) {
//     return (
//       <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
//         <Loader2 className="animate-spin text-blue-600" size={48} />
//         <p className="text-slate-500 font-medium tracking-widest uppercase text-xs">Loading Challenges...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-slate-50 py-12 px-6">
//       <div className="max-w-7xl mx-auto">
        
//         {/* --- Header Section --- */}
//         <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
//           <div className="space-y-2">
//             <h1 className="text-4xl font-black text-slate-900 tracking-tight">
//               AVAILABLE <span className="text-blue-600">TOPICS</span>
//             </h1>
//             <p className="text-slate-500 font-medium italic">
//               Select a subject to test your knowledge.
//             </p>
//           </div>

//           {/* Search Bar */}
//           <div className="relative w-full md:w-96">
//             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
//             <input 
//               type="text"
//               placeholder="Search topics (e.g. JavaScript)..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//             />
//           </div>
//         </div>

//         {/* --- Topics Grid --- */}
//         {filteredTopics.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredTopics.map((topic) => (
//               <div 
//                 // key={topic._id} 
//                 key={topic.topic}

//                 className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
//               >
//                 <div className="flex justify-between items-start mb-6">
//                   <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
//                     <BookOpen size={28} />
//                   </div>
//                   <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
//                     topic.difficulty === 'Hard' ? 'bg-red-100 text-red-600' : 
//                     topic.difficulty === 'Medium' ? 'bg-amber-100 text-amber-600' : 
//                     'bg-green-100 text-green-600'
//                   }`}>
//                     {topic.difficulty || 'Mixed'}
//                   </span>
//                 </div>

//                 {/* <h3 className="text-2xl font-bold text-slate-800 mb-4">{topic.name}</h3> */}
//                 <h3 className="text-2xl font-bold text-slate-800 mb-4">{topic.topic}</h3>
                
//                 {/* Meta Info */}
//                 {/* <div className="grid grid-cols-2 gap-4 mb-8">
//                   <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold">
//                     <BarChart size={16} />
//                     <span>{topic.questionsCount || 0} Questions</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold">
//                     <Clock size={16} />
//                     <span>{topic.estimatedTime || '20'} Mins</span>
//                   </div>
//                 </div> */}
//                 <div className="grid grid-cols-2 gap-4 mb-8">
//   <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold">
//     <BarChart size={16} />
//     <span>{topic.totalQuestions || 0} Questions</span>
//   </div>
//   <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold">
//     <Clock size={16} />
//     <span>{topic.estimatedTime || 0} Mins</span>
//   </div>
// </div>

//                 <button 
//                   // onClick={() => navigate(`/quiz/${topic.quizId}`)}
//                   //  onClick={() => navigate(`/quiz/topic/${t.topic}`)}
//                   onClick={() => navigate(`/quiz/topic/${topic.topic}`)}

//                   className="w-full flex items-center justify-center gap-2 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all active:scale-95 group-hover:shadow-lg group-hover:shadow-blue-200"
//                 >
//                   Start Quiz
//                   <ArrowRight size={18} />
//                 </button>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
//             <p className="text-slate-400 font-bold">No topics found matching "{searchTerm}"</p>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default Topics;










import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Clock, 
  BarChart, 
  BookOpen, 
  ArrowRight,
  Loader2,
  Filter
} from 'lucide-react';
import { getTopics } from '../../api/topicApi';
import { toast } from 'react-toastify';

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const data = await getTopics();
        setTopics(data || []);
      } catch (err) {
        toast.error("Failed to load topics. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchTopics();
  }, []);

  const filteredTopics = topics.filter(t =>
    t.topic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center gap-6">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-100 rounded-full blur-2xl animate-pulse"></div>
          <Loader2 className="animate-spin text-blue-600 relative z-10" size={56} />
        </div>
        <div className="text-center">
          <p className="text-slate-900 font-bold text-lg tracking-tight">Curating Challenges</p>
          <p className="text-slate-400 text-sm">Fetching the latest topics for you...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-16">
          <div className="text-center lg:text-left space-y-3">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Pick Your <span className="text-blue-600">Battlefield</span>
            </h1>
            <p className="text-slate-500 font-medium max-w-md">
              Choose a subject to sharpen your skills and climb the global leaderboard.
            </p>
          </div>

          {/* Search Bar Container */}
          <div className="relative group w-full max-w-lg">
            <div className="absolute inset-0 bg-blue-600/5 blur-xl group-hover:bg-blue-600/10 transition-all rounded-2xl"></div>
            <div className="relative flex items-center bg-white border border-slate-200 rounded-2xl shadow-sm group-focus-within:border-blue-500 group-focus-within:ring-4 ring-blue-50 transition-all">
              <Search className="ml-5 text-slate-400" size={20} />
              <input 
                type="text"
                placeholder="Search by topic (e.g. DBMS, React)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-3 pr-5 py-4 bg-transparent outline-none text-slate-700 font-medium placeholder:text-slate-400"
              />
            </div>
          </div>
        </div>

        {/* --- Topics Grid --- */}
        {filteredTopics.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTopics.map((topic, index) => (
              <div 
                key={topic.topic || index}
                className="flex flex-col bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Subtle background decoration */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 opacity-50"></div>

                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="p-4 bg-slate-50 text-slate-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 transition-all duration-300 shadow-sm">
                    <BookOpen size={24} strokeWidth={2.5} />
                  </div>
                  <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border shadow-sm ${
                    topic.difficulty === 'Hard' ? 'bg-red-50 text-red-600 border-red-100' : 
                    topic.difficulty === 'Medium' ? 'bg-amber-50 text-amber-600 border-amber-100' : 
                    'bg-emerald-50 text-emerald-600 border-emerald-100'
                  }`}>
                    {topic.difficulty || 'Mixed'}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {topic.topic}
                </h3>
                <p className="text-slate-400 text-sm mb-8 line-clamp-2">
                  Test your mastery in {topic.topic} with curated questions from experts.
                </p>
                
                {/* Meta Info */}
                <div className="grid grid-cols-2 gap-4 mb-8 mt-auto">
                  <div className="flex flex-col p-3 bg-slate-50 rounded-xl border border-slate-100 group-hover:bg-white transition-colors">
                    <div className="flex items-center gap-1.5 text-slate-400 mb-1 text-[10px] font-bold uppercase tracking-wider">
                       <BarChart size={12} /> Length
                    </div>
                    <span className="text-slate-700 font-bold text-sm">{topic.totalQuestions || 0} Qs</span>
                  </div>
                  <div className="flex flex-col p-3 bg-slate-50 rounded-xl border border-slate-100 group-hover:bg-white transition-colors">
                    <div className="flex items-center gap-1.5 text-slate-400 mb-1 text-[10px] font-bold uppercase tracking-wider">
                       <Clock size={12} /> Duration
                    </div>
                    <span className="text-slate-700 font-bold text-sm">{topic.estimatedTime || 0} Min</span>
                  </div>
                </div>

                <button 
                  onClick={() => navigate(`/quiz/topic/${topic.topic}`)}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-slate-900 text-white font-bold rounded-2xl group-hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-slate-200"
                >
                  Enter Challenge
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-[3rem] border-2 border-dashed border-slate-200 shadow-inner">
            <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Filter className="text-slate-300" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">No matches found</h3>
            <p className="text-slate-400 max-w-xs mx-auto">
              We couldn't find any topics matching <span className="text-slate-600 font-bold">"{searchTerm}"</span>. Try adjusting your search.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Topics;
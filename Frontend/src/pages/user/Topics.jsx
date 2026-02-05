import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Clock, 
  BarChart, 
  BookOpen, 
  ArrowRight,
  Loader2 
} from 'lucide-react';
// import { getTopics } from '../api/topicApi';
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
        setTopics(data);
      } catch (err) {
        toast.error("Failed to load topics. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchTopics();
  }, []);

  // Filter topics based on search input
  // const filteredTopics = topics.filter(topic =>
  //   topic.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  const filteredTopics = topics.filter(t =>
  t.topic.toLowerCase().includes(searchTerm.toLowerCase())
);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <Loader2 className="animate-spin text-blue-600" size={48} />
        <p className="text-slate-500 font-medium tracking-widest uppercase text-xs">Loading Challenges...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="space-y-2">
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">
              AVAILABLE <span className="text-blue-600">TOPICS</span>
            </h1>
            <p className="text-slate-500 font-medium italic">
              Select a subject to test your knowledge.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text"
              placeholder="Search topics (e.g. JavaScript)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        {/* --- Topics Grid --- */}
        {filteredTopics.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTopics.map((topic) => (
              <div 
                // key={topic._id} 
                key={topic.topic}

                className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <BookOpen size={28} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                    topic.difficulty === 'Hard' ? 'bg-red-100 text-red-600' : 
                    topic.difficulty === 'Medium' ? 'bg-amber-100 text-amber-600' : 
                    'bg-green-100 text-green-600'
                  }`}>
                    {topic.difficulty || 'Mixed'}
                  </span>
                </div>

                {/* <h3 className="text-2xl font-bold text-slate-800 mb-4">{topic.name}</h3> */}
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{topic.topic}</h3>
                
                {/* Meta Info */}
                {/* <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold">
                    <BarChart size={16} />
                    <span>{topic.questionsCount || 0} Questions</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold">
                    <Clock size={16} />
                    <span>{topic.estimatedTime || '20'} Mins</span>
                  </div>
                </div> */}
                <div className="grid grid-cols-2 gap-4 mb-8">
  <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold">
    <BarChart size={16} />
    <span>{topic.totalQuestions || 0} Questions</span>
  </div>
  <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold">
    <Clock size={16} />
    <span>{topic.estimatedTime || 0} Mins</span>
  </div>
</div>

                <button 
                  // onClick={() => navigate(`/quiz/${topic.quizId}`)}
                  //  onClick={() => navigate(`/quiz/topic/${t.topic}`)}
                  onClick={() => navigate(`/quiz/topic/${topic.topic}`)}

                  className="w-full flex items-center justify-center gap-2 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all active:scale-95 group-hover:shadow-lg group-hover:shadow-blue-200"
                >
                  Start Quiz
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
            <p className="text-slate-400 font-bold">No topics found matching "{searchTerm}"</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Topics;
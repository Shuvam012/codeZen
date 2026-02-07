







// import React from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   ArrowRight, 
//   Code2, 
//   Database, 
//   Globe, 
//   Cpu, 
//   Trophy, 
//   Zap, 
//   CheckCircle2,
//   TrendingUp
// } from 'lucide-react';
// import { useAuth } from '../context/authContext';

// const Landing = () => {
//   // const { isLoggedIn } = useAuth();
//   const { user } = useAuth();
// const isLoggedIn = !!user;


//   // Mock topics for the preview section
//   const topics = [
//     { name: 'Data Structures', icon: <Cpu className="text-blue-500" />, desc: 'Master Arrays, Linked Lists, and Trees.' },
//     { name: 'JavaScript', icon: <Code2 className="text-yellow-500" />, desc: 'Deep dive into Closures, Promises, and ES6+.' },
//     { name: 'DBMS', icon: <Database className="text-purple-500" />, desc: 'SQL queries, Normalization, and Indexing.' },
//   ];

//   return (
//     <div className="flex flex-col w-full">
      
//       {/* 1. HERO SECTION */}
//       <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-8">
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold">
//               <Zap size={16} fill="currentColor" />
//               <span>Level up your coding game</span>
//             </div>
//             <h1 className="text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 leading-tight">
//               Master Coding with <br />
//               <span className="text-blue-600">Topic-wise Quizzes</span>
//             </h1>
//             <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
//               Practice DSA, DBMS, and Web Technologies. Track your progress, earn badges, and compete on the global leaderboard.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link 
//                 to={isLoggedIn ? "/topics" : "/signup"} 
//                 className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-95"
//               >
//                 {isLoggedIn ? "Start Practicing" : "Get Started for Free"}
//                 <ArrowRight size={20} />
//               </Link>
//               <Link 
//                 to="/topics" 
//                 className="flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all"
//               >
//                 View Topics
//               </Link>
//             </div>
//           </div>
//           <div className="relative hidden lg:block">
//             <div className="absolute -inset-4 bg-blue-100/50 rounded-full blur-3xl"></div>
//             <div className="relative bg-slate-900 rounded-3xl p-4 shadow-2xl border border-slate-800">
//                <div className="flex items-center gap-2 mb-4 px-2">
//                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                </div>
//                <pre className="text-blue-400 font-mono text-sm leading-relaxed">
//                  <code>{`// Level up your career
// const codeZen = {
//   status: "practicing",
//   goal: "SDE-1",
//   skills: ["DSA", "System Design"],
//   isReady: (progress) => progress > 90
// };

// if (codeZen.isReady(yourScore)) {
//   console.log("Interview Ready! 🚀");
// }`}</code>
//                </pre>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 2. TOPICS PREVIEW */}
//       <section className="py-20 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-6 text-center mb-16">
//           <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">Core CS Topics</h2>
//           <p className="text-slate-600">Curated challenges designed to help you ace your next interview.</p>
//         </div>
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
//           {topics.map((topic, i) => (
//             <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
//               <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                 {topic.icon}
//               </div>
//               <h3 className="text-xl font-bold text-slate-900 mb-2">{topic.name}</h3>
//               <p className="text-slate-500 mb-6">{topic.desc}</p>
//               <Link to="/topics" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm">
//                 Start Quiz <ArrowRight size={16} />
//               </Link>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 3. HOW IT WORKS */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
//           {[
//             { step: '01', title: 'Pick a Topic', desc: 'Select from our wide range of CS core subjects.', icon: <BookOpen className="text-blue-600"/> },
//             { step: '02', title: 'Solve Challenges', desc: 'Attempt timed MCQs and coding snippets.', icon: <Zap className="text-blue-600"/> },
//             { step: '03', title: 'Get Ranked', desc: 'See your position on the global leaderboard.', icon: <Trophy className="text-blue-600"/> },
//           ].map((item, i) => (
//             <div key={i} className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100">
//               <span className="text-6xl font-black text-white absolute -top-4 -left-2 drop-shadow-sm select-none">
//                 {item.step}
//               </span>
//               <div className="relative z-10">
//                 <h4 className="text-xl font-bold text-slate-900 mt-4 mb-2">{item.title}</h4>
//                 <p className="text-slate-500">{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 4. STATS / MOTIVATION */}
//       <section className="py-20 bg-blue-600 overflow-hidden relative">
//         <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
//           {[
//             { val: '5+', label: 'CS Topics' },
//             { val: '100+', label: 'Questions' },
//             { val: '500+', label: 'Attempts' },
//             { val: '24/7', label: 'Availability' },
//           ].map((stat, i) => (
//             <div key={i} className="text-white">
//               <p className="text-4xl font-black mb-1">{stat.val}</p>
//               <p className="text-blue-100 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 5. FINAL CTA */}
//       <section className="py-24 bg-white text-center px-6">
//         <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-12 lg:p-20 shadow-2xl relative overflow-hidden">
//           <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-blue-600/20 blur-3xl rounded-full"></div>
//           <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight relative z-10">
//             Ready to test your skills?
//           </h2>
//           <p className="text-slate-400 mb-10 text-lg relative z-10">
//             Join hundreds of developers practicing every day.
//           </p>
//           <Link 
//             to={isLoggedIn ? "/topics" : "/signup"} 
//             className="inline-flex items-center gap-2 px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/40 relative z-10"
//           >
//             Start Practicing Now
//             <ArrowRight size={20} />
//           </Link>
//         </div>
//       </section>
      
//     </div>
//   );
// };

// // Sub-component for icons used in the map
// const BookOpen = ({ className }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a4 4 0 0 0-4-4H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a4 4 0 0 1 4-4h6z"></path></svg>;

// export default Landing;







import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Code2, 
  Database, 
  Cpu, 
  Trophy, 
  Zap, 
  BookOpen,
  Terminal,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { useAuth } from '../context/authContext';

const Landing = () => {
  const { user } = useAuth();
  const isLoggedIn = !!user;

  const topics = [
    { name: 'Data Structures', icon: <Cpu className="text-blue-500" />, desc: 'Master Arrays, Linked Lists, and Trees.', color: 'blue' },
    { name: 'JavaScript', icon: <Code2 className="text-amber-500" />, desc: 'Deep dive into Closures, Promises, and ES6+.', color: 'amber' },
    { name: 'DBMS', icon: <Database className="text-purple-500" />, desc: 'SQL queries, Normalization, and Indexing.', color: 'purple' },
  ];

  return (
    <div className="flex flex-col w-full bg-white selection:bg-blue-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-[120px] opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold tracking-wide shadow-sm">
              <Sparkles size={14} className="animate-pulse" />
              <span>New: 2026 Interview Prep Track</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Master Coding <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Topic by Topic
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed font-medium">
              The ultimate playground for CS fundamentals. Practice DSA, DBMS, and Web Tech with real-time feedback.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to={isLoggedIn ? "/topics" : "/signup"} 
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-xl hover:shadow-blue-200 active:scale-95"
              >
                {isLoggedIn ? "Resume Learning" : "Start Practicing"}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/topics" 
                className="flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-bold rounded-2xl border border-slate-200 hover:border-blue-200 hover:bg-blue-50/30 transition-all"
              >
                Explore Topics
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block animate-in fade-in zoom-in duration-1000 delay-200">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] blur opacity-20 animate-pulse"></div>
            <div className="relative bg-slate-900 rounded-[2rem] p-1 shadow-2xl overflow-hidden border border-slate-800">
               <div className="flex items-center justify-between bg-slate-800/50 px-6 py-3 border-b border-slate-700/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
                  </div>
                  <Terminal size={16} className="text-slate-500" />
               </div>
               <div className="p-8">
                 <pre className="text-indigo-300 font-mono text-base leading-relaxed">
                   <code>{`// Accelerate your growth
const Developer = {
  dailyHabit: "Solving Quizzes",
  goal: "Top Tier SDE",
  status: "Evolving...",
  
  isReady: (progress) => {
    return progress > 90 ? "🚀 Ready" : "🏗️ Building";
  }
};

console.log(Developer.isReady(85));`}</code>
                 </pre>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TOPICS PREVIEW */}
      <section className="py-24 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-2">Popular Subjects</h2>
              <p className="text-slate-500 text-lg">Focus on what matters for your tech interviews.</p>
            </div>
            <Link to="/topics" className="text-blue-600 font-semibold flex items-center gap-1 hover:underline">
              View all 12+ topics <ChevronRight size={20} />
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {topics.map((topic, i) => (
            <div key={i} className="group relative bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-500">
                {topic.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{topic.name}</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">{topic.desc}</p>
              <div className="pt-6 border-t border-slate-50">
                <Link to="/topics" className="text-slate-900 font-bold flex items-center gap-2 group/btn">
                  Practice Now 
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform text-blue-600" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How it works</h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { title: 'Pick a Topic', desc: 'Select from our wide range of CS core subjects.', icon: <BookOpen size={28}/> },
              { title: 'Solve Challenges', desc: 'Attempt timed MCQs and coding snippets.', icon: <Zap size={28}/> },
              { title: 'Get Ranked', desc: 'See your position on the global leaderboard.', icon: <Trophy size={28}/> },
            ].map((item, i) => (
              <div key={i} className="group p-10 rounded-[2.5rem] bg-slate-50 hover:bg-slate-900 transition-colors duration-500">
                <div className="mb-6 text-blue-600 group-hover:text-blue-400 transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 group-hover:text-white mb-4 transition-colors">{item.title}</h4>
                <p className="text-slate-500 group-hover:text-slate-400 leading-relaxed transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STATS */}
      <section className="mx-6 py-12">
        <div className="max-w-7xl mx-auto px-6 py-12 bg-blue-600 rounded-[3rem] shadow-2xl shadow-blue-200">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { val: '12+', label: 'CS Topics' },
              { val: '1k+', label: 'Questions' },
              { val: '10k+', label: 'Attempts' },
              { val: '99%', label: 'Success Rate' },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <p className="text-4xl lg:text-5xl font-black text-white">{stat.val}</p>
                <p className="text-blue-100 text-sm font-bold uppercase tracking-widest opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-32 bg-white text-center px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[4rem] p-12 lg:p-24 shadow-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 blur-[80px] rounded-full"></div>
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">
              Ready to crush your <br /> next interview?
            </h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">
              Stop passive learning. Start active practicing with thousands of developers worldwide.
            </p>
            <div className="pt-4">
              <Link 
                to={isLoggedIn ? "/topics" : "/signup"} 
                className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white font-bold text-lg rounded-2xl hover:bg-blue-500 transition-all shadow-2xl shadow-blue-900/40 hover:-translate-y-1 active:translate-y-0"
              >
                Get Started Now — It's Free
                <ArrowRight size={22} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Landing;
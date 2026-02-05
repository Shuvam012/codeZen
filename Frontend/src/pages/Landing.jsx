// // import React from 'react'
// // import { Link } from 'react-router-dom'
// // import heroImage from '../assets/OnlineTest.gif'
// // // import heroImage from '../assets/main2.PNG?url'
// // // import heroImage from '../assets/hero.png'
// // import { Button } from '@mui/material'

// // const Landing = () => {
// //   return (
// //   //   <section className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center px-6">
// //   //   {/* Hero */}
// //   //   <div className="max-w-3xl">
// //   //     <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
// //   //       Master <span className="text-blue-500">Tech Skills</span> with CodeZen
// //   //     </h1>
// //   //     <p className="text-gray-600 text-lg md:text-xl mb-8">
// //   //       A quiz platform for developers and computer science students. Practice Java, Python, Web Dev, CN & more!
// //   //     </p>

// //   //     <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //   //       <Link to="/signup">
// //   //         <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl text-lg">
// //   //           Get Started
// //   //         </button>
// //   //       </Link>
// //   //       <Link to="/topics">
// //   //         <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-xl text-lg">
// //   //           Explore Topics
// //   //         </button>
// //   //       </Link>
// //   //     </div>
// //   //   </div>

// //   //   {/* Illustration */}
// //   //   <img
// //   //     src="https://undraw.dev/assets/images/undraw_programming_re_kg9v.svg"
// //   //     alt="Coding Illustration"
// //   //     className="w-[300px] md:w-[400px] mt-12"
// //   //   />
// //   // </section>
// //   <div className="bg-[#f7fafc] text-slate-800">

// //   {/* Hero Section */}
// //   <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
// //     <div className="max-w-3xl">
// //       <h1 className="text-5xl md:text-6xl font-bold mb-6">
// //         "Sharpen Your codding skills with <span className="text-blue-500">CodeZen</span>"
// //       </h1>
// //       <p className="text-lg md:text-xl text-gray-600 mb-8">
// //         A quiz platform built for developers & CS students to practice, grow, and master their skills.
// //       </p>

// //       <div className="flex flex-col sm:flex-row justify-center gap-4">
// //         <Link to="/signup">
// //           <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl text-lg cursor-pointer">
// //             Get Started
// //           </button>
// //         </Link>
// //         <Link to="/topics">
// //           <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-xl text-lg cursor-pointer">
// //             Explore Topics
// //           </button>
// //         </Link>
// //       </div>
// //     </div>

// //     <img
// //       src={heroImage}
// //       alt="Coding Illustration"
// //       className=" md:w-[400px] mt-12 h-[350px] rounded " 
// //     />
// //   </section>

// //   {/* Features Section */}
// //   <section className="py-16 bg-white">
// //     <div className="max-w-6xl mx-auto px-6 text-center">
// //       <h2 className="text-3xl md:text-4xl font-bold mb-4">Why CodeZen?</h2>
// //       <p className="text-gray-600 mb-12 text-lg">
// //         We make learning interactive, focused, and fun.
// //       </p>

// //       <div className="grid md:grid-cols-3 gap-10">
// //         <div className="p-6 bg-blue-100 rounded-xl shadow-md hover:bg-blue-200 hover:shadow-lg transition duration-300 ease-in-out ">
// //           <h3 className="text-xl font-semibold mb-2">Topic-Wise Quizzes</h3>
// //           <p className="text-gray-600">
// //             Practice Java, Python, CN, OS, Web Dev, DSA & more — topic by topic.
// //           </p>
// //         </div>
// //         <div className="p-6 bg-blue-100 rounded-xl shadow-md hover:bg-blue-200 hover:shadow-lg transition duration-300 ease-in-out">
// //           <h3 className="text-xl font-semibold mb-2">Instant Feedback</h3>
// //           <p className="text-gray-600">
// //             Get instant results with correct answers & explanations.
// //           </p>
// //         </div>
// //         <div className="p-6 bg-blue-100 rounded-xl shadow-md hover:bg-blue-200 hover:shadow-lg transition duration-300 ease-in-out">
// //           <h3 className="text-xl font-semibold mb-2">Leaderboard</h3>
// //           <p className="text-gray-600">
// //             Compete with others and track your rank in real-time.
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   </section>

// //   {/* CTA Section */}
// //   <section className="bg-blue-500 text-white py-16 text-center">
// //     <h2 className="text-3xl md:text-4xl font-bold mb-4">
// //       Ready to become a pro?
// //     </h2>
// //     <p className="text-lg mb-8">
// //       Join CodeZen and take your coding skills to the next level.
// //     </p>
// //     <Link to="/signup">
// //       <button className="bg-white text-blue-500 font-semibold px-6 py-3 rounded hover:bg-gray-100 cursor-pointer">
// //         Sign Up Now
// //       </button>
// //     {/* <Button size="large">Large</Button> */}
// //     </Link>
// //   </section>
// // </div>
// //   )
// // }

// // export default Landing















// import React from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   ArrowRight, 
//   Code2, 
//   Database, 
//   Cpu, 
//   Trophy, 
//   Zap
// } from 'lucide-react';
// import { useAuth } from '../context/authContext';

// const Landing = () => {
//   const { user } = useAuth();
//   const isLoggedIn = !!user;

//   const topics = [
//     {
//       name: 'Data Structures',
//       icon: <Cpu className="text-blue-500" />,
//       desc: 'Master Arrays, Linked Lists, and Trees.'
//     },
//     {
//       name: 'JavaScript',
//       icon: <Code2 className="text-yellow-500" />,
//       desc: 'Deep dive into Closures, Promises, and ES6+.'
//     },
//     {
//       name: 'DBMS',
//       icon: <Database className="text-purple-500" />,
//       desc: 'SQL queries, Normalization, and Indexing.'
//     },
//   ];

//   return (
//     <div className="flex flex-col w-full">

//       {/* HERO */}
//       <section className="bg-white py-20 lg:py-32">
//         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          
//           <div className="space-y-8">
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold">
//               <Zap size={16} />
//               Level up your coding game
//             </div>

//             <h1 className="text-5xl lg:text-7xl font-black tracking-tighter text-slate-900">
//               Master Coding with <br />
//               <span className="text-blue-600">Topic-wise Quizzes</span>
//             </h1>

//             <p className="text-xl text-slate-600 max-w-lg">
//               Practice DSA, DBMS, and Web Technologies. Track progress and compete globally.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link
//                 to={isLoggedIn ? "/topics" : "/signup"}
//                 className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl flex items-center gap-2 justify-center hover:bg-blue-700"
//               >
//                 {isLoggedIn ? "Start Practicing" : "Get Started for Free"}
//                 <ArrowRight size={20} />
//               </Link>

//               <Link
//                 to="/topics"
//                 className="px-8 py-4 border border-slate-200 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 text-center"
//               >
//                 View Topics
//               </Link>
//             </div>
//           </div>

//           {/* CODE MOCKUP */}
//           {/* <div className="hidden lg:block bg-slate-900 rounded-3xl p-6 text-blue-400 font-mono text-sm shadow-2xl">
// <pre>{`const codeZen = {
//   skills: ["DSA", "JS", "DBMS"],
//   level: "Beginner → Pro"
// };

// if (practiceDaily) {
//   careerGrowth++;
// }`}</pre>
//           </div> */}
//  <div className="relative bg-slate-900 rounded-3xl p-4 shadow-2xl border border-slate-800">
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
//         </div>
//       </section>

//       {/* TOPICS PREVIEW */}
//       <section className="py-20 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-6 text-center mb-12">
//           <h2 className="text-3xl font-black text-slate-900 mb-4">
//             Core CS Topics
//           </h2>
//           <p className="text-slate-600">
//             Designed for interview preparation
//           </p>
//         </div>

//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
//           {topics.map((topic, i) => (
//             <div key={i} className="bg-white p-8 rounded-3xl border hover:shadow-xl transition">
//               <div className="w-14 h-14 flex items-center justify-center bg-slate-50 rounded-2xl mb-6">
//                 {topic.icon}
//               </div>
//               <h3 className="text-xl font-bold mb-2">{topic.name}</h3>
//               <p className="text-slate-500 mb-4">{topic.desc}</p>
//               <Link to="/topics" className="text-blue-600 font-bold flex items-center gap-2">
//                 Start Quiz <ArrowRight size={16} />
//               </Link>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* HOW IT WORKS */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">
//           {[
//             { step: '01', title: 'Pick a Topic', icon: <BookOpen /> },
//             { step: '02', title: 'Solve Quizzes', icon: <Zap /> },
//             { step: '03', title: 'Get Ranked', icon: <Trophy /> },
//           ].map((item, i) => (
//             <div key={i} className="p-8 bg-slate-50 rounded-3xl border">
//               <p className="text-5xl font-black text-slate-200">{item.step}</p>
//               <h4 className="text-xl font-bold mt-4">{item.title}</h4>
//             </div>
//           ))}
//         </div>
//       </section>

//     </div>
//   );
// };

// const BookOpen = () => (
//   <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M2 3h6a4 4 0 0 1 4 4v14a4 4 0 0 0-4-4H2z" />
//     <path d="M22 3h-6a4 4 0 0 0-4 4v14a4 4 0 0 1 4-4h6z" />
//   </svg>
// );

// export default Landing;







import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Code2, 
  Database, 
  Globe, 
  Cpu, 
  Trophy, 
  Zap, 
  CheckCircle2,
  TrendingUp
} from 'lucide-react';
import { useAuth } from '../context/authContext';

const Landing = () => {
  // const { isLoggedIn } = useAuth();
  const { user } = useAuth();
const isLoggedIn = !!user;


  // Mock topics for the preview section
  const topics = [
    { name: 'Data Structures', icon: <Cpu className="text-blue-500" />, desc: 'Master Arrays, Linked Lists, and Trees.' },
    { name: 'JavaScript', icon: <Code2 className="text-yellow-500" />, desc: 'Deep dive into Closures, Promises, and ES6+.' },
    { name: 'DBMS', icon: <Database className="text-purple-500" />, desc: 'SQL queries, Normalization, and Indexing.' },
  ];

  return (
    <div className="flex flex-col w-full">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold">
              <Zap size={16} fill="currentColor" />
              <span>Level up your coding game</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 leading-tight">
              Master Coding with <br />
              <span className="text-blue-600">Topic-wise Quizzes</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              Practice DSA, DBMS, and Web Technologies. Track your progress, earn badges, and compete on the global leaderboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to={isLoggedIn ? "/topics" : "/signup"} 
                className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-95"
              >
                {isLoggedIn ? "Start Practicing" : "Get Started for Free"}
                <ArrowRight size={20} />
              </Link>
              <Link 
                to="/topics" 
                className="flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all"
              >
                View Topics
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-blue-100/50 rounded-full blur-3xl"></div>
            <div className="relative bg-slate-900 rounded-3xl p-4 shadow-2xl border border-slate-800">
               <div className="flex items-center gap-2 mb-4 px-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
               </div>
               <pre className="text-blue-400 font-mono text-sm leading-relaxed">
                 <code>{`// Level up your career
const codeZen = {
  status: "practicing",
  goal: "SDE-1",
  skills: ["DSA", "System Design"],
  isReady: (progress) => progress > 90
};

if (codeZen.isReady(yourScore)) {
  console.log("Interview Ready! 🚀");
}`}</code>
               </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TOPICS PREVIEW */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">Core CS Topics</h2>
          <p className="text-slate-600">Curated challenges designed to help you ace your next interview.</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {topics.map((topic, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {topic.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{topic.name}</h3>
              <p className="text-slate-500 mb-6">{topic.desc}</p>
              <Link to="/topics" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm">
                Start Quiz <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          {[
            { step: '01', title: 'Pick a Topic', desc: 'Select from our wide range of CS core subjects.', icon: <BookOpen className="text-blue-600"/> },
            { step: '02', title: 'Solve Challenges', desc: 'Attempt timed MCQs and coding snippets.', icon: <Zap className="text-blue-600"/> },
            { step: '03', title: 'Get Ranked', desc: 'See your position on the global leaderboard.', icon: <Trophy className="text-blue-600"/> },
          ].map((item, i) => (
            <div key={i} className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <span className="text-6xl font-black text-white absolute -top-4 -left-2 drop-shadow-sm select-none">
                {item.step}
              </span>
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-slate-900 mt-4 mb-2">{item.title}</h4>
                <p className="text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. STATS / MOTIVATION */}
      <section className="py-20 bg-blue-600 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { val: '5+', label: 'CS Topics' },
            { val: '100+', label: 'Questions' },
            { val: '500+', label: 'Attempts' },
            { val: '24/7', label: 'Availability' },
          ].map((stat, i) => (
            <div key={i} className="text-white">
              <p className="text-4xl font-black mb-1">{stat.val}</p>
              <p className="text-blue-100 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-24 bg-white text-center px-6">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-12 lg:p-20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-blue-600/20 blur-3xl rounded-full"></div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight relative z-10">
            Ready to test your skills?
          </h2>
          <p className="text-slate-400 mb-10 text-lg relative z-10">
            Join hundreds of developers practicing every day.
          </p>
          <Link 
            to={isLoggedIn ? "/topics" : "/signup"} 
            className="inline-flex items-center gap-2 px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/40 relative z-10"
          >
            Start Practicing Now
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
      
    </div>
  );
};

// Sub-component for icons used in the map
const BookOpen = ({ className }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a4 4 0 0 0-4-4H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a4 4 0 0 1 4-4h6z"></path></svg>;

export default Landing;
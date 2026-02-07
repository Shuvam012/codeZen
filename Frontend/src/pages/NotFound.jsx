import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Terminal } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        {/* Animated Icon Section */}
        <div className="relative mb-8 flex justify-center">
          <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-50 scale-150"></div>
          <div className="relative bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200 border border-slate-100">
            <Terminal size={64} className="text-blue-600 animate-pulse" />
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-9xl font-black text-slate-200 leading-none mb-4">404</h1>
        <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Lost in the Code?</h2>
        <p className="text-slate-500 font-medium mb-10 leading-relaxed">
          The page you are looking for doesn't exist or has been moved to a private repository. 
          Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 font-bold rounded-2xl border-2 border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95"
          >
            <ArrowLeft size={18} /> Go Back
          </button>
          
          <button 
            onClick={() => navigate('/')}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 active:scale-95"
          >
            <Home size={18} /> Home Base
          </button>
        </div>

        {/* Witty Footer Note */}
        <p className="mt-12 text-xs font-black text-slate-300 uppercase tracking-widest">
          Error Log: 404_PAGE_NOT_FOUND_IN_CODEZEN
        </p>
      </div>
    </div>
  );
};

export default NotFound;
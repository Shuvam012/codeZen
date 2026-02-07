// import React from 'react'
// import { Link } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <div>
//          <footer className="bg-slate-800 text-gray-300 py-6 mt-12">
//       <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
//         {/* Left - Logo & Copyright */}
//         <div className="text-center md:text-left">
//           <h1 className="text-blue-400 font-bold text-xl">CodeZen</h1>
//           <p className="text-sm mt-1">© {new Date().getFullYear()} CodeZen. All rights reserved.</p>
//         </div>

//         {/* Center - Links */}
//         <div className="flex gap-6 text-sm">
//           <Link to="/about" className="hover:text-blue-300 transition">About</Link>
//           <Link to="/contact" className="hover:text-blue-300 transition">Contact</Link>
//           {/* <a href="/privacy" className="hover:text-blue-300 transition">Privacy</a> */}
//         </div>

//         {/* Right - Made with ❤️ */}
//         <div className="text-sm text-center md:text-right">
//           <p>Made with <span className="text-red-400">❤️</span> for devs & learners</p>
//         </div>
//       </div>
//     </footer>
//     </div>
//   )
// }

// export default Footer




import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Heart 
} from 'lucide-react';
import logo from '../../assets/codezen.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Main Footer Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* 1. Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <img src={logo} alt="CodeZen" className="h-10 w-auto brightness-0 invert" />
              {/* <span className="text-2xl font-black tracking-tighter text-white">
                code<span className="text-blue-500">Zen</span>
              </span> */}
            </Link>
            <p className="text-slate-400 max-w-xs leading-relaxed">
              Practice coding, compete in challenges, and grow your skills with our curated set of topics.
            </p>
          </div>

          {/* 2. Quick Links Section */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Platform</h4>
              <ul className="space-y-2 text-sm font-medium">
                <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link to="/topics" className="hover:text-blue-400 transition-colors">Topics</Link></li>
                <li><Link to="/leaderboard" className="hover:text-blue-400 transition-colors">Leaderboard</Link></li>
                <li><Link to="/dashboard" className="hover:text-blue-400 transition-colors">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Legal</h4>
              <ul className="space-y-2 text-sm font-medium">
                <li><Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy</Link></li>
                <li><Link to="/terms" className="hover:text-blue-400 transition-colors">Terms</Link></li>
                <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              </ul>
            </div>
          </div>

          {/* 3. Social & Contact Section */}
          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Connect with us</h4>
            <div className="flex gap-4 mb-6">
              <a href="https://github.com/Shuvam012" target="_blank" rel="noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/shuvam-biswal-43ab99215/" target="_blank" rel="noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:shuvambiswal123@gmail.com" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm font-medium text-slate-400 flex items-center gap-2">
              <Mail size={14} /> support@codezen.com
            </p>
          </div>

        </div>

        {/* --- Bottom Bar --- */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
          <p>© {currentYear} CodeZen. All rights reserved.</p>
          <p className="flex items-center gap-1.5 leading-none">
            Built with <Heart size={14} className="text-rose-500 fill-rose-500" /> by <span className="text-slate-300">Shuvam</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
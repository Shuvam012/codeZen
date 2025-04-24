import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
         <footer className="bg-slate-800 text-gray-300 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left - Logo & Copyright */}
        <div className="text-center md:text-left">
          <h1 className="text-blue-400 font-bold text-xl">CodeZen</h1>
          <p className="text-sm mt-1">© {new Date().getFullYear()} CodeZen. All rights reserved.</p>
        </div>

        {/* Center - Links */}
        <div className="flex gap-6 text-sm">
          <Link to="/about" className="hover:text-blue-300 transition">About</Link>
          <Link to="/contact" className="hover:text-blue-300 transition">Contact</Link>
          {/* <a href="/privacy" className="hover:text-blue-300 transition">Privacy</a> */}
        </div>

        {/* Right - Made with ❤️ */}
        <div className="text-sm text-center md:text-right">
          <p>Made with <span className="text-red-400">❤️</span> for devs & learners</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer

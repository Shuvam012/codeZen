// // src/components/admin/AdminLayout.jsx
// import React from 'react';
// import { LayoutDashboard, BookOpen, Users, BarChart3, Settings, LogOut } from 'lucide-react';


// const AdminLayout = ({ children }) => {
//   return (
//     <div className="flex min-h-screen bg-slate-50">
//       {/* Sidebar */}
//       <aside className="w-64 bg-slate-900 text-white flex flex-col p-6 sticky top-0 h-screen">
//         <div className="mb-10 px-2">
//           <h2 className="text-2xl font-black tracking-tighter text-blue-400">CodeZen <span className="text-white text-sm font-normal opacity-50">ADMIN</span></h2>
//         </div>
        
//         <nav className="flex-1 space-y-2">
//           <NavItem icon={<LayoutDashboard size={20}/>} label="Dashboard" active />
//           <NavItem icon={<BookOpen size={20}/>} label="Quizzes" />
//           <NavItem icon={<Users size={20}/>} label="Users" />
//           <NavItem icon={<BarChart3 size={20}/>} label="Reports" />
//         </nav>

//         <div className="pt-6 border-t border-slate-800">
//           <NavItem icon={<Settings size={20}/>} label="Settings" />
//           <NavItem icon={<LogOut size={20}/>} label="Logout" color="text-red-400" />
//         </div>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-end px-8 gap-4">
//           <div className="text-right">
//             <p className="text-sm font-bold text-slate-800">Admin User</p>
//             <p className="text-[10px] font-black text-blue-600 uppercase">Super Admin</p>
//           </div>
//           <div className="w-10 h-10 bg-slate-200 rounded-full border-2 border-white shadow-sm" />
//         </header>
        
//         <main className="p-8">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// const NavItem = ({ icon, label, active, color = "text-slate-400" }) => (
//   <div className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${active ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : `hover:bg-slate-800 ${color}`}`}>
//     {icon}
//     <span className="font-bold text-sm">{label}</span>
//   </div>
// );

// export default AdminLayout;



// src/components/admin/AdminLayout.jsx
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // optional backend logout API
      // await API.post("/auth/logout");
      navigate("/login");
    } catch (err) {
      console.error("Logout failed");
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col p-6 sticky top-0 h-screen">
        <div className="mb-10 px-2">
          <h2 className="text-2xl font-black tracking-tighter text-blue-400">
            CodeZen{" "}
            <span className="text-white text-sm font-normal opacity-50">
              ADMIN
            </span>
          </h2>
        </div>

        <nav className="flex-1 space-y-2">
          <NavItem to="/admin-dashboard" icon={<LayoutDashboard size={20} />} label="Dashboard" />
          <NavItem to="/admin/quizzes" icon={<BookOpen size={20} />} label="Quizzes" />
          <NavItem to="/admin/users" icon={<Users size={20} />} label="Users" />
          <NavItem to="/admin/reports" icon={<BarChart3 size={20} />} label="Reports" />
        </nav>

        {/* <div className="pt-6 border-t border-slate-800 space-y-2">
          <NavItem to="/admin/settings" icon={<Settings size={20} />} label="Settings" />
          
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 p-3 rounded-xl w-full text-red-400 hover:bg-slate-800 transition-all"
          >
            <LogOut size={20} />
            <span className="font-bold text-sm">Logout</span>
          </button>
        </div> */}
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-end px-8 gap-4">
          <div className="text-right">
            <p className="text-sm font-bold text-slate-800">Admin User</p>
            <p className="text-[10px] font-black text-blue-600 uppercase">
              Super Admin
            </p>
          </div>
          <div className="w-10 h-10 bg-slate-200 rounded-full border-2 border-white shadow-sm" />
        </header>

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
};

const NavItem = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 p-3 rounded-xl transition-all font-bold text-sm ${
        isActive
          ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
          : "text-slate-400 hover:bg-slate-800"
      }`
    }
  >
    {icon}
    {label}
  </NavLink>
);

export default AdminLayout;

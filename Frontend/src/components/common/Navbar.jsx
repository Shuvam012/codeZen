// // // // import React, { useState } from 'react'
// // // // import { Link } from 'react-router-dom'

// // // // import logo from '../assets/codezen.png';
// // // // import { Button } from '@mui/material';
// // // // import {useAuth} from '../../context/UserContext'

// // // // const Navbar = () => {

// // // //     // const [isLoggedIn,setIsLoggedIn] =useState(false);

// // // //     // function handleClick (){
// // // //     //     setIsLoggedIn(true);
// // // //     // }

// // // //     const {isLoggedIn,role ,logout} = useAuth()

// // // //     return (
// // // //         <nav className="bg-slate-800 text-white px-6 py-4 shadow-md">
// // // //             <div className="max-w-7xl mx-auto flex items-center justify-between">
// // // //                 {/* Logo */}
// // // //                 <Link to="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300">
// // // //                     {/* CodeZen */}
// // // //                     <img src={logo} alt="CodeZen Logo" className=" h-8 mr-2" />
// // // //                 </Link>

// // // //                 {/* Menu */}
// // // //                 <div className=" flex gap-6 items-center">
// // // //                     <Link to="/" className="hover:text-blue-300">Home</Link>
// // // //                     { isLoggedIn &&
// // // //                         <>
// // // //                         <Link to="/topics" className="hover:text-blue-300">Topics</Link>
// // // //                         <Link to="/leaderboard" className="hover:text-blue-300">Leaderboard</Link>
// // // //                         <Link to="/dashboard" className="hover:text-blue-300">Dashboard</Link>
// // // //                         {role === 'admin' && <Link to= '/admin-dashboard' className='hover:text-blue-300'>Admin Dashboard</Link>}
// // // //                         </>
// // // //                     }
                    
// // // //                 </div>

// // // //                 {/* Auth Buttons */}

// // // //                 <div className="flex gap-4">
// // // //                     {!isLoggedIn ? (
// // // //                         <>
// // // //                             <Link to="/login">
// // // //                             <Button variant="contained" size="small">
// // // //                                 Login
// // // //                             </Button>
// // // //                         </Link>
// // // //                         {/* <Link to="/signup">
// // // //                             <Button variant="outlined" size="small">
// // // //                                 SignUp
// // // //                             </Button>
// // // //                         </Link> */}
// // // //                     </>
// // // //                         ):(<Link to='/'>
// // // //                             <Button onClick={logout} variant="contained" size="small">
// // // //                             Logout
// // // //                         </Button>
// // // //                         </Link>
// // // //                         )
// // // //                     }

                   
// // // //                 </div>

// // // //                 {/* Mobile Menu Icon (optional for later) */}
// // // //                 {/* <div className="md:hidden"> */}
// // // //                     {/* Add hamburger menu later if needed */}
// // // //                 {/* </div> */}
// // // //             </div>
// // // //         </nav>
// // // //     )
// // // // }

// // // // export default Navbar


// // // import React, { useState } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { Button, IconButton } from '@mui/material';
// // // import MenuIcon from '@mui/icons-material/Menu';
// // // import CloseIcon from '@mui/icons-material/Close';
// // // import { useAuth } from '../../context/UserContext';
// // // // import logo from '../assets/codezen.png';
// // // // import logo from '../../assets/codezen.png';
// // // import logo from '../../assets/codezen.png';
// // // import { AuthContext } from '../../context/authContext';

// // // const Navbar = () => {
// // //     const { isLoggedIn, role, logout } = useAuth();
// // //     const [isMenuOpen, setIsMenuOpen] = useState(false);

// // //     const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

// // //     return (
// // //         <nav className="bg-white text-slate-800 px-6 py-3 shadow-sm sticky top-0 z-50 border-b border-slate-100">
// // //             <div className="max-w-7xl mx-auto flex items-center justify-between">
                
// // //                 {/* 1. Logo */}
// // //                 <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
// // //                     <img src={logo} alt="CodeZen" className="h-9 w-auto" />
// // //                     <span className="text-xl font-bold tracking-tight text-blue-600">CodeZen</span>
// // //                 </Link>

// // //                 {/* 2. Desktop Menu */}
// // //                 <div className="hidden md:flex gap-8 items-center font-medium">
// // //                     <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
// // //                     {isLoggedIn && (
// // //                         <>
// // //                             <Link to="/topics" className="hover:text-blue-600 transition-colors">Topics</Link>
// // //                             <Link to="/leaderboard" className="hover:text-blue-600 transition-colors">Leaderboard</Link>
// // //                             <Link to="/dashboard" className="hover:text-blue-600 transition-colors">Dashboard</Link>
// // //                             {role === 'admin' && (
// // //                                 <Link to="/admin-dashboard" className="text-purple-600 hover:text-purple-700 font-semibold">
// // //                                     Admin
// // //                                 </Link>
// // //                             )}
// // //                         </>
// // //                     )}
// // //                 </div>

// // //                 {/* 3. Auth Buttons (Desktop) */}
// // //                 <div className="hidden md:flex gap-3">
// // //                     {!isLoggedIn ? (
// // //                         <>
// // //                             <Link to="/login">
// // //                                 <Button variant="outlined" size="small" className="capitalize">Login</Button>
// // //                             </Link>
// // //                             <Link to="/signup">
// // //                                 <Button variant="contained" size="small" className="bg-blue-600 capitalize shadow-none">Sign Up</Button>
// // //                             </Link>
// // //                         </>
// // //                     ) : (
// // //                         <Button 
// // //                             onClick={logout} 
// // //                             variant="contained" 
// // //                             color="error" 
// // //                             size="small" 
// // //                             className="capitalize shadow-none"
// // //                         >
// // //                             Logout
// // //                         </Button>
// // //                     )}
// // //                 </div>

// // //                 {/* 4. Mobile Toggle */}
// // //                 <div className="md:hidden">
// // //                     <IconButton onClick={toggleMenu}>
// // //                         {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
// // //                     </IconButton>
// // //                 </div>
// // //             </div>

// // //             {/* 5. Mobile Sidebar/Menu (Dropdown style) */}
// // //             {isMenuOpen && (
// // //                 <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg flex flex-col p-6 gap-4 animate-in slide-in-from-top">
// // //                     <Link to="/" onClick={toggleMenu}>Home</Link>
// // //                     {isLoggedIn ? (
// // //                         <>
// // //                             <Link to="/topics" onClick={toggleMenu}>Topics</Link>
// // //                             <Link to="/leaderboard" onClick={toggleMenu}>Leaderboard</Link>
// // //                             <Link to="/dashboard" onClick={toggleMenu}>Dashboard</Link>
// // //                             <Button onClick={() => { logout(); toggleMenu(); }} color="error" variant="outlined">Logout</Button>
// // //                         </>
// // //                     ) : (
// // //                         <div className="flex flex-col gap-2">
// // //                             <Link to="/login" onClick={toggleMenu}>
// // //                                 <Button fullWidth variant="outlined">Login</Button>
// // //                             </Link>
// // //                             <Link to="/signup" onClick={toggleMenu}>
// // //                                 <Button fullWidth variant="contained">Sign Up</Button>
// // //                             </Link>
// // //                         </div>
// // //                     )}
// // //                 </div>
// // //             )}
// // //         </nav>
// // //     );
// // // };

// // // export default Navbar;


// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import { Button, IconButton } from '@mui/material';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import CloseIcon from '@mui/icons-material/Close';
// // import { useAuth } from '../../context/authContext'; // Pointing to your new context
// // import logo from '../../assets/codezen.png';

// // const Navbar = () => {
// //     // Destructure from your actual AuthContext
// //     // Note: 'user' contains the data, 'isLoggedIn' is derived, and 'logout' is your function
// //     const { user, logout, isLoggedIn } = useAuth();
// //     const [isMenuOpen, setIsMenuOpen] = useState(false);

// //     // Derived state for role
// //     const role = user?.role;

// //     const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

// //     return (
// //         <nav className="bg-white text-slate-800 px-6 py-3 shadow-sm sticky top-0 z-50 border-b border-slate-100">
// //             <div className="max-w-7xl mx-auto flex items-center justify-between">
                
// //                 {/* 1. Logo */}
// //                 <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
// //                     <img src={logo} alt="CodeZen" className="h-9 w-auto" />
// //                     <span className="text-xl font-bold tracking-tight text-blue-600">CodeZen</span>
// //                 </Link>

// //                 {/* 2. Desktop Menu */}
// //                 <div className="hidden md:flex gap-8 items-center font-medium">
// //                     <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
// //                     {isLoggedIn && (
// //                         <>
// //                             <Link to="/topics" className="hover:text-blue-600 transition-colors">Topics</Link>
// //                             <Link to="/leaderboard" className="hover:text-blue-600 transition-colors">Leaderboard</Link>
// //                             <Link to="/dashboard" className="hover:text-blue-600 transition-colors">Dashboard</Link>
// //                             {role === 'admin' && (
// //                                 <Link to="/admin-dashboard" className="text-purple-600 hover:text-purple-700 font-semibold">
// //                                     Admin
// //                                 </Link>
// //                             )}
// //                         </>
// //                     )}
// //                 </div>

// //                 {/* 3. Auth Buttons (Desktop) */}
// //                 <div className="hidden md:flex gap-3">
// //                     {!isLoggedIn ? (
// //                         <>
// //                             <Link to="/login">
// //                                 <Button variant="outlined" size="small" sx={{ textTransform: 'none' }}>Login</Button>
// //                             </Link>
// //                             <Link to="/signup">
// //                                 <Button variant="contained" size="small" sx={{ textTransform: 'none', bgcolor: '#2563eb', boxShadow: 'none' }}>Sign Up</Button>
// //                             </Link>
// //                         </>
// //                     ) : (
// //                         <div className="flex items-center gap-4">
// //                             <span className="text-sm text-slate-500 italic">Hi, {user?.name || 'User'}</span>
// //                             <Button 
// //                                 onClick={logout} 
// //                                 variant="contained" 
// //                                 color="error" 
// //                                 size="small" 
// //                                 sx={{ textTransform: 'none', boxShadow: 'none' }}
// //                             >
// //                                 Logout
// //                             </Button>
// //                         </div>
// //                     )}
// //                 </div>

// //                 {/* 4. Mobile Toggle */}
// //                 <div className="md:hidden">
// //                     <IconButton onClick={toggleMenu}>
// //                         {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
// //                     </IconButton>
// //                 </div>
// //             </div>

// //             {/* 5. Mobile Sidebar/Menu (Dropdown style) */}
// //             {isMenuOpen && (
// //                 <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg flex flex-col p-6 gap-4">
// //                     <Link to="/" onClick={toggleMenu} className="hover:text-blue-600">Home</Link>
// //                     {isLoggedIn ? (
// //                         <>
// //                             <Link to="/topics" onClick={toggleMenu} className="hover:text-blue-600">Topics</Link>
// //                             <Link to="/leaderboard" onClick={toggleMenu} className="hover:text-blue-600">Leaderboard</Link>
// //                             <Link to="/dashboard" onClick={toggleMenu} className="hover:text-blue-600">Dashboard</Link>
// //                             {role === 'admin' && <Link to="/admin-dashboard" onClick={toggleMenu} className="text-purple-600">Admin</Link>}
// //                             <Button onClick={() => { logout(); toggleMenu(); }} color="error" variant="outlined" fullWidth>Logout</Button>
// //                         </>
// //                     ) : (
// //                         <div className="flex flex-col gap-2">
// //                             <Link to="/login" onClick={toggleMenu}>
// //                                 <Button fullWidth variant="outlined" sx={{ textTransform: 'none' }}>Login</Button>
// //                             </Link>
// //                             <Link to="/signup" onClick={toggleMenu}>
// //                                 <Button fullWidth variant="contained" sx={{ textTransform: 'none', bgcolor: '#2563eb' }}>Sign Up</Button>
// //                             </Link>
// //                         </div>
// //                     )}
// //                 </div>
// //             )}
// //         </nav>
// //     );
// // };

// // export default Navbar;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Button, IconButton } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import { useAuth } from '../../context/authContext';
// import logo from '../../assets/codezen.png';

// const Navbar = () => {
//   const { user, logout, isLoggedIn } = useAuth();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const role = user?.role;

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <nav className="bg-white text-slate-800 px-6 py-3 shadow-sm sticky top-0 z-50 border-b border-slate-100">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">

//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
//           <img src={logo} alt="CodeZen" className="h-9 w-auto" />
//           {/* <span className="text-xl font-bold tracking-tight text-blue-600">CodeZen</span> */}
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-8 items-center font-medium">
//           <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
//           {isLoggedIn && (
//             <>
//               <Link to="/topics" className="hover:text-blue-600 transition-colors">Topics</Link>
//               <Link to="/leaderboard" className="hover:text-blue-600 transition-colors">Leaderboard</Link>
//               <Link to="/dashboard" className="hover:text-blue-600 transition-colors">Dashboard</Link>
//               {role === 'admin' && (
//                 <Link to="/admin-dashboard" className="text-purple-600 hover:text-purple-700 font-semibold">
//                   Admin
//                 </Link>
//               )}
//             </>
//           )}
//         </div>

//         {/* Desktop Auth Buttons */}
//         <div className="hidden md:flex gap-3">
//           {!isLoggedIn ? (
//             <>
//               <Link to="/login">
//                 <Button variant="outlined" size="small" sx={{ textTransform: 'none' }}>Login</Button>
//               </Link>
//               <Link to="/signup">
//                 <Button variant="contained" size="small" sx={{ textTransform: 'none', bgcolor: '#2563eb', boxShadow: 'none' }}>Sign Up</Button>
//               </Link>
//             </>
//           ) : (
//             <div className="flex items-center gap-4">
//               <span className="text-sm text-slate-500 italic">Hi, {user?.name || 'User'}</span>
//               <Button 
//                 onClick={logout} 
//                 variant="contained" 
//                 color="error" 
//                 size="small" 
//                 sx={{ textTransform: 'none', boxShadow: 'none' }}
//               >
//                 Logout
//               </Button>
//             </div>
//           )}
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden">
//           <IconButton onClick={toggleMenu}>
//             {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
//           </IconButton>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg flex flex-col p-6 gap-4">
//           <Link to="/" onClick={toggleMenu} className="hover:text-blue-600">Home</Link>
//           {isLoggedIn ? (
//             <>
//               <Link to="/topics" onClick={toggleMenu} className="hover:text-blue-600">Topics</Link>
//               <Link to="/leaderboard" onClick={toggleMenu} className="hover:text-blue-600">Leaderboard</Link>
//               <Link to="/dashboard" onClick={toggleMenu} className="hover:text-blue-600">Dashboard</Link>
//               {role === 'admin' && <Link to="/admin-dashboard" onClick={toggleMenu} className="text-purple-600">Admin</Link>}
//               <Button 
//                 onClick={() => { logout(); toggleMenu(); }} 
//                 color="error" 
//                 variant="outlined" 
//                 fullWidth
//               >
//                 Logout
//               </Button>
//             </>
//           ) : (
//             <>
//               <Link to="/login" onClick={toggleMenu}>
//                 <Button fullWidth variant="outlined" sx={{ textTransform: 'none' }}>Login</Button>
//               </Link>
//               <Link to="/signup" onClick={toggleMenu}>
//                 <Button fullWidth variant="contained" sx={{ textTransform: 'none', bgcolor: '#2563eb' }}>Sign Up</Button>
//               </Link>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  Menu, 
  X, 
  LogOut, 
  LayoutDashboard, 
  Trophy, 
  BookOpen, 
  ShieldCheck, 
  User as UserIcon 
} from 'lucide-react';
import { useAuth } from '../../context/authContext';
import logo from '../../assets/codezen.png';

const Navbar = () => {
  const { user, logout, isLoggedIn } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const role = user?.role;
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Reusable style for Nav links to handle active states
  const navLinkStyles = ({ isActive }) => 
    `flex items-center gap-2 transition-colors duration-200 font-medium ${
      isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
    }`;

  return (
    <nav className="bg-white/80 backdrop-blur-md text-slate-800 px-6 py-4 shadow-sm sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* 1. Logo Section */}
        <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <img src={logo} alt="CodeZen" className="h-10 w-auto" />
          {/* <span className="text-xl font-black tracking-tight text-slate-900">
            code<span className="text-blue-600">Zen</span>
          </span> */}
        </Link>

        {/* 2. Desktop Navigation (Center) */}
        <div className="hidden md:flex gap-8 items-center">
          <NavLink to="/" className={navLinkStyles}>Home</NavLink>
          {isLoggedIn && (
            <>
              <NavLink to="/topics" className={navLinkStyles}>
                <BookOpen size={18} /> Topics
              </NavLink>
              <NavLink to="/leaderboard" className={navLinkStyles}>
                <Trophy size={18} /> Leaderboard
              </NavLink>
              <NavLink to="/dashboard" className={navLinkStyles}>
                <LayoutDashboard size={18} /> Dashboard
              </NavLink>
              {role === 'admin' && (
                <NavLink to="/admin-dashboard" className="flex items-center gap-2 text-purple-600 font-bold hover:text-purple-700">
                  <ShieldCheck size={18} /> Admin
                </NavLink>
              )}
            </>
          )}
        </div>

        {/* 3. Desktop Auth Buttons (Right) */}
        <div className="hidden md:flex items-center gap-4">
          {!isLoggedIn ? (
            <div className="flex items-center gap-2">
              <Link to="/login" className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
                Login
              </Link>
              <Link to="/signup" className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-md shadow-blue-200">
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-4 bg-slate-50 pl-4 pr-1 py-1 rounded-full border border-slate-200">
              <div className="flex flex-col items-end">
                <span className="text-[10px] uppercase font-bold text-slate-400 leading-none">Logged in as</span>
                <span className="text-sm font-bold text-slate-700 leading-tight">{user?.name || 'User'}</span>
              </div>
              <button 
                onClick={logout} 
                className="p-2 bg-white text-rose-500 rounded-full border border-slate-200 hover:bg-rose-50 transition-colors shadow-sm"
                title="Logout"
              >
                <LogOut size={18} />
              </button>
            </div>
          )}
        </div>

        {/* 4. Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 5. Mobile Sidebar/Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl flex flex-col p-6 gap-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            <NavLink to="/" onClick={toggleMenu} className={navLinkStyles}>Home</NavLink>
            {isLoggedIn && (
              <>
                <NavLink to="/topics" onClick={toggleMenu} className={navLinkStyles}>
                  <BookOpen size={18} /> Topics
                </NavLink>
                <NavLink to="/leaderboard" onClick={toggleMenu} className={navLinkStyles}>
                  <Trophy size={18} /> Leaderboard
                </NavLink>
                <NavLink to="/dashboard" onClick={toggleMenu} className={navLinkStyles}>
                  <LayoutDashboard size={18} /> Dashboard
                </NavLink>
                {role === 'admin' && (
                  <NavLink to="/admin-dashboard" onClick={toggleMenu} className="flex items-center gap-2 text-purple-600 font-bold">
                    <ShieldCheck size={18} /> Admin
                  </NavLink>
                )}
              </>
            )}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            {!isLoggedIn ? (
              <>
                <Link to="/login" onClick={toggleMenu} className="w-full py-3 text-center font-bold text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                  Login
                </Link>
                <Link to="/signup" onClick={toggleMenu} className="w-full py-3 text-center font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-lg">
                  Sign Up
                </Link>
              </>
            ) : (
              <button 
                onClick={() => { logout(); toggleMenu(); }} 
                className="flex items-center justify-center gap-2 w-full py-3 text-rose-600 font-bold border border-rose-100 bg-rose-50 rounded-xl hover:bg-rose-100 transition-colors"
              >
                <LogOut size={20} /> Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
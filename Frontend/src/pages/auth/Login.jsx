// // import React, { useState } from 'react'
// // import { Link, useNavigate } from 'react-router-dom';
// // import { useAuth } from '../context/UserContext';
// // import { toast } from 'react-toastify';
// // import axios from 'axios';

// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const navigate = useNavigate();
// //   const {login} = useAuth();

// //   const adminData = [
// //     {
// //       email: 'admin@codezen.com',
// //       password: 'admin123',
// //       role: 'admin',
// //     },
// //   ];

 

// //   // const handleLogin = async (e) => {
// //   //   e.preventDefault();
  
    
// //   //     if (email === adminData[0].email && password === adminData[0].password)  {
// //   //       login('admin');
// //   //       navigate('/admin-dashboard');
// //   //       toast('Welcome Admin!');
// //   //       return;
// //   //     } else {
// //   //       const response = await axios.post('http://localhost:8000/api/user/login', {
// //   //         email,
// //   //         password,
// //   //       });
  
// //   //       if (response.data.success) {
// //   //         setError('');
// //   //         login('user');
// //   //         navigate('/dashboard');
// //   //         toast('Welcome User!');
// //   //       } else {
// //   //         setError(response.data.message);
// //   //       }
// //   //     }
    
// //   // };

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
  
// //     if (email === adminData[0].email && password === adminData[0].password) {
// //       login('admin');
// //       navigate('/admin-dashboard');
// //       toast('Welcome Admin!');
// //       return;
// //     }
  
// //     try {
// //       const response = await axios.post('http://localhost:8000/api/user/login', {
// //         email,
// //         password,
// //       })
  
// //       // console.log("User login response:", response.data);
  
     
// //       if (response.data.success || response.data.user) {
// //         setError('');
// //         login('user');
// //         navigate('/dashboard');
// //         // toast('Welcome User!');
// //         toast(`Welcome ${response.data.user.fullName || 'User'}!`);
// //       } else {
// //         setError(response.data.message || 'Invalid credentials');
// //       }
// //     } catch (error) {
// //       console.error("Login error:", error);
// //       // setError('Something went wrong. Please try again.');
// //       const errMsg = error.response?.data?.message || 'Something went wrong. Please try again.';
// //       setError(errMsg);
// //     }
// //   };
  

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
// //       <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md ">
// //         <h2 className="text-2xl font-semibold text-center mb-6">Login to <span className='text-blue-500'>codeZen</span></h2>
// //         <form onSubmit={handleLogin} className="space-y-4">
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700">Email</label>
// //             <input
// //               type="email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
// //               placeholder="Enter email"
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700">Password</label>
// //             <input
// //               type="password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
// //               placeholder="Enter password"
// //             />
// //           </div>
// //           {error && <p className="text-red-500 text-sm">{error}</p>}
// //           <button
// //             type="submit"
// //             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
// //           >
// //             Log In
// //           </button>
// //           <p className='flex  justify-center gap-1 '>Don't have an account? 
// //           <Link to= '/signup'>
// //             <span className='text-blue-500'> SignUp</span>
// //           </Link>
// //           </p>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login



// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../../context/UserContext';
// import { toast } from 'react-toastify';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const handleLogin = async (e) => {
//     e.preventDefault();
  
//     try {
//       // 1. Send login request to backend
//       const response = await axios.post('http://localhost:3000/api/auth/login', 
//         { email, password },
//         { withCredentials: true } 
//       );

//       if (response.status === 200) {
//         const { role, name } = response.data;
//         setError('');
        
//         // 2. Update Auth Context with the role from DB
//         login(role); 
        
//         toast.success(`Welcome back, ${name}!`);
        
//         // 3. Dynamic redirection based on role from Database
//         if (role === 'admin') {
//           navigate('/admin-dashboard');
//         } else {
//           navigate('/dashboard');
//         }
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       const errMsg = error.response?.data?.message || 'Invalid email or password';
//       setError(errMsg);
//       toast.error(errMsg);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-center mb-6">Login to <span className='text-blue-500'>codeZen</span></h2>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
//               placeholder="admin@codezen.com"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
//               placeholder="••••••••"
//             />
//           </div>
//           {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-medium"
//           >
//             Log In
//           </button>
//           <p className='text-center text-gray-600'>
//             Don't have an account? 
//             <Link to='/signup' className='text-blue-500 hover:underline ml-1'>
//               SignUp
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../../context/authContext'; // 1. Fixed import path
// import { toast } from 'react-toastify';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
  
//   // 2. Use the login function from our custom hook
//   const { login } = useAuth();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError('');
  
//     try {
//       // 3. We use the logic defined in authContext to handle the API call
//       // This ensures the 'user' state is updated globally for the Navbar to see
//       await login(email, password);
      
//       toast.success("Welcome back to codeZen!");
      
//       // The context update happens inside login(), 
//       // but we can still redirect here
//       navigate('/dashboard'); 
      
//     } catch (error) {
//       console.error("Login error:", error);
//       const errMsg = error.response?.data?.message || 'Invalid email or password';
//       setError(errMsg);
//       toast.error(errMsg);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-center mb-6">
//           Login to <span className='text-blue-500'>codeZen</span>
//         </h2>
        
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
//               placeholder="admin@codezen.com"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
//               placeholder="••••••••"
//             />
//           </div>

//           {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-medium"
//           >
//             Log In
//           </button>

//           <p className='text-center text-gray-600'>
//             Don't have an account? 
//             <Link to='/signup' className='text-blue-500 hover:underline ml-1'>
//               SignUp
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;






import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { toast } from 'react-toastify';
import { Mail, Lock, ArrowRight, Loader2, Sparkles } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      toast.success("Welcome back to codeZen!");
      navigate('/dashboard'); 
    } catch (error) {
      const errMsg = error.response?.data?.message || 'Invalid email or password';
      setError(errMsg);
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-[120px] -z-10"></div>

      <div className="w-full max-w-md">
        {/* Logo/Brand Area */}
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-[1.5rem] bg-blue-600 shadow-xl shadow-blue-200 mb-4">
            <Sparkles className="text-white" size={32} />
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">
            Welcome <span className="text-blue-600">Back.</span>
          </h1>
          <p className="text-slate-500 font-medium">Continue your journey to SDE-1</p>
        </div>

        {/* Login Card */}
        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 relative">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-medium text-slate-700"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Password</label>
                {/* <Link to="/forgot-password" size="sm" className="text-[10px] font-bold text-blue-500 hover:text-blue-700 uppercase">Forgot?</Link> */}
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-medium text-slate-700"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold border border-red-100 animate-shake">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-slate-900 text-white py-4 rounded-2xl hover:bg-blue-600 transition-all shadow-xl hover:shadow-blue-200 active:scale-95 font-bold flex items-center justify-center gap-2 group disabled:opacity-70"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  Log In to Account
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-slate-50 text-center">
            <p className="text-slate-500 font-medium">
              New to the platform? 
              <Link to='/signup' className="text-blue-600 font-black hover:underline ml-2">
                Create Account
              </Link>
            </p>
          </div>
        </div>

        {/* Footer Link */}
        <p className="text-center mt-8 text-slate-400 text-xs font-bold uppercase tracking-widest">
          &copy; 2026 CodeZen Interactive
        </p>
      </div>
    </div>
  );
}

export default Login;


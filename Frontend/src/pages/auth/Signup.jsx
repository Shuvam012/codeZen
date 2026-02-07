


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     const { name, email, password } = formData;

//     // Basic Validation
//     if (!name || !email || !password) {
//       setError('Please fill out all fields.');
//       return;
//     }

//     if (password.length < 6) {
//       setError('Password must be at least 6 characters.');
//       return;
//     }

//     try {
//       // Corrected URL: Port 3000 and /api/auth/register
//       // Corrected Body: Using 'name' to match your Mongoose Schema
//       const response = await axios.post('http://localhost:3000/api/auth/register', {
//         name,
//         email,
//         password,
//       });

//       if (response.status === 201) {
//         toast.success('Signup successful! Redirecting to login...');
//         setError('');
        
//         setTimeout(() => {
//           navigate('/login');
//         }, 2000);
//       }
//     } catch (error) {
//       const errMsg = error.response?.data?.message || 'Signup failed. Please try again.';
//       setError(errMsg);
//       toast.error(errMsg);
//       console.error('Signup failed:', error.response?.data || error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="bg-white shadow-md p-8 rounded-lg w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-center mb-6">
//           Sign Up for <span className="text-blue-500">codeZen</span>
//         </h2>

//         <form onSubmit={handleSignup} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Full Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:ring focus:border-blue-500 outline-none"
//               placeholder="Enter your name"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email Address</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:ring focus:border-blue-500 outline-none"
//               placeholder="you@example.com"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:ring focus:border-blue-500 outline-none"
//               placeholder="At least 6 characters"
//               required
//             />
//           </div>

//           {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-medium cursor-pointer"
//           >
//             Sign Up
//           </button>

//           <p className="text-center text-gray-600 mt-4">
//             Already have an account? 
//             <Link to="/login" className="text-blue-500 hover:underline ml-1">
//               Login
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;



// import React, { useState } from 'react';
// // 1. Use your centralized API instance
// import API from '../../api/axios'; 
// import { useNavigate, Link } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     const { name, email, password } = formData;

//     // Validation
//     if (!name || !email || !password) {
//       setError('Please fill out all fields.');
//       return;
//     }

//     if (password.length < 6) {
//       setError('Password must be at least 6 characters.');
//       return;
//     }

//     try {
//       // 2. Use API instance (URL becomes shorter as /api is in baseURL)
//       const response = await API.post('/auth/register', {
//         name,
//         email,
//         password,
//       });

//       if (response.status === 201) {
//         toast.success('Signup successful! Redirecting to login...');
//         setError('');
        
//         setTimeout(() => {
//           navigate('/login');
//         }, 2000);
//       }
//     } catch (error) {
//       const errMsg = error.response?.data?.message || 'Signup failed. Please try again.';
//       setError(errMsg);
//       toast.error(errMsg);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="bg-white shadow-md p-8 rounded-lg w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-center mb-6">
//           Sign Up for <span className="text-blue-500">codeZen</span>
//         </h2>

//         <form onSubmit={handleSignup} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Full Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:ring focus:border-blue-500 outline-none"
//               placeholder="John Doe"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email Address</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:ring focus:border-blue-500 outline-none"
//               placeholder="you@example.com"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:ring focus:border-blue-500 outline-none"
//               placeholder="At least 6 characters"
//               required
//             />
//           </div>

//           {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-medium cursor-pointer"
//           >
//             Sign Up
//           </button>

//           <p className="text-center text-gray-600 mt-4">
//             Already have an account? 
//             <Link to="/login" className="text-blue-500 hover:underline ml-1">
//               Login
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;








import React, { useState } from 'react';
import API from '../../api/axios'; 
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { User, Mail, Lock, ArrowRight, Loader2, Rocket } from 'lucide-react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    setError('');

    // Validation
    if (!name || !email || !password) {
      setError('Please fill out all fields.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);
    try {
      const response = await API.post('/auth/register', {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        toast.success('Account created! Welcome to CodeZen.');
        setTimeout(() => {
          navigate('/login');
        }, 1500);
      }
    } catch (error) {
      const errMsg = error.response?.data?.message || 'Signup failed. Please try again.';
      setError(errMsg);
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-[-5%] right-[-5%] w-[35%] h-[35%] bg-blue-50 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-[-5%] left-[-5%] w-[35%] h-[35%] bg-indigo-50 rounded-full blur-[100px] -z-10"></div>

      <div className="w-full max-w-lg">
        {/* Brand/Header Area */}
        <div className="text-center mb-8 space-y-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-900 shadow-lg mb-4">
            <Rocket className="text-white" size={28} />
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-none">
            Join the <span className="text-blue-600">Elite.</span>
          </h1>
          <p className="text-slate-500 font-medium">Create your account to start competing.</p>
        </div>

        {/* Signup Card */}
        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-slate-200/60 border border-slate-100">
          <form onSubmit={handleSignup} className="space-y-5">
            
            {/* Name Input */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] ml-1">Full Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-transparent rounded-[1.25rem] focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-medium text-slate-700"
                  placeholder="e.g., Alex Rivers"
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-transparent rounded-[1.25rem] focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-medium text-slate-700"
                  placeholder="alex@codezen.io"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] ml-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-transparent rounded-[1.25rem] focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-medium text-slate-700"
                  placeholder="Min. 6 characters"
                  required
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-xs font-bold border border-red-100 animate-pulse">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-slate-900 text-white py-4 mt-2 rounded-2xl hover:bg-blue-600 transition-all shadow-xl hover:shadow-blue-200 active:scale-[0.98] font-black flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  Create Account
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Footer Link */}
          <div className="mt-8 pt-8 border-t border-slate-50 text-center">
            <p className="text-slate-500 font-medium">
              Member already? 
              <Link to='/login' className="text-blue-600 font-black hover:underline ml-2">
                Log In
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center mt-10 text-slate-400 text-[10px] font-black uppercase tracking-widest opacity-60">
          Built for the next generation of engineers.
        </p>
      </div>
    </div>
  );
};

export default Signup;
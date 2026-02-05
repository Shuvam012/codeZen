


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



import React, { useState } from 'react';
// 1. Use your centralized API instance
import API from '../../api/axios'; 
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    // Validation
    if (!name || !email || !password) {
      setError('Please fill out all fields.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    try {
      // 2. Use API instance (URL becomes shorter as /api is in baseURL)
      const response = await API.post('/auth/register', {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        toast.success('Signup successful! Redirecting to login...');
        setError('');
        
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    } catch (error) {
      const errMsg = error.response?.data?.message || 'Signup failed. Please try again.';
      setError(errMsg);
      toast.error(errMsg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Sign Up for <span className="text-blue-500">codeZen</span>
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:ring focus:border-blue-500 outline-none"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:ring focus:border-blue-500 outline-none"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:ring focus:border-blue-500 outline-none"
              placeholder="At least 6 characters"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-medium cursor-pointer"
          >
            Sign Up
          </button>

          <p className="text-center text-gray-600 mt-4">
            Already have an account? 
            <Link to="/login" className="text-blue-500 hover:underline ml-1">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
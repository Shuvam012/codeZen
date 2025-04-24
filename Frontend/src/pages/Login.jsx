import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/UserContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {login} = useAuth();

  const adminData = [
    {
      email: 'admin@codezen.com',
      password: 'admin123',
      role: 'admin',
    },
  ];

 

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  
    
  //     if (email === adminData[0].email && password === adminData[0].password)  {
  //       login('admin');
  //       navigate('/admin-dashboard');
  //       toast('Welcome Admin!');
  //       return;
  //     } else {
  //       const response = await axios.post('http://localhost:8000/api/user/login', {
  //         email,
  //         password,
  //       });
  
  //       if (response.data.success) {
  //         setError('');
  //         login('user');
  //         navigate('/dashboard');
  //         toast('Welcome User!');
  //       } else {
  //         setError(response.data.message);
  //       }
  //     }
    
  // };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (email === adminData[0].email && password === adminData[0].password) {
      login('admin');
      navigate('/admin-dashboard');
      toast('Welcome Admin!');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:8000/api/user/login', {
        email,
        password,
      });
  
      // console.log("User login response:", response.data);
  
      // Adjust this condition based on actual backend structure
      if (response.data.success || response.data.user) {
        setError('');
        login('user');
        navigate('/dashboard');
        // toast('Welcome User!');
        toast(`Welcome ${response.data.user.fullName || 'User'}!`);
      } else {
        setError(response.data.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error("Login error:", error);
      setError('Something went wrong. Please try again.');
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md ">
        <h2 className="text-2xl font-semibold text-center mb-6">Login to <span className='text-blue-500'>codeZen</span></h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter password"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
          >
            Log In
          </button>
          <p className='flex  justify-center gap-1 '>Don't have an account? 
          <Link to= '/signup'>
            <span className='text-blue-500'> SignUp</span>
          </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login

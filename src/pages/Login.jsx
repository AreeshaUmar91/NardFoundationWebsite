import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Submitted:", formData);
    alert("Login functionality coming soon!");
  };

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center px-6 py-20">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-[#273750] mb-8 text-center">
          Login
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Address */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            <p className="text-sm text-blue-600 absolute right-3 bottom-3 cursor-pointer">
              Forgot password?
            </p>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#273750] text-white p-3 rounded font-semibold hover:bg-[#1f2d42] transition"
          >
            Log In
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;

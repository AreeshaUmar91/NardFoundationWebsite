import React, { useState } from "react";

const JoinNow = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    password: "",
    region: "",
    hpNumber: "",
    emergencyContact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center px-6 py-20">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-bold text-[#273750] mb-8 text-center">
          Work For Us
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Login Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
          <select
            name="region"
            value={formData.region}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          >
            <option value="">Select Region</option>
            <option value="north">North</option>
            <option value="south">South</option>
            <option value="east">East</option>
            <option value="west">West</option>
          </select>
          <input
            type="text"
            name="hpNumber"
            placeholder="HP Number"
            value={formData.hpNumber}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="emergencyContact"
            placeholder="Emergency Contact"
            value={formData.emergencyContact}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#273750] text-white p-3 rounded font-semibold hover:bg-[#1f2d42] transition"
          >
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default JoinNow;

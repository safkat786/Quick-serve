import React from 'react'
import {Routes,Route} from "react-router-dom"
import  { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    service: "",
    address: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Service Booked Successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-[400px]"
      >
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Book a Service
        </h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Location */}
        <input
          type="text"
          name="location"
          placeholder="Your Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Services */}
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select Service</option>
          <option value="Plumber">Plumber</option>
          <option value="Electrician">Electrician</option>
          <option value="AC Repair">AC Repair</option>
          <option value="Carpenter">Carpenter</option>
          <option value="Home Cleaning">Home Cleaning</option>
          <option value="Painter">Painter</option>
        </select>

        {/* Address */}
        <textarea
          name="address"
          placeholder="Full Address"
          value={formData.address}
          onChange={handleChange}
          rows="3"
          className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>

        {/* Date */}
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 mb-4"
          required
        />

        {/* Time */}
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 mb-6"
          required
        />

        <button
          type="submit"
          className="border-blue-400 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 active:scale-95 transition"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Form;

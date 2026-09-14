import React from 'react';
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="mt-4 bg-gray-700 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Serve</h2>
          <p className="text-gray-400">
            Fast, reliable and professional home services at your doorstep.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Home Cleaning</li>
            <li>Plumbing</li>
            <li>Electrician</li>
            <li>AC Repair</li>
            <li>Appliance Repair</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2  cursor-pointer text-gray-400">
            <li><Link to ='/Home'/>Home</li>
            <li><Link to='/services'/>Services</li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">📍 Lucknow, India</p>
          <p className="text-gray-400">📞 +91 9876543210</p>
          <p className="text-gray-400">✉ support@quickserve.com</p>
        </div>

      </div>

      <hr className="border-gray-700 my-8 mx-6" />

      <div className="text-center text-gray-400">
        © 2026 Quick Serve. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
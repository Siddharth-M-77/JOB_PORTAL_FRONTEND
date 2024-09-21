import React, { useState } from 'react';
import {Link}  from 'react-router-dom';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        {/* Logo Section */}
        <div className="flex-shrink-0 flex items-center">
          <h1 className="text-3xl font-extrabold">
            JOb <span className="text-rose-700">HUB</span>
          </h1>
        </div>

        {/* Menu for larger screens */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            to="/"
            className="text-gray-800 hover:text-rose-700 font-medium"
          >
            Home
          </Link>
          <Link
            to="/job"
            className="text-gray-800 hover:text-rose-700 font-medium"
          >
            Job
          </Link>
          <Link
            to="/browse"
            className="text-gray-800 hover:text-rose-700 font-medium"
          >
            Browse
          </Link>

          {/* Login & Signup buttons */}
          <div className="flex gap-4">
            <Link
              to="/login"
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
            >
              Signup
            </Link>
          </div>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-700"
          >
            <svg
              className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Menu */}
    <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link
          to="/"
          className="block text-gray-800 hover:text-rose-700 font-medium py-2"
        >
          Home
        </Link>
        <Link
          to="/job"
          className="block text-gray-800 hover:text-rose-700 font-medium py-2"
        >
          Job
        </Link>
        <Link
          to="/browse"
          className="block text-gray-800 hover:text-rose-700 font-medium py-2"
        >
          Browse
        </Link>
        <Link
          to="/login"
          className="block text-gray-800 hover:bg-gray-100 py-2 border border-gray-300 rounded-md text-center"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="block text-white bg-black py-2 rounded-md text-center hover:bg-gray-800"
        >
          Signup
        </Link>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;

import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">StayFinder</div>

      {/* Search Bar */}
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Search properties..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
        <a href="#">Rooms</a>
        <a href="#">Mansion</a>
        <a href="#">Countryside</a>
        <a href="#">Luxury</a>
      </nav>

      {/* Auth Buttons */}
      <div className="flex gap-4">
        <button className="px-4 py-2 rounded-md border text-gray-700">Sign In</button>
        <button className="px-4 py-2 rounded-md bg-blue-600 text-white">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;

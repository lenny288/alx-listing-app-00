import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-white text-center py-6 mt-12">
      <p>© {new Date().getFullYear()} StayFinder. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

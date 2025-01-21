import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location object

  // Define a mapping of routes to titles
  const pageTitles = {
    '/': 'Overview',
    '/login': 'Login',
    '/signup': 'Signup',
    '/club-details': 'Club Details',
    '/bank-details': 'Bank Details',
    '/myevents': 'My Events',
    '/profile': 'Profile',
  };

  // Get the current title based on the route, default to 'Brand'
  const currentTitle = pageTitles[location.pathname] || 'Overview';

  return (
    <nav className="bg-white-800 p-4 ml-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-xl font-bold text-gray-900">
          {currentTitle} {/* Display dynamic title based on current route */}
        </a>

        {/* Add your other navbar items here (e.g., links, icons, etc.) */}
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

const MainLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`fixed h-screen transition-all duration-300 ${sidebarOpen ? 'w-60' : 'w-20'}`}>
        <Sidebar setSidebarOpen={setSidebarOpen} />
      </div>

      {/* Main Content Area */}
      <div
        className="flex-1 transition-all duration-300"
        style={{ marginLeft: sidebarOpen ? '15rem' : '5rem' }} // Adjust the margin dynamically
      >
        {/* Navbar */}
        <div className="fixed top-0 left-0 z-10 w-full">
          <Navbar />
        </div>

        {/* Scrollable Content */}
        <div className="mt-[60px] p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

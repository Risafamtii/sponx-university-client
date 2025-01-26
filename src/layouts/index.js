// import React from "react";
// import { useLocation } from "react-router-dom";

// const MainLayout = ({ children }) => {
//   const location = useLocation();

//   // Pages where the navbar and footer should be hidden
//   const hideHeaderAndFooter = ["/signup", "/login","/club-details","/bank-details"];

//   return (
//     <div>
//       {/* Conditionally render the Navigation Bar */}
//       {!hideHeaderAndFooter.includes(location.pathname) && (
//         <header className="py-4 text-white bg-blue-900">
//           <h1 className="text-2xl text-center">Welcome to SponX</h1>
//         </header>
//       )}

//       {/* Main Content */}
//       <main className="p-4">{children}</main>

//       {/* Conditionally render the Footer */}
//       {!hideHeaderAndFooter.includes(location.pathname) && (
//         <footer className="py-2 text-center bg-gray-200">
//           &copy; 2024 SponX. All rights reserved.
//         </footer>
//       )}
//     </div>
//   );
// };

// export default MainLayout;

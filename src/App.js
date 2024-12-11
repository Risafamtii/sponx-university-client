import React from 'react';
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts";
import AppRoutes from "./routes/AppRoutes";
import Sidebar from './components/Sidebar/sidebar';
import Navbar from './components/Navbar/index'; 

function App() {
  return (
    <BrowserRouter>
      {/* <MainLayout> */}
      <Navbar/>
        <Sidebar />
        
        <AppRoutes />
        
      {/* </MainLayout> */}
    </BrowserRouter>
  );
}

export default App;

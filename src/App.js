import React from 'react';
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts";
import AppRoutes from "./routes/AppRoutes";
import Sidebar from './components/Sidebar/sidebar'; 

function App() {
  return (
    <BrowserRouter>
      <MainLayout>

        <Sidebar />
        <AppRoutes />
        
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;

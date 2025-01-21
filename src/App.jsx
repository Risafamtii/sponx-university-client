import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/FooterComp';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ClubDetailsPage from './pages/ClubDetailsPage';
import BankDetails from './pages/BankDetails';
import MyEvents from './pages/MyEvents';
import Profile from './pages/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <Navbar />


          {/* Main Pages */}
          <div className="flex-1 overflow-y-auto p-4">
            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/club-details" element={<ClubDetailsPage />} />
              <Route path="/bank-details" element={<BankDetails />} />
              <Route path="/myevents" element={<MyEvents />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>


        </div>
      </div>
    </BrowserRouter>
  );
}

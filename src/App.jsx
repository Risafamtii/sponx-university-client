// import React from 'react';
// import Home from './pages/Home';
// import Footer from './components/FooterComp';
// import Header from './components/Header';
// import LoginPage from './pages/LoginPage';
// import SignupPage from './pages/SignupPage';
// import ClubDetailsPage from './pages/ClubDetailsPage';
// import BankDetails from './pages/BankDetails';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Profile from './pages/Profile';
// import Overview from './pages/Overview';
// import SelectedAd from './pages/SelectedAd';
// import AdvertiseEvents from './pages/AdvertiseEvents';
// import MainLayout from './components/MainLayout/MainLayout';

// export default function App() {
//   return (
//       <BrowserRouter>
//       <MainLayout>
//         <Routes>
//           <Route path='/profile' element={<Profile/>}/>
//           <Route path='/overview' element={<Overview/>}/>
//           <Route path='/myevents' element={<AdvertiseEvents />} />
//           <Route path='/selectedAd' element={<SelectedAd/>}/>
//         </Routes>
//       </MainLayout>
//       </BrowserRouter>
//   );
// }

import React from 'react'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <div>
      <AppRoutes/>
    </div>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/FooterComp'
import Header from './components/Header'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ClubDetailsPage from './pages/ClubDetailsPage'
import BankDetails from './pages/BankDetails'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/club-details' element={<ClubDetailsPage />} />
        <Route path='/bank-details' element={<BankDetails />} />
       
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


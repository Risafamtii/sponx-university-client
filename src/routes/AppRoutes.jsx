import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';

// Layouts
import AdminLayout from '../layouts/AdminLayout';
import ClubLayout from '../layouts/OrgLayout';
import CompanyLayout from '../layouts/CompanyLayout';

// Public Components
import Home from '../pages/Home/Home';
import Header from '../components/Header';
import Footer from '../components/FooterComp';
import LoginPage from '../pages/LoginPage';
import Register from '../pages/RegistrationTypePage';
import Signup from '../pages/SignupPage';

// Admin Pages
import AdminOverview from '../pages/Admin/Overview';
import AdminBids from '../pages/Admin/Bids';
import AdminCompanies from '../pages/Admin/Companies';
import AdminOrgs from '../pages/Admin/Organizations';
import AdminEvents from '../pages/Admin/Events';
import AdminPayments from '../pages/Admin/Payments';
import AdminSettings from '../pages/Admin/Settings';
import AdminCompose from '../pages/Admin/Compose';
import AdminSent from '../pages/Admin/Sent';
import AdminEventsView from '../pages/Admin/EventsView';
import AdminReport from '../pages/Admin/Report';
import AdminFeedback from '../pages/Admin/Feedback';
import AdminCompanyAdd from '../pages/Admin/CompanyAdd';
import AdminCompanyView from '../pages/Admin/CompanyView';
import AdminOrgView from '../pages/Admin/OrgView';
import AdminOrgAdd from '../pages/Admin/OrganizationAdd'

// Club Pages
import ClubOverview from '../pages/Club/Overview';
import ClubBank from '../pages/Club/BankDetails';
import ClubDetails from '../pages/Club/ClubDetailsPage';
import ClubEvents from '../pages/Club/MyEvents';
import ClubProfile from '../pages/Club/Profile';
import ClubSelectAd from '../pages/Club/SelectedAd';
import ClubAdvertise from '../pages/Club/AdvertiseEvents';
import ClubEventDetails from '../pages/Club/EventDetails';
import ClubCreateEvent from '../pages/Club/CreateEvent';

// Company Pages
import CompanyOverview from '../pages/Company/Overview';
import CompanyProfile from '../pages/Company/Profile';
import CompanyPayment from '../pages/Company/Payment';
import CompanySponsorship from '../pages/Company/Sponsorship';
import CompanyEvents from '../pages/Company/Eventlist';
import ClubDetailsPage from '../pages/Club/ClubDetailsPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={
          <>
            <Header />
            <Home />
            <Footer />
          </>
        } />
        
        <Route path="/login" element={<LoginPage />} />
        
        <Route path="/register">
          <Route index element={<Register />} />
          <Route path=":type" element={<Signup />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<PrivateRoutes />}>
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<AdminOverview />} />
            
            {/* Bidding Management */}
            <Route path="bids" element={<AdminBids />} />
            
            {/* Event Management */}
            <Route path="events">
              <Route index element={<AdminEvents />} />
              <Route path=":eventId">
                <Route index element={<AdminEventsView />} />
                <Route path="report" element={<AdminReport />} />
                <Route path="feedback" element={<AdminFeedback />} />
              </Route>
            </Route>
            
            {/* User Management */}
            <Route path="users">
              
              <Route path="companies">
                <Route index element={<AdminCompanies />} />
                <Route path="add" element={<AdminCompanyAdd />} />
                <Route path="view/:id" element={<AdminCompanyView />} />
              </Route>

              <Route path='orgs'>
                <Route index element={<AdminOrgs />} />
                <Route path="add" element={<AdminOrgAdd />} />
                <Route path="view/:id" element={<AdminOrgView />} />
              </Route>

            </Route>
            
            {/* Financial */}
            <Route path="payments" element={<AdminPayments />} />
            
            {/* Communication */}
            <Route path="notifications">
              <Route path="compose" element={<AdminCompose />} />
              <Route path="sent" element={<AdminSent />} />
            </Route>
            
            {/* Settings */}
            <Route path="settings" element={<AdminSettings />} />
          </Route>

          {/* Club Routes */}
          <Route path="/org" element={<ClubLayout />}>
            <Route index element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<ClubOverview />} />
            <Route path='myevents' element={< ClubEvents/>}/>
            <Route path="createevent" element={<ClubCreateEvent />} />
            <Route path="advertise" element={<ClubAdvertise />} />
            <Route path="bankdetails" element={<ClubBank />} />       
            {/* <Route path="selectad" element={< />} /> */}

            
            
            {/* Profile Management */}
            <Route path="profile" element={<ClubProfile />} />
            <Route path="details" element={<ClubDetails />} />
            
            {/* Financial */}
            <Route path="banking" element={<ClubBank />} />
            
            {/* Sponsorships */}
            <Route path="sponsorships">
              <Route path="select" element={<ClubSelectAd />} />
            </Route>
          </Route>

          {/* Company Routes */}
          <Route path="/company" element={<CompanyLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<CompanyOverview />} />
            
            {/* Profile */}
            <Route path="profile" element={<CompanyProfile />} />
            
            {/* Sponsorships */}
            <Route path="sponsorships">
              <Route index element={<CompanySponsorship />} />
              <Route path="events" element={<CompanyEvents />} />
            </Route>
            
            {/* Payments */}
            <Route path="payments" element={<CompanyPayment />} />
          </Route>
        </Route>

      </Routes>
    </Router>
  );
};

export default AppRoutes;
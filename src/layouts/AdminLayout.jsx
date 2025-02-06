import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import menuConfig from '../utils/menuConfig'
import Navbar from '../components/Navbar/Navbar'

const AdminLayout = () => {

  const userType = 'admin';
  
  return (
    <div className="flex h-screen">
      {/* Sidebar on the left */}
      <Navbar userType={userType}/>
      
      <Sidebar menuItems={menuConfig.admin}/>
      
      {/* Main content area where child routes will render */}
      <div className="flex-1 p-4 bg-gray-100">
        <Outlet /> {/* Renders the content of the nested route */}
      </div>
    </div>
  )
}

export default AdminLayout

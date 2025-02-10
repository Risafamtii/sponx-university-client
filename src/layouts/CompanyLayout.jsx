import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import menuConfig from '../utils/menuConfig'

const CompanyLayout = () => {
  return (
    <div className="flex h-full">
      {/* Sidebar on the left */}
      <Sidebar menuItems={menuConfig.club} />
      
      {/* Main content area where child routes will render */}
      <div className="flex-1">
        <Outlet /> {/* Renders the content of the nested route */}
      </div>
    </div>
  )
}

export default CompanyLayout;

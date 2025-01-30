import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import menuConfig from '../utils/menuConfig'

const ClubLayout = () => {
  return (
    <div className="flex h-full">
      {/* Sidebar on the left */}
      <Sidebar menuItems={menuConfig.club} />
      
      {/* Main content area where child routes will render */}
      <div className="flex-1 p-4 bg-gray-100">
        <Outlet /> {/* Renders the content of the nested route */}
      </div>
    </div>
  )
}

export default ClubLayout

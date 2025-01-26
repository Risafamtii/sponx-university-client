import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import menuConfig from '../utils/menuConfig'

const AdminLayout = () => {
  return (
    <div className='flex h-screen'>
      <Sidebar menuItems={menuConfig.admin}/>
    </div>
  )
}

export default AdminLayout

import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    const [openSidebar, setOpensidebar] = useState(false)
  return (
    <div className='flex min-h-screen w-full'>
        <Sidebar open={openSidebar} setOpen={setOpensidebar} />
        <div className='flex flex-1 flex-col bg-white'>
            <Header openSidebar={openSidebar} setOpenSidebar={setOpensidebar} />
            <main className='flex flex-col w-full p-4'>
                <Outlet />
            </main>
        </div>
    </div>
  )
}

export default AdminLayout
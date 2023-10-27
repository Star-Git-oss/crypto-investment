import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Background from './Background'
const AdminLayout = () => {
    return (
        <Background>
            <Navbar />
            <div className='mx-auto lg:w-[1280px] w-full'>
                <div className='flex'>
                    <Sidebar />
                    <div className='grow'>
                        <div className='m-5'><Outlet /></div>
                    </div>
                </div>
            </div>
        </Background>
    )
}

export default AdminLayout

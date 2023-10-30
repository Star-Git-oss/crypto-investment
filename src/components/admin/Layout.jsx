import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Background from './Background'
const Layout = () => {
    return (
        <Background>
            <Navbar />
            <div className='mx-auto lg:w-[1280px] w-full sm:overflow-hidden overflow-auto'>
                <div className='flex'>
                    <Sidebar />
                    <div className='grow w-full'>
                        <div className='mx-8'><Outlet /></div>
                    </div>
                </div>
            </div>
        </Background>
    )
}

export default Layout

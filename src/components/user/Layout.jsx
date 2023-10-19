import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Background from './Background'
const Layout = () => {
    return (
        <Background>
            <Navbar />
            <div className='mx-auto xl:w-[1348px] lg:w-[1384px] w-full'>
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

export default Layout

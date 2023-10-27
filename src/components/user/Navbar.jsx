import React from 'react'
import Logo from '../../assets/logo1.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { HiBellAlert } from 'react-icons/hi2'
import QRCode from 'react-qr-code'
import 'react-toastify/dist/ReactToastify.css'
import './navbar.css'

import { useSelector } from 'react-redux'

const Navbar = () => {

  const [isQROpen, setIsQROpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { userInfo } = useSelector((state)=> state.auth);
  const myLink = userInfo.mylink;

  const handleAlertClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openQR = () => {
    setIsQROpen(true);
  };
  const closeQR = () => {
    setIsQROpen(false);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(myLink);
      toast.success('Copy success!', {autoClose: 1000, hideProgressBar: true, pauseOnHover: false, closeOnClick: true, theme: "dark",});
    } catch (error) {
      console.log("Copy failed:", error);
    }
  };

  const copyURL = async () => {
    try {
      await navigator.clipboard.writeText("http://localhost:3000/user?invite="+myLink);
      toast.success('Copy success!', {autoClose: 1000, hideProgressBar: true, pauseOnHover: false, closeOnClick: true, theme: "dark",});
    } catch (error) {
      console.log("Copy failed:", error);
    }
  };

  return (
    <nav className='bg-white border-gray-200 rounded dark:bg-slate-900 shadow-md shadow-black w-full top-0 sticky'>
      <div className='flex items-center mx-auto py-2 lg:w-[1280px] w-full'>
        <ToastContainer />
        <Link to={'/'}>
            <img src={Logo} alt='logo' className='w-28 xs:ml-8'/>
        </Link>

        <div className='flex mx-auto relative md:hidden'>
          <input type='text' placeholder='Referral : ' className=' text-gray-900 text-sm rounded-lg w-[180px] p-2.5 dark:bg-slate-700 dark:border-gray-600  dark:text-gray-300 focus:outline-none' readOnly></input>
          <label className="absolute right-12 top-0 px-1 mt-2 bottom-0  rounded-r-lg text-slate-200 cursor-text"> {myLink}</label>
          <button className="absolute right-2 top-0 px-1 bottom-0  rounded-r-lg text-slate-400 hover:text-white" onClick={copyLink}>
            <svg
              viewBox="0 0 24 24"
              className='w-5 '
              fill="currentColor"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M7 6V3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 013 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z" />
            </svg>
          </button>
        </div>

        <div className='flex ml-auto relative hidden md:block'>
          {/* <section className='ml-30 my-auto'>
              <div className="content whitespace-nowrap">
                <h2>My Link </h2>
                <h2>My Link </h2>
              </div>
          </section> */}
          {/* <div className=' text-xl text-cyan-300 whitespace-nowrap mr-8'>Invite your friends with referal link </div> */}
          <input type='text' placeholder='Referral : ' className=' text-gray-900 text-sm rounded-l-lg w-[240px] p-2.5 dark:bg-slate-700 dark:border-gray-600  dark:text-gray-300 focus:outline-none' readOnly></input>
          <label className="absolute right-16 top-0 px-1 mt-2 bottom-0  rounded-r-lg text-slate-200 cursor-text"> {myLink}</label>
          <button className="absolute right-2 top-0 px-1 bottom-0  rounded-r-lg text-slate-400 hover:text-white" onClick={copyLink}>
            <svg
              viewBox="0 0 24 24"
              className='w-5 '
              fill="currentColor"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M7 6V3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 013 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z" />
            </svg>
          </button>
          {/* <button className="absolute right-0 px-1 mr-2 top-0 bottom-0 rounded-r-lg text-gray-300 hover:text-white" onClick={openQR}>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className='w-5'
            >
              <path d="M3 11h8V3H3zm2-6h4v4H5zM3 21h8v-8H3zm2-6h4v4H5zm8-12v8h8V3zm6 6h-4V5h4zm-5.99 4h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm4 0h2v2h-2zm2 2h2v2h-2zm-4 0h2v2h-2zm2-6h2v2h-2zm2 2h2v2h-2z" />
            </svg>
          </button> */}
        </div>

        <div className='flex mr-auto relative hidden md:block'>
          <input type='text' className=' text-gray-900 text-sm rounded-r-lg w-[340px] p-2.5 dark:bg-slate-700 dark:border-gray-600  dark:text-gray-300 focus:outline-none' readOnly></input>
          <label className="absolute right-16 top-0 px-1 mt-2 bottom-0  rounded-r-lg text-slate-200 cursor-text"> https://.../user?invite={myLink}</label>
          <button className="absolute right-2 top-0 px-1 bottom-0  rounded-r-lg text-slate-400 hover:text-white" onClick={copyURL}>
            <svg
              viewBox="0 0 24 24"
              className='w-5 '
              fill="currentColor"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M7 6V3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 013 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z" />
            </svg>
          </button>
          {/* <button className="absolute right-0 px-1 mr-2 top-0 bottom-0 rounded-r-lg text-gray-300 hover:text-white" onClick={openQR}>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className='w-5'
            >
              <path d="M3 11h8V3H3zm2-6h4v4H5zM3 21h8v-8H3zm2-6h4v4H5zm8-12v8h8V3zm6 6h-4V5h4zm-5.99 4h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm4 0h2v2h-2zm2 2h2v2h-2zm-4 0h2v2h-2zm2-6h2v2h-2zm2 2h2v2h-2z" />
            </svg>
          </button> */}
        </div>
          
        <div className="relative inline-flex mr-8">
          <div
            className="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-cyan-500 px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white animate-pulse">
            New
          </div>
          <div
            className="flex items-center justify-center rounded-lg text-center text-white shadow-lg dark:text-gray-200 " onClick={handleAlertClick}>
             <HiBellAlert className='w-8 h-8 text-slate-400 hover:cursor-pointer hover:text-slate-200'/>
          </div>
          {isDropdownOpen && (
            <div className="absolute top-10 right-0 w-44 p-2 rounded-lg bg-slate-700 shadow-md text-cyan-400 space-y-2">
                <div>Cycle1 completed</div>
                <div>User1 Added</div>
            </div>
          )}
        </div>

        {isQROpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-black rounded-lg p-6 relative z-50">
              <button
                className="absolute top-0 right-0 -m-4 font-medium  text-white hover:text-gray-300"
                onClick={closeQR}
              >
                X
              </button>
              <QRCode
                title="Link"
                value={myLink}
                bgColor="#000000"
                fgColor="#FFFFFF"
                size={512}
              />
              <div className='text-gray-300 text-center mt-4'>{myLink}</div>
            </div>
          </div>
        )}
       
      </div>
    </nav>
  )
}

export default Navbar

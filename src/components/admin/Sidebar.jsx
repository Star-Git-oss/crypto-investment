import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { SiWebmoney } from 'react-icons/si'
import { BiMoneyWithdraw } from 'react-icons/bi'
import { AiFillSetting } from 'react-icons/ai'
import { FaUsers } from 'react-icons/fa'
import { BiSolidDashboard } from 'react-icons/bi'
import { VscSignOut } from 'react-icons/vsc'
import { useSelector, useDispatch } from 'react-redux'

import HamburgerButton from './HamburgerMenuButton/HamburgerButton'
import Avatar from '../../assets/avatar13.png'

import { useLogoutMutation } from '../../slices/usersApiSlice';
import { logout } from '../../slices/authSlice';
const Sidebar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  const [logoutApiCall] = useLogoutMutation();
  const logoutHandler = async () => {
    try {
      const res = await logoutApiCall().unwrap();
      navigate('/');
      dispatch(logout());
      console.log(res.message);
    } catch (err) {
      console.error(err);
    }
  };

  const Menus = [
    { title: 'Dashboard', path: '/admin', src: <BiSolidDashboard /> },
    { title: 'Investment', path: '/investment', src: <SiWebmoney /> },
    { title: 'Withdraw', path: '/withdraw', src: <BiMoneyWithdraw /> },
    { title: 'Users', path: '/users', src: <FaUsers /> },
  ]


  return (
    <>
      <div className=' w-72 hidden sm:block h-screen duration-300 bg-gray-100 p-5 dark:bg-slate-900' >

        <ul>
          {Menus.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <li
                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? 'mt-9' : 'mt-2'} ${
                  location.pathname === menu.path &&
                  'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                <span className='text-2xl'>{menu.src}</span>
                <span
                  className='origin-left duration-300 hover:block'
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
            {/* <li
              className="flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer text-white hover:bg-gray-700"
              onClick={logoutHandler}
            >
              <span className='text-2xl'><VscSignOut /></span>
              <span
                className='origin-left duration-300 hover:block'
              >
                Sign Out
              </span>
            </li> */}
        </ul>
      </div>
      {/* Mobile Menu */}
      <div className="pt-3">
        <HamburgerButton
          setMobileMenu={setMobileMenu}
          mobileMenu={mobileMenu}
        />
      </div>
      <div className="sm:hidden">
        <div
          className={`${
            mobileMenu ? 'flex' : 'hidden'
          } absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 dark:text-white  bg-gray-50 dark:bg-slate-800 drop-shadow md rounded-xl`}
        >
          {Menus.map((menu, index) => (
            <Link
              to={menu.path}
              key={index}
              onClick={() => setMobileMenu(false)}
            >
              <span
                className={` ${
                  location.pathname === menu.path &&
                  'bg-gray-200 dark:bg-gray-700'
                } p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700`}
              >
                {menu.title}
              </span>
            </Link>
          ))}
            <Link onClick={() => {setMobileMenu(false); logoutHandler();}}>
              <span>Sign Out</span>
            </Link>
        </div>
      </div>
    </>
  )
}

export default Sidebar

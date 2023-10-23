import { useDispatch, useSelector } from 'react-redux';
import mylogo from '../assets/logo1.png'
import { close, menu } from "../assets";
import { useGlobalContext } from "../context/SidebarContext";
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout, setCredentials, setNodes } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import axios from 'axios';
const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const { userInfo }  = useSelector((state) => state.auth);
  // const { nodes } = useSelector((state)=> state.auth);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/users/');
        dispatch(setCredentials({ ...response.data }));

        const email = response.data.email;
        console.log('mail : '+email);

        await axios
        .post("/api/tree", {email})
        .then( res => {
            console.log(userInfo.state);
            console.log(res.data);
            // if(userInfo.state != 0 || userInfo.state != 1)
            // {
            dispatch(setNodes({ ...res.data }));
                // }    
                
            console.log("Tree Updated Successfully!");
        })
        .catch(err => {
            console.log(err);
        });

        console.log(response.data);
      } catch (error) {
        console.error(error.message);
      };
    };
    fetchData();
    
  }, []); 

  const { openSidebar, openSignup } = useGlobalContext();
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

  return (
    <nav className="w-full fix flex py-6 justify-between items-center navbar">
      <img src={mylogo} alt="hoobank" className="w-32" />

      {!userInfo ?
      (<ul className="list-none sm:flex hidden justify-end items-center flex-1">
         
         <li
            className="font-poppins font-normal cursor-pointer text-[16px] text-white hover:bg-pink-600 ml-10 bg-pink-700 rounded-xl px-6 py-1"
            onClick={openSidebar}
          >
            Login
          </li>
          <li
            className="font-poppins font-normal cursor-pointer text-[16px] text-white hover:bg-pink-600 ml-4 bg-pink-700 rounded-xl px-6 py-1"
            onClick={openSignup}
          >
            Sign Up
          </li>
      </ul>)
       :
      (<ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li
          className="relative inline-flex items-center justify-center px-4 py-1 text-lg font-normal text-white transition-all duration-200 bg-gray-900 font-poppins rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 mr-4 hover:bg-gray-800 hover:cursor-pointer"
          onClick={logoutHandler}
        >
          Sign Out
        </li>
        <div className="relative inline-flex  group">
            <div
                className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
            </div>
            <a title="Get quote now"
                className="relative inline-flex items-center justify-center px-4 py-1 text-lg font-normal text-white transition-all duration-200 bg-gray-900 font-poppins rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
                onClick={() => navigate('/dashboard')}
                >Get Started
            </a>
        </div>
      </ul>)
      }
      

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          {!userInfo ?
          (<ul className="list-none flex justify-end items-start flex-1 flex-col">
            <li
              className="font-poppins font-medium cursor-pointer text-[16px] text-dimWhite hover:text-white"
              onClick={openSidebar}
            >
              Login 
            </li>

            <li
              className="font-poppins font-medium cursor-pointer text-[16px] text-dimWhite hover:text-white mt-4"
              onClick={openSignup}
            >
              Sign Up
            </li>
          </ul>)
          :
          (<ul>
            <li
              className="font-poppins font-medium cursor-pointer text-[16px] text-dimWhite hover:text-white"
              onClick={() => navigate('/dashboard')}
            >
              Get Started
            </li>

            <li
              className="font-poppins font-medium cursor-pointer text-[16px] text-dimWhite hover:text-white mt-4"
              onClick={logoutHandler}
            >
              Sign Out
            </li>
          </ul>)
          }
        </div>
      </div>

    </nav>
  );
};

export default Navbar;

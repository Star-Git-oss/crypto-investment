import React, { useEffect, useState } from "react";
import TaskBar from "../../components/user/TaskBar";

import { setCredentials } from '../../slices/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';
import { logout } from '../../slices/authSlice';
import { useLogoutMutation } from '../../slices/usersApiSlice';
import { setPercentage } from "../../slices/authSlice";

import axios from "axios";
const Cycle = () => {

    const { userInfo } = useSelector((state)=>state.auth);
    const { percentage } = useSelector((state)=>state.auth);
    const email = userInfo.email;
    const [bar1, setBar1] = useState({ cycle: 1, state: 1 });
    const [bar2, setBar2] = useState({ cycle: 2, state: 1 });
    const [bar3, setBar3] = useState({ cycle: 3, state: 1 });

    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('/api/users/');
            console.log(response.data);
            dispatch(setCredentials({ ...response.data }));
            
          } catch (error) {
            console.error(error.message);
            logoutHandler();
          };
        };
        fetchData();
      }, []); 

    useEffect(()=>{
 
        if(userInfo.cycle==1) {
            setBar1({state:userInfo.state});
            setBar2({state:0});
            setBar3({state:0});
        } else if(userInfo.cycle==2){
            setBar1({state:4});
            setBar2({state:userInfo.state});
            setBar3({state:0});
        } else if(userInfo.cycle==3){
            setBar1({state:4});
            setBar2({state:4});
            setBar3({state:userInfo.state});
        }

    },[userInfo.cycle, userInfo.state]);

    const getStarted = () => {
        // e.preventDefault();
        dispatch(setPercentage(0));
        axios
        .put("/api/balance/start", {email})
        .then( res => {
            // console.log(res.data);
            dispatch(setCredentials({ ...res.data }));
            toast.success("Your cycle started!", {autoClose: 1000, hideProgressBar: true, pauseOnHover: false, closeOnClick: true, theme: "dark",});
        })
        .catch(err => {
            toast.error(err.response.data.message, {autoClose: 1000, hideProgressBar: true, pauseOnHover: false, closeOnClick: true, theme: "dark",});
        });
    }

    const handleRewards = () => {
        // e.preventDefault();

        axios
        .put("/api/balance/rewards", {email})
        .then( res => {
            // console.log(res.data);
            dispatch(setCredentials({ ...res.data }));
            toast.success("Congratulations! Please enjoy next cycle!", {autoClose: 1000, hideProgressBar: true, pauseOnHover: false, closeOnClick: true, theme: "dark",});
        })
        .catch(err => {
            toast.error(err.response.data.message, {autoClose: 1000, hideProgressBar: true, pauseOnHover: false, closeOnClick: true, theme: "dark",});
        });
    }

    return (

    <div className='dark:text-white sm:mt-10 mt-16 w-full'>
        <TaskBar cycle={1} state={bar1.state} getRewards={handleRewards} percentage={percentage} getStarted={getStarted}/>
        <TaskBar cycle={2} state={bar2.state} getRewards={handleRewards} percentage={percentage} getStarted={getStarted}/>
        <TaskBar cycle={3} state={bar3.state} getRewards={handleRewards} percentage={percentage} getStarted={getStarted}/>

        <ToastContainer />

    </div>
    );
};

export default Cycle;

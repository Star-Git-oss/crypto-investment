import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TaskBar from "../../components/user/TaskBar";

import { setCredentials } from '../../slices/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios";
const Cycle = () => {

    const { userInfo } = useSelector((state)=>state.auth);
    const email = userInfo.email;
    const dispatch = useDispatch();
    const [bar1, setBar1] = useState({ cycle: 1, state: 1 });
    const [bar2, setBar2] = useState({ cycle: 2, state: 1 });
    const [bar3, setBar3] = useState({ cycle: 3, state: 1 });

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

    const getStarted = (e) => {
        e.preventDefault();

        axios
        .put("/api/balance/start", {email})
        .then( res => {
            // console.log(res.data);
            dispatch(setCredentials({ ...res.data }));
            toast.success("Your cycle started!", {autoClose: 1000, hideProgressBar: true, pauseOnHover: false, closeOnClick: true, theme: "dark",});
        })
        .catch(err => {
            toast.error(err.response.data.message, {autoClose: 5000, hideProgressBar: true, pauseOnHover: false, closeOnClick: true, theme: "dark",});
        });
    }

    const handleRewards = (e) => {
        e.preventDefault();

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

    <div className='dark:text-white mt-16 xs:w-full w-[80%]'>
        <TaskBar cycle={1} state={bar1.state} getRewards={handleRewards} getStarted={getStarted}/>
        <TaskBar cycle={2} state={bar2.state} getRewards={handleRewards} getStarted={getStarted}/>
        <TaskBar cycle={3} state={bar3.state} getRewards={handleRewards} getStarted={getStarted}/>

        <ToastContainer />

    </div>
    );
};

export default Cycle;

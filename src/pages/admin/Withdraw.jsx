import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Tooltip } from '@material-tailwind/react';
import { useSelector, useDispatch } from 'react-redux';
import { setCredentials } from '../../slices/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { configureStore } from '@reduxjs/toolkit';

const Withdraw = () => {

    return (
        <div className='dark:text-white h-screen xs:w-full w-[80%]'>
            History
        </div>
    );
}

export default Withdraw

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TaskBar from "../../components/admin/TaskBar";

import { setCredentials } from '../../slices/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios";
const Users = () => {
    return (
        <div className='dark:text-white h-screen xs:w-full w-[80%]'>
            User Manage
        </div>
    );
};

export default Users;

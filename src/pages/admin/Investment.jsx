import React from 'react'
import Avatar from '../../assets/avatar12.png'
import { useState } from 'react';
import { createRef } from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUpdateUserMutation } from '../../slices/usersApiSlice';
import { setCredentials } from '../../slices/authSlice';


const Investment = () => {
    return (
        <div className='dark:text-white h-screen xs:w-full w-[80%]'>
            My Team
        </div>
        );
}
export default Investment

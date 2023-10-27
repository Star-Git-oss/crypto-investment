import React from 'react'
import Node from '../../components/admin/Node';
import Avatar00 from '../../assets/avatar12.png'
import TaskBar from '../../components/admin/TaskBar';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setCredentials, setNodes } from '../../slices/authSlice';
import axios from 'axios';

const Admin = () => {

    return (
    <div className='dark:text-white h-screen xs:w-full w-[80%]'>
        Admin Dashboard
    </div>
    );
}

export default Admin

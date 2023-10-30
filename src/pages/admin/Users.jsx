import React, { useEffect, useState } from "react";
import IconDelete from "./Icons/IconDelete";
import IconEdit from "./Icons/IconEdit";
import Avatar00 from '../../assets/avatar12.png';
import { Link } from "react-router-dom";
import { HiX } from 'react-icons/hi';

import { setUsers } from "../../slices/authSlice";
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createRef } from 'react'

import ConfirmDialog from "../../components/ConfirmDialog";

import axios from "axios";

const Users = () => {

    const [show, setShow] = useState(false);

    const dispatch = useDispatch();
    const { users } = useSelector((state)=>state.auth);
    const [isEdit, setEdit] = useState(false);
    const [email, setEmail] = useState("");
    const [_id, setId] = useState("");

    const handleEdit = (email) =>{
        setEdit(true);
        setEmail(email);
        console.log(email);
    }

    const accept = () => {
        console.log('accepted');
        axios
        .delete(`/api/users/delete/${_id}`)
        .then( res => {
            dispatch(setUsers({ ...res.data }));
            console.log("User deleted Successfully!", res.data);
            toast.success('User deleted successfully!', {autoClose: 1000, hideProgressBar: true, pauseOnHover: false, closeOnClick: true, theme: "dark",});
        })
        .catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {

        axios
        .get("/api/users/allusers")
        .then( res => {
            dispatch(setUsers({ ...res.data }));
            console.log("All users founded Successfully!", res.data);
        })
        .catch(err => {
            console.log(err);
        });

      }, []);

    //------------------------------------------ Update Profile-----------------------------------------


    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        return;
    };
    const closeSidebar = () => {
        setEdit(false);
    }


    return (
        <div className='dark:text-white h-screen w-full'>
             { show &&
            <ConfirmDialog accept={accept} show={show} handleShow={setShow} title='Delete User' content='Do you want to delete this user?' confirm='Delete' confirmColor='red'/> }

            <div className="col-span-12">
                <div className="overflow-auto lg:overflow-visible ">
                    <table className="table text-gray-400 border-collapse space-y-6 mx-auto text-sm mt-16">
                        <thead className="bg-black text-slate-400">
                            <tr>
                                <th className="p-3 w-60 text-center">User</th>
                                <th className="p-3 w-60 text-left hidden lg:block">Email</th>
                                <th className="p-3 text-left hidden xs:table-cell">Balance</th>
                                <th className="p-3 text-left hidden sm:table-cell">Cycle</th>
                                <th className="p-3 text-left hidden md:table-cell">Status</th>
                                <th className="p-3 text-left">Action</th>
                            </tr>
                        </thead>

                        <tbody className="font-semibold font-sans text-md text-slate-300">
                            {Object.values(users).map((user, index) => (
                                <tr key={index} className="bg-gray-900 hover:bg-gray-700 cursor-default ">
                                    <td className="p-3">
                                        <div className="flex">
                                            {user.avatar?<img className="rounded-full h-12 w-12  object-cover" src={user.avatar} alt="unsplash image" />:<img className="rounded-full h-12 w-12  object-cover" src={Avatar00} alt="unsplash image" />}
                                            <div className="ml-8 my-auto">
                                                <div>{user.username}</div>
                                                <div className="text-gray-300 block lg:hidden">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-3 hidden lg:table-cell">
                                        {user.email}
                                    </td>
                                    <td className="p-3 font-bold text-cyan-400 hidden xs:table-cell">
                                        ${user.balance}
                                    </td>
                                    <td className="p-3 hidden sm:table-cell">
                                        Cycle {user.cycle}
                                    </td>
                                    <td className="p-3 hidden md:table-cell">
                                        {user.state==1 &&<span className="bg-slate-400 text-gray-50 rounded-md px-2">Inactivate</span>}
                                        {user.state==2 &&<span className="bg-green-400 text-gray-50 rounded-md px-2">In progress</span>}
                                        {user.state==3 &&<span className="bg-yellow-400 text-white rounded-md px-2">Rewarded</span>}
                                        {user.state>3 &&<span className="bg-blue-400 text-gray-50 rounded-md px-2">Completed</span>}
                                    </td>
                                    <td className="p-3">
                                        <div className="flex">
                                            <a href="#" className="text-gray-400 hover:text-gray-100 mx-2" onClick={()=>handleEdit(user.email)}>
                                                <IconEdit className='w-4 h-4'/>
                                            </a>
                                            <a href="#" className="text-red-400 hover:text-red-600  ml-2" onClick={() => {setId(user._id); setShow(true);}}>
                                                <IconDelete className='w-4 h-4'/>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div
				className={`transition-all duration-500 fixed top-6 sm:top-24 ${
					isEdit ? '' : 'hidden'
				} left-1/2 transform -translate-x-1/2 z-10`}
			>
					
                <div className={`flex justify-center ${isEdit?'xs:block h-[90vh]':''} `}>
                    <div className='xs:w-[400px] w-[340px] mx-auto bg-gray-900 p-8 rounded-3xl overflow-auto'>
                        <a
                            onClick={closeSidebar}
                            className="absolute top-2 right-2 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center active:bg-gray-300 focus:outline-none ml-6 hover:bg-gray-200 hover:text-gray-800"
                        >
                            <HiX className="w-5 h-5" />
                        </a>
                        <form className={` ${isEdit? '' : 'hidden'}`} onSubmit={handleUpdateProfile}>
                            <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN UP</h2>
                        </form>
                    </div>
                </div>
            </div>	
        </div>
    );
};

export default Users;

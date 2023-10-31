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

import Avatar from '../../assets/avatar12.png'
import { AiOutlineCloudUpload } from 'react-icons/ai'

import { useUpdateUserMutation } from '../../slices/usersApiSlice';
import { setCredentials } from '../../slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../slices/authSlice';
import { useLogoutMutation } from '../../slices/usersApiSlice';
import axios from 'axios';


const Users = () => {

    const [show, setShow] = useState(false);

    const dispatch = useDispatch();
    const { users } = useSelector((state)=>state.auth);
    const [isEdit, setEdit] = useState(false);
    const [email, setEmail] = useState("");
    const [_id, setId] = useState("");

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


    const handleEdit = (email) => {

        const fetchData = async () => {
            try {
              const response = await axios.post('/api/users/find', {email});
              console.log('User : ',response.data[0].balance);
              setUserInfo(response.data[0]);
              setImage(response.data[0].avatar);
              setUsername(response.data[0].username);
              setReferral_link(response.data[0].referral_link);
              
            } catch (error) {
              console.error(error.message);
              logoutHandler();
            };
          };
        
        fetchData();

        setEdit(true);
        // setEmail(email);
        // console.log(email);

    }

    const closeSidebar = () => {
        setEdit(false);
    }

    const [userInfo, setUserInfo] = useState({});

    const [image, setImage] = useState("");
    const inputFileRef = createRef(null);
    // const [newImage,setNewImage]=useState(null);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [referral_link, setReferral_link]= useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [updateProfile, { isLoading }] = useUpdateUserMutation();
    const [isUpdate, setUpdate] = useState(false);

    // const dispatch = useDispatch();
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

    const handleUsername = (e) => {
        e.preventDefault();
        setUsername(e.target.value);
        setUpdate(true);
    }

    const handleLink = (e) => {
        e.preventDefault();
        setReferral_link(e.target.value);
        setUpdate(true);
    }

    const handleNewPassword= (e) => {
        e.preventDefault();
        setNewPassword(e.target.value);
        setUpdate(true);
    }

    const handleConfirmPassword= (e) => {
        e.preventDefault();
        setConfirmPassword(e.target.value);
        setUpdate(true);
    }
  
    const handleOnChange = async(event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
  
      if (file) {
        reader.readAsDataURL(file);
      }
      setUpdate(true);
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        if(newPassword!=confirmPassword){
            toast.error('Do not match password', {autoClose: 3000, hideProgressBar: true, pauseOnHover: false, closeOnClick: true, theme: "dark",});
            return;
        }

        if(isUpdate){
            try {
              console.log(userInfo._id, username, referral_link, newPassword);
              axios
              .post("/api/users/force", {
                _id : userInfo._id,
                username: username,
                referral_link : referral_link,
                newPassword: newPassword,
                avatar : image,
              })
              .then( res => {
                  axios
                  .get("/api/users/allusers")
                  .then( res => {
                      dispatch(setUsers({ ...res.data }));

                      toast.success('Profile updated successfully', {autoClose: 3000, hideProgressBar: true, pauseOnHover: false, closeOnClick: true, theme: "dark",});
                      setPassword("");
                      setNewPassword("");
                      setConfirmPassword("");
                      setUpdate(false);
                      setEdit(false);
                      
                  })
                  .catch(err => {
                      toast.error(err?.data?.message || err.error, {autoClose: 3000, hideProgressBar: true, pauseOnHover: false, closeOnClick: true, theme: "dark",});
                      console.log(err);
                  });
              })
              .catch(err => {
                  toast.error(err?.data?.message || err.error, {autoClose: 3000, hideProgressBar: true, pauseOnHover: false, closeOnClick: true, theme: "dark",});
                  console.log(err);
              });

            } catch (err) {
              toast.error(err?.data?.message || err.error, {autoClose: 3000, hideProgressBar: true, pauseOnHover: false, closeOnClick: true, theme: "dark",});
            }
        }

    };

    return (
        <div className='dark:text-white h-screen w-full'>
             { show &&
            <ConfirmDialog accept={accept} show={show} handleShow={setShow} title='Delete User' content='Do you want to delete this user?' confirm='Delete' confirmColor='red'/> }
            <ToastContainer />
            <div className="col-span-12">
                <div className="overflow-auto lg:overflow-visible ">
                    <table className="table text-gray-400 border-collapse space-y-6 mx-auto text-sm mt-16">
                        <thead className="bg-black text-slate-400">
                            <div>
                                <tr>
                                    <th className="p-3 w-60 text-center">User</th>
                                    <th className="p-3 w-60 text-left hidden lg:block">Email</th>
                                    <th className="p-3 w-16 text-left hidden xs:table-cell">Balance</th>
                                    <th className="p-3  text-left hidden sm:table-cell">Cycle</th>
                                    <th className="p-3 w-28 text-left hidden md:table-cell">Status</th>
                                    <th className="p-3 w-16 text-left">Action</th>
                                </tr>
                            </div>
                        </thead>

                        <tbody className="font-semibold font-sans text-md text-slate-300">
                            <div className=" overflow-y-auto h-[60vh]">
                                {Object.values(users).map((user, index) => (
                                    <tr key={index} className="bg-gray-900 hover:bg-gray-700 cursor-default ">
                                        <td className="p-3 w-60">
                                            <div className="flex">
                                                {user.avatar?<img className="rounded-full h-12 w-12  object-cover" src={user.avatar} alt="unsplash image" />:<img className="rounded-full h-12 w-12  object-cover" src={Avatar00} alt="unsplash image" />}
                                                <div className="ml-8 my-auto">
                                                    <div>{user.username}</div>
                                                    <div className="text-gray-300 block lg:hidden">{user.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-3 w-60 hidden lg:table-cell">
                                            {user.email}
                                        </td>
                                        <td className="p-3 w-16 font-bold text-cyan-400 hidden xs:table-cell">
                                            ${user.balance}
                                        </td>
                                        <td className="p-3 hidden sm:table-cell">
                                            Cycle {user.cycle}
                                        </td>
                                        <td className="p-3 w-28 hidden md:table-cell">
                                            {user.state==1 &&<span className="bg-slate-400 text-gray-50 rounded-md px-2">Inactivate</span>}
                                            {user.state==2 &&<span className="bg-green-400 text-gray-50 rounded-md px-2">In progress</span>}
                                            {user.state==3 &&<span className="bg-yellow-400 text-white rounded-md px-2">Rewarded</span>}
                                            {user.state>3 &&<span className="bg-blue-400 text-gray-50 rounded-md px-2">Completed</span>}
                                        </td>
                                        <td className="p-3 w-16">
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
                            </div>
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
                    <div className='xs:w-[400px] w-[340px] mx-auto bg-gray-900 p-8 overflow-auto'>
                        <a
                            onClick={closeSidebar}
                            className="absolute top-2 right-2 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center active:bg-gray-300 focus:outline-none ml-6 hover:bg-gray-200 hover:text-gray-800"
                        >
                            <HiX className="w-5 h-5" />
                        </a>
                        <form className={` ${isEdit? '' : 'hidden'}`} onSubmit={handleUpdateProfile}>
                            <h2 className='text-4xl dark:text-white font-bold text-center'>Edit User</h2>
                            <div className='w-full mx-auto'>
                                <div className="relative mt-8">
                                    <input
                                        ref={inputFileRef}
                                        accept="image/*"
                                        hidden
                                        id="avatar-image-upload"
                                        type="file"
                                        onChange={handleOnChange}
                                    />
                                    <label htmlFor="avatar-image-upload">
                                        {image?<img  src={image}  className="relative w-36 h-36 ml-auto mr-auto rounded-full opacity-95 hover:cursor-pointer hover:scale-110 z-10" alt="Avatar"/>
                                        :(userInfo.avatar?<img  src={userInfo.avatar}  className="relative w-36 h-36 ml-auto mr-auto rounded-full opacity-95 hover:cursor-pointer hover:scale-110 z-10" alt="Avatar"/>:<img  src={Avatar}  className="relative w-36 h-36 ml-auto mr-auto rounded-full opacity-95 hover:cursor-pointer hover:scale-110 z-10" alt="Avatar"/>)}
                                        {/* <img  src={Avatar}  className="relative w-36 ml-auto mr-auto rounded-full opacity-80 hover:cursor-pointer hover:scale-110 z-10" alt="Avatar"/> */}
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer z-10">
                                            <AiOutlineCloudUpload className='w-10 h-10 text-white'/>
                                        </div>
                                    </label>
                                </div>
                                <div className='mt-8 space-y-4'>
                                    <div className='flex px-4'>
                                        <label htmlFor='username' className='w-[40%] text-md font-mono my-auto'>User Name *</label>
                                        <input type='text' id='username' placeholder='username' value={username} className='text-gray-900 text-md font-mono w-[60%] rounded-lg p-2.5 dark:bg-slate-700 dark:border-gray-400  dark:text-cyan-400 font-bold' onChange={handleUsername} required></input>                
                                    </div>
                                    <div className='flex px-4'>
                                        <label htmlFor='email' className='w-[40%] text-md font-mono my-auto'>Email *</label>
                                        <input type='text' id='email' value={userInfo.email} className='text-gray-900 text-md font-mono w-[60%] rounded-lg p-2.5 dark:bg-slate-700 dark:border-gray-400  dark:text-cyan-500 cursor-not-allowed font-bold focus:outline-none' readOnly></input>                
                                    </div>
                                    <div className='flex px-4'>
                                        <label htmlFor='referral_link' className='w-[40%] text-md font-mono my-auto'>Referal Link</label>
                                        <input type='text' id='referral_link' placeholder='referral link' value={referral_link} className='text-gray-900 text-md font-mono w-[60%] rounded-lg p-2.5 dark:bg-slate-700 dark:border-gray-400 dark:text-cyan-400 font-bold' onChange={handleLink}></input> 
                                    </div>
                                    <div className='flex px-4'>
                                        <label htmlFor='newPassword' className='w-[40%] text-md font-mono my-auto'>New Password</label>
                                        <input type='password' id='newPassword' placeholder='password' value={newPassword} onChange={handleNewPassword} className='text-gray-900 text-md font-mono w-[60%] rounded-lg p-2.5 dark:bg-slate-700 dark:border-gray-400  dark:text-cyan-400 font-bold'></input>                
                                    </div>
                                    <div className='flex px-4'>
                                        <label htmlFor='confirmPassword' className='w-[40%] text-md font-mono my-auto'>Retype Password</label>
                                        <input type='password' id='confirmPassword' placeholder='password' value={confirmPassword} onChange={handleConfirmPassword} className='text-gray-900 text-md font-mono w-[60%] rounded-lg p-2.5 dark:bg-slate-700 dark:border-gray-400  dark:text-cyan-400 font-bold'></input>                
                                    </div>
                                </div>
                                <div className='mt-12 flex'>
                                    {isUpdate?<button className='w-44 text-center mx-auto p-2 bg-cyan-500 hover:text-white text-slate-200 rounded-xl text-3xl font-bold' onClick={handleUpdateProfile}>UPDATE</button>
                                    : <button className='w-44 text-center mx-auto p-2 bg-slate-400 hover:text-white text-slate-200 rounded-xl text-3xl font-bold' onClick={()=>{return;}}>UPDATE</button>}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>	
        </div>
    );
};

export default Users;

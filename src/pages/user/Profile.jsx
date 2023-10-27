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


const Profile = () => {

    const { userInfo } = useSelector((state)=>state.auth);
    const [image, setImage] = useState(userInfo.avatar);
    const inputFileRef = createRef(null);
    // const [newImage,setNewImage]=useState(null);

    const [username, setUsername] = useState(userInfo.username);
    const [password, setPassword] = useState("");
    const [referral_link, setReferral_link]= useState(userInfo.referral_link);
    const link = userInfo.referral_link;
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [updateProfile, { isLoading }] = useUpdateUserMutation();
    const [isUpdate, setUpdate] = useState(false);

    const dispatch = useDispatch();

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

    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
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
    //   setNewImage(file);
      setUpdate(true);
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        // console.log((!newPassword^!password)&&(!password^!confirmPassword));
        if((!password^!newPassword)) {
            toast.error('Check Passwork Field!', {autoClose: 2000, hideProgressBar: true, pauseOnHover: false, closeOnClick: true, theme: "dark",});
            return;
        } else if(newPassword!=confirmPassword){
            toast.error('Do not match password', {autoClose: 3000, hideProgressBar: true, pauseOnHover: false, closeOnClick: true, theme: "dark",});
            return;
        } else if(!validatePassword(newPassword)&&newPassword) {
            toast.error('Must contain 8 characters including special characters and numbers', {autoClose: 3000, hideProgressBar: true, pauseOnHover: false, closeOnClick: true, theme: "dark",});
            return;
        }

        if(image||(password&&newPassword)||(username!=userInfo.username)){
            try {
            const res = await updateProfile({
                _id : userInfo._id,
                username: username,
                referral_link : referral_link,
                password: password,
                newPassword: newPassword,
                avatar : image,
              }).unwrap();

            console.log(res);
            
            dispatch(setCredentials({ ...res }));
            console.log(userInfo.username);
            toast.success('Profile updated successfully', {autoClose: 3000, hideProgressBar: true, pauseOnHover: false, closeOnClick: true, theme: "dark",});
            setPassword("");
            setNewPassword("");
            setConfirmPassword("");
            setUpdate(false);
        } catch (err) {
              toast.error(err?.data?.message || err.error, {autoClose: 3000, hideProgressBar: true, pauseOnHover: false, closeOnClick: true, theme: "dark",});
            }
        }

    };

    const validatePassword = (password) => {
        // Check if the password is empty
        if (!password) {
            return false;
        }
        
        // Check if the password is at least 8 characters long
        if (password.length < 8) {
            return false;
        }
        
        // Check if the password contains at least one uppercase letter
        // if (!/[A-Z]/.test(password)) {
        // 	return false;
        // }
        
        // Check if the password contains at least one lowercase letter
        if (!/[a-z]/.test(password)) {
            return false;
        }
        
        // Check if the password contains at least one number
        if (!/[0-9]/.test(password)) {
            return false;
        }
    
        if (!/[!@#$%^&*]/.test(password)) {
            return false;
        }
        
        return true;
        };

    return (
    <div className='dark:text-white justify-center items-center h-full'>
        <div className='sm:w-[60%] xs:w-[60%] w-full mx-auto sm:mt-10 mt-16'>
            <div className="relative">
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
            <ToastContainer />
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
                    {link?<input type='text' id='referral_link' value={referral_link} className='text-gray-900 text-md font-mono w-[60%] rounded-lg p-2.5 dark:bg-slate-700 dark:border-gray-400 cursor-not-allowed  dark:text-cyan-500 font-bold' readOnly></input>                
                    : <input type='text' id='referral_link' placeholder='referral link' value={referral_link} className='text-gray-900 text-md font-mono w-[60%] rounded-lg p-2.5 dark:bg-slate-700 dark:border-gray-400 dark:text-cyan-400 font-bold' onChange={handleLink}></input> }
                    </div>
                <div className='flex px-4'>
                    <label htmlFor='password' className='w-[40%] text-md font-mono my-auto'>Current Password</label>
                    <input type='password' id='password' placeholder='password' value={password} onChange={handlePassword} className='text-gray-900 text-md font-mono w-[60%] rounded-lg p-2.5 dark:bg-slate-700 dark:border-gray-400  dark:text-cyan-400 font-bold'></input>                
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
    </div>
    );
}

export default Profile

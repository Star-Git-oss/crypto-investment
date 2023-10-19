import React from 'react'
import Avatar from '../../assets/avatar12.png'
import { useState } from 'react';
import { createRef } from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Profile = () => {

    const [image, setImage] = useState(null);
    const inputFileRef = createRef(null);
    const [newImage,setNewImage]=useState(null)
  
    
    const handleOnChange = async(event) => {
  
      const file = event.target.files[0];
      
      const reader = new FileReader();
  
      reader.onload = () => {
        setImage(reader.result);
      };
  
      if (file) {
        reader.readAsDataURL(file);
      }
      setNewImage(file)
    };

    return (
    <div className='dark:text-white'>
        <div className='w-[60%] mx-auto mt-10'>
            <div className="relative my-4">
                <input
                    ref={inputFileRef}
                    accept="image/*"
                    hidden
                    id="avatar-image-upload"
                    type="file"
                    onChange={handleOnChange}
                />
                <label htmlFor="avatar-image-upload">
                    <img  src={Avatar}  className="relative w-36 ml-auto mr-auto rounded-full opacity-80 hover:cursor-pointer hover:scale-110 z-10" alt="Avatar"/>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer">
                    <AiOutlineCloudUpload className='w-10 h-10 text-white'/>
                    </div>
                </label>
            </div>
            <div className='mt-16 space-y-6'>
                <div className='flex px-4'>
                    <label htmlFor='username' className='w-[40%] text-md font-mono my-auto'>User Name</label>
                    <input type='text' id='username' placeholder='username' className='text-gray-900 text-md font-mono w-[60%] rounded-lg p-2.5 dark:bg-slate-700 dark:border-gray-400  dark:text-cyan-400 font-bold'></input>                
                </div>
                <div className='flex px-4'>
                    <label htmlFor='email' className='w-[40%] text-md font-mono my-auto'>Email</label>
                    <input type='text' id='email' value={'larans7277@gmail.com'} className='text-gray-900 text-md font-mono w-[60%] rounded-lg p-2.5 dark:bg-slate-700 dark:border-gray-400  dark:text-cyan-400 font-bold focus:outline-none' readOnly></input>                
                </div>
                <div className='flex px-4'>
                    <label htmlFor='depositAmount' className='w-[40%] text-md font-mono my-auto'>Current Password</label>
                    <input type='password' id='depositAmount' placeholder='password' className='text-gray-900 text-md font-mono w-[60%] rounded-lg p-2.5 dark:bg-slate-700 dark:border-gray-400  dark:text-cyan-400 font-bold'></input>                
                </div>
                <div className='flex px-4'>
                    <label htmlFor='depositAmount' className='w-[40%] text-md font-mono my-auto'>New Password</label>
                    <input type='password' id='depositAmount' placeholder='password' className='text-gray-900 text-md font-mono w-[60%] rounded-lg p-2.5 dark:bg-slate-700 dark:border-gray-400  dark:text-cyan-400 font-bold'></input>                
                </div>
            </div>
            <div className='mt-16 flex'>
              <button className='w-44 text-center mx-auto p-2 bg-cyan-400 hover:bg-cyan-500 rounded-xl text-3xl font-bold'>SAVE</button>
            </div>

        </div>
    </div>
    );
}

export default Profile

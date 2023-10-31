import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Avatar00 from '../../assets/avatar12.png';
import { setUsers } from '../../slices/authSlice';

const Investment = () => {

    const { userInfo } = useSelector((state)=>state.auth);
    const { users } = useSelector((state)=>state.auth);
    const [history, setHistory] = useState();
    const [progressShow, setProgressShow] = useState();

    const dispatch = useDispatch();

    const [isActive, setIsActive] = useState(true);

    const handleCycleTab = () => {
      setIsActive(!isActive);
    };

    const handleDepositTab = () => {
        setIsActive(!isActive);
        console.log('Deposit History : ',history);
    };

    useEffect(() => {
        axios
        .get("/api/history/progress")
        .then( res => {
            setProgressShow(res.data.progressShow)
            console.log("All Progress founded Successfully!", res.data.progressShow);
        })
        .catch(err => {
            console.log(err);
        });

      }, []);

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

      useEffect(() => {
        axios
        .get("/api/history/deposit")
        .then( res => {
            console.log("History founded Successfully!", res.data);
            setHistory(res.data.depositHis);
        })
        .catch(err => {
            console.log(err);
        });
      }, []);
      
    return (
    <div className='dark:text-white h-screen w-full'>
        <div className='flex sm:mt-10 mt-16'>
            <button
            className={`w-[40%] p-2 rounded-l-lg font-semibold text-lg ${
                isActive ? "bg-slate-700 shadow-md shadow-cyan-400 text-green-400" : "bg-slate-700 shadow-md shadow-black"
            } ml-auto`}
            onClick={handleCycleTab}
            >
            In Cycle
            </button>
            <button
            className={`w-[40%] p-2 rounded-r-lg font-semibold text-lg ${
                !isActive ? "bg-slate-700  shadow-md shadow-cyan-400 text-green-400" : "bg-slate-700 shadow-md shadow-black"
            } mr-auto`}
            onClick={handleDepositTab}
            >
            Deposit History
            </button>
        </div>
        
        <div className={`${isActive?'':'hidden'}`}>
            <div className='w-[80%] mx-auto mt-12'>
                <div className="col-span-12">
                    <div className="overflow-auto lg:overflow-visible ">
                        <table className="table text-gray-400 border-collapse space-y-6 mx-auto text-sm mt-16">
                            <thead className="bg-black text-slate-400">
                                <div>
                                    <tr>
                                        <th className="p-3 w-24 xs:w-60 text-center">User</th>
                                        <th className="p-3 w-60 text-left hidden lg:block">Email</th>
                                        <th className="p-3 w-96 text-left">Progress</th>
                                    </tr>
                                </div>
                            </thead>
                            <tbody className="font-semibold font-sans text-md text-slate-300">
                                <div className=' h-[60vh] overflow-y-auto'>
                                    {progressShow && progressShow.map((user, index) => (
                                        <tr key={index} className="bg-gray-900 hover:bg-gray-700 cursor-default ">
                                            <td className="p-3 w-24 xs:w-60">
                                                <div className="flex">
                                                    {user.avatar?<img className="rounded-full h-12 w-12  object-cover" src={user.avatar} alt="unsplash image" />:<img className="rounded-full h-12 w-12  object-cover" src={Avatar00} alt="unsplash image" />}
                                                    <div className="ml-8 my-auto  hidden xs:table-cell">
                                                        <div>{user.username}</div>
                                                        <div className="text-gray-300 block lg:hidden">{user.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-3 w-60 hidden lg:table-cell">
                                                {user.email}
                                            </td>
                                            <td className="p-3 w-96 font-bold text-cyan-400">
                                                {(user.progress<=25) &&
                                                    <div className="w-full h-2 bg-slate-500 overflow-hidden"  title={`${user.progress}%`}>
                                                        <div style={{ width: `${user.progress}%`}} className='h-full bg-red-400'></div>
                                                    </div>
                                                }
                                                {(user.progress<=50) && (user.progress>25) &&
                                                    <div className="w-full h-2 bg-slate-500 overflow-hidden"  title={`${user.progress}%`}>
                                                        <div style={{ width: `${user.progress}%`}} className='h-full bg-yellow-400'></div>
                                                    </div>
                                                }
                                                {(user.progress>50) &&
                                                    <div className="w-full h-2 bg-slate-500 overflow-hidden"  title={`${user.progress}%`}>
                                                        <div style={{ width: `${user.progress}%`}} className='h-full bg-cyan-400'></div>
                                                    </div>
                                                }
                                            </td>
                                        </tr>
                                    ))}
                                </div>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div className={`${isActive?'hidden':''}`}>
            <div className='w-[80%] mx-auto mt-8'>
                <div className="col-span-12">
                    <div className="overflow-auto lg:overflow-visible ">
                        <table className="table text-gray-400 border-collapse space-y-6 mx-auto text-sm mt-16">
                            <thead className="bg-black text-slate-400">
                                <div>
                                    <tr>
                                        <th className="p-3 w-24 xs:w-60 text-center">User</th>
                                        <th className="p-3 w-60 text-left hidden lg:block">Email</th>
                                        <th className="p-3 w-16 xs:w-32 text-left">Balance</th>
                                        <th className="p-3 w-32 text-left ">Date</th>
                                    </tr>
                                </div>
                            </thead>

                            <tbody className="font-semibold font-sans text-md text-slate-300">
                                <div className=' overflow-y-auto h-[60vh]'>
                                    {history && history.map((user, index) => (
                                        <tr key={index} className="bg-gray-900 hover:bg-gray-700 cursor-default ">
                                            <td className="p-3 w-24 xs:w-60">
                                                <div className="flex">
                                                    {user.avatar?<img className="rounded-full h-12 w-12  object-cover" src={user.avatar} alt="unsplash image" />:<img className="rounded-full h-12 w-12  object-cover" src={Avatar00} alt="unsplash image" />}
                                                    <div className="ml-8 my-auto hidden xs:table-cell">
                                                        <div>{user.username}</div>
                                                        <div className="text-gray-300 block lg:hidden">{user.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-3 w-60 hidden lg:table-cell">
                                                {user.email}
                                            </td>
                                            <td className="p-3 w-16 xs:w-32 font-bold text-cyan-400">
                                                ${user.balance}
                                            </td>
                                            <td className="p-3 w-32">
                                                {user.date}
                                            </td>
                                        </tr>
                                    ))}
                                </div>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer />

    </div>
    );
}

export default Investment

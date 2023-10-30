import React from 'react'
import EarnIco from '../../assets/total-earn.c13de7d2.svg'
import { FaUsers } from 'react-icons/fa'
import Node from '../../components/admin/Node';
import Avatar00 from '../../assets/avatar12.png'
import TaskBar from '../../components/admin/TaskBar';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setCredentials, setNodes } from '../../slices/authSlice';
import axios from 'axios';

const Admin = () => {

    const [dashboardInfo, setDashboardInfo] = useState();

    useEffect(() => {
        axios
        .get("/api/users/dashboard")
        .then( res => {
            setDashboardInfo(res.data)
            console.log("All dashboard Info founded Successfully!", res.data);
        })
        .catch(err => {
            console.log(err);
        });

    }, []);

    return (
    <div className='dark:text-white h-screen w-full'>
        { dashboardInfo &&
        <div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-16'>
                <div className='mx-2 p-4 bg-slate-700 rounded-lg shadow-md shadow-black'>
                    <div className="flex items-center space-x-[7px]">
                        <div className="icon"><span><img alt="icon" src={EarnIco}/></span></div><span className="text-lg font-semibold text-bgray-900 dark:text-white">Balance</span>
                    </div>
                    <div className="flex items-end justify-between">
                        <div className="flex-1">
                            <p className="text-3xl font-bold leading-[48px] text-cyan-400">${dashboardInfo.balance}</p>
                            {/* <div className="flex items-center space-x-1">
                                <span><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.4318 0.522827L12.4446 0.522827L8.55575 0.522827L7.56859 0.522827C6.28227 0.522827 5.48082 1.91818 6.12896 3.02928L9.06056 8.05489C9.7037 9.1574 11.2967 9.1574 11.9398 8.05489L14.8714 3.02928C15.5196 1.91818 14.7181 0.522828 13.4318 0.522827Z" fill="#22C55E"></path><path opacity="0.4" d="M2.16878 13.0485L3.15594 13.0485L7.04483 13.0485L8.03199 13.0485C9.31831 13.0485 10.1198 11.6531 9.47163 10.542L6.54002 5.5164C5.89689 4.41389 4.30389 4.41389 3.66076 5.5164L0.729153 10.542C0.0810147 11.6531 0.882466 13.0485 2.16878 13.0485Z" fill="#22C55E"></path></svg></span>
                                <span className="text-sm font-medium text-success-300">+ 3.5%</span>
                                <span className="text-sm font-medium text-bgray-700 dark:text-bgray-50">from last week</span>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className='mx-2 p-4 bg-slate-700 rounded-lg shadow-md shadow-black'>
                    <div className="flex items-center space-x-[7px]">
                        <div className="icon"><span><img alt="icon" src={EarnIco}/></span></div><span className="text-lg font-semibold text-bgray-900 dark:text-white">Deposit</span>
                    </div>
                    <div className="flex items-end justify-between">
                        <div className="flex-1">
                            <p className="text-3xl font-bold leading-[48px] text-cyan-400">${dashboardInfo.deposit}</p>
                        </div>
                    </div>
                </div>
                <div className='mx-2 p-4 bg-slate-700 rounded-lg shadow-md shadow-black'>
                    <div className="flex items-center space-x-[7px]">
                        <div className="icon"><span><img alt="icon" src={EarnIco}/></span></div><span className="text-lg font-semibold text-bgray-900 dark:text-white">Withdraw</span>
                    </div>
                    <div className="flex items-end justify-between">
                        <div className="flex-1">
                            <p className="text-3xl font-bold leading-[48px] text-cyan-400">${dashboardInfo.withdraw}</p>
                        </div>
                    </div>
                </div>
                <div className='mx-2 p-4 bg-slate-700 rounded-lg shadow-md shadow-black'>
                    <div className="flex items-center space-x-[7px]">
                        <div className="icon"><span><img alt="icon" src={EarnIco}/></span></div><span className="text-lg font-semibold text-bgray-900 dark:text-white">In Cycle</span>
                    </div>
                    <div className="flex items-end justify-between">
                        <div className="flex-1">
                            <p className="text-3xl font-bold leading-[48px] text-cyan-400">${dashboardInfo.balanceInCycle}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-8'>
                <div className='mx-2 p-4 bg-slate-700 rounded-lg shadow-md shadow-black'>
                    <div className="flex items-center space-x-[7px]">
                        <div className="icon">
                            <svg viewBox="0 0 640 512" fill="currentColor" className='w-8 fill-green-400'><path d="M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80-35.8 80-80 80zm368 0c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7-1.3 7.2-1.9 14.7-1.9 22.3 0 38.2 16.8 72.5 43.3 96H21.3C9.6 320 0 310.4 0 298.7zM405.3 320h-.7c26.6-23.5 43.3-57.8 43.3-96 0-7.6-.7-15-1.9-22.3 13.6-6.3 28.7-9.7 44.6-9.7h42.7c58.9 0 106.7 47.8 106.7 106.7 0 11.8-9.6 21.3-21.3 21.3H405.3zm10.7-96c0 53-43 96-96 96s-96-43-96-96 43-96 96-96 96 43 96 96zM128 485.3c0-73.6 59.7-133.3 133.3-133.3h117.4c73.6 0 133.3 59.7 133.3 133.3 0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" /></svg>
                        </div>
                        <span className="text-lg font-semibold text-bgray-900 dark:text-white">Total Users</span>
                    </div>
                    <div className="flex items-end justify-between">
                        <div className="flex-1">
                            <p className="text-3xl font-bold leading-[48px] text-cyan-400">{dashboardInfo.totalUsers}</p>
                        </div>
                    </div>
                </div>
                <div className='mx-2 p-4 bg-slate-700 rounded-lg shadow-md shadow-black'>
                    <div className="flex items-center space-x-[7px]">
                        <div className="icon">
                            <svg viewBox="0 0 640 512" fill="currentColor" className='w-7 fill-green-400'><path d="M352 128c0 70.7-57.3 128-128 128S96 198.7 96 128 153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4c98.5 0 178.3 79.8 178.3 178.3 0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM625 177L497 305c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                        </div>
                        <span className="text-lg font-semibold text-bgray-900 dark:text-white">Invested Users</span>
                    </div>
                    <div className="flex items-end justify-between">
                        <div className="flex-1">
                            <p className="text-3xl font-bold leading-[48px] text-cyan-400">{dashboardInfo.investedUsers}</p>
                        </div>
                    </div>
                </div>
                <div className='mx-2 p-4 bg-slate-700 rounded-lg shadow-md shadow-black'>
                    <div className="flex items-center space-x-[7px]">
                        <div className="icon">
                            <svg viewBox="0 0 24 24" fill="currentColor" className='w-7 fill-green-400'><path d="M23.235 6.825v11.997a.924.924 0 01-.419.725l-.393.235c-1.961 1.135-3.687 2.134-5.431 3.14V9.948L5.759 3.454C7.703 2.338 9.64 1.211 11.586.1a.927.927 0 01.837 0l10.81 6.243v.482zm-8.741 4.562A9631.706 9631.706 0 006.8 6.943a.94.94 0 00-.837 0c-1.733 1.001-3.467 2-5.199 3.004l8.113 4.684V24c1.732-.999 3.46-2.006 5.197-2.995a.927.927 0 00.419-.724zM.765 19.317l5.613 3.241V16.07z" /></svg>
                        </div>
                        <span className="text-lg font-semibold text-bgray-900 dark:text-white">Users in Cycle</span>
                    </div>
                    <div className="flex items-end justify-between">
                        <div className="flex-1">
                            <p className="text-3xl font-bold leading-[48px] text-cyan-400">{dashboardInfo.usersInCycle}</p>
                        </div>
                    </div>
                </div>
                <div className='mx-2 p-4 bg-slate-700 rounded-lg shadow-md shadow-black'>
                    <div className="flex items-center space-x-[7px]">
                        <div className="icon">
                            <svg viewBox="0 0 384 512" fill="currentColor" className='w-6 fill-green-400'><path d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7l19.3 9.7c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7l-9.7 19.3c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2.8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1.4 14.2-1.5 20.1-5.4l17.9-11.7zM272 192c0-44.2-35.8-80-80-80s-80 35.8-80 80 35.8 80 80 80 80-35.8 80-80zM1.3 441.8l43.1-102.5c.2.1.3.2.4.4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7.2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2l-32.2-49.3-56.1 8.3c-5.7.8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1.4-.2.7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2.2-.3.4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z" /></svg>
                        </div>
                        <span className="text-lg font-semibold text-bgray-900 dark:text-white">Rewarded Users</span>
                    </div>
                    <div className="flex items-end justify-between">
                        <div className="flex-1">
                            <p className="text-3xl font-bold leading-[48px] text-cyan-400">{dashboardInfo.rewardedUsers}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        }
    </div>
    );
}

export default Admin

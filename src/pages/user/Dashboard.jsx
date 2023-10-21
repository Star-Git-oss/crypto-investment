import React from 'react'
import Node from '../../components/user/Node';
import Avatar00 from '../../assets/avatar12.png'

import { useSelector } from 'react-redux';
const Dashboard = () => {
    
    const { userInfo } = useSelector((state)=>state.auth);

    return (
    <div className='dark:text-white w-full'>
        <div className='h-32 bg-slate-700 rounded-xl'>
            <div className="flex">
                <div>
                    <div className='pt-4 px-4 text-4xl font-bold text-cyan-400'>CYCLE 1</div>
                    <div className='p-4 text-lg font-semibold text-cyan-400'>Invite just 2 friends and get reward $250</div>
                </div>
                <button className='w-52 h-20 my-auto mr-8 ml-auto rounded-xl text-4xl font-bold bg-cyan-500 hover:text-white text-slate-200'>START</button>
            </div>

            {/* <div className="relative">
                <div className="w-full h-6 bg-slate-500 rounded-lg -my-1 overflow-hidden">
                    <div className="h-full bg-cyan-400 w-[50%]"></div>
                    <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white">50% (2 Invitees)</span>
                </div>
            </div> */}
        </div>

        <div >
            <div className='w-full '>
                <Node avatar={Avatar00} username={userInfo.username} email={userInfo.email} active={true}/>
            </div>
            <div className=' grid grid-cols-2'>
                <div className=' col-span-1'>
                    <Node avatar={Avatar00} username={'User'} email={'larans7277@gmail.com'}/>
                </div>
                <div className=' col-span-1'>
                    <Node avatar={Avatar00} username={'User'} email={'larans7277@gmail.com'}/>
                </div>
            </div>
            <div className='flex'>
                <div className='w-1/2 grid grid-cols-2'>
                    <div className=' col-span-1 ml-4'>
                        <Node avatar={Avatar00} username={'User'} email={'larans7277@gmail.com'}/>
                    </div>
                    <div className=' col-span-1 mr-4'>
                        <Node avatar={Avatar00} username={'User'} email={'larans7277@gmail.com'}/>
                    </div>
                </div>
                <div className=' w-1/2 grid grid-cols-2'>
                    <div className=' col-span-1 ml-4'>
                        <Node avatar={Avatar00} username={'User'} email={'larans7277@gmail.com'}/>
                    </div>
                    <div className=' col-span-1 mr-4'>
                        <Node avatar={Avatar00} username={'User'} email={'larans7277@gmail.com'}/>
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
}

export default Dashboard

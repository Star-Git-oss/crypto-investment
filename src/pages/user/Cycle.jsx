import React from "react";
import { Progress } from 'flowbite-react';
import { Link } from "react-router-dom";

const Cycle = () => {
    
    return (
    <div className='dark:text-white'>

        <div className='h-32 bg-slate-700 rounded-xl'>
            <div className="flex">
                <div>
                    <div className='pt-4 px-4 text-4xl font-bold text-cyan-400'>CYCLE 1</div>
                    <div className='p-4 text-lg font-semibold text-cyan-400'>Invite just 2 friends and get reward $250</div>
                </div>
                <button className='w-52 h-20 my-auto mr-8 ml-auto rounded-xl text-4xl font-bold bg-cyan-500 hover:text-white text-slate-200'>BUY</button>
            </div>

            {/* <div className="relative">
                <div className="w-full h-6 bg-slate-500 rounded-lg -my-1 overflow-hidden">
                    <div className="h-full bg-cyan-400 w-[50%]"></div>
                    <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white">50% (2 Invitees)</span>
                </div>
            </div> */}
        </div>

         <Link to={'/dashboard'}>
            <div className='h-32 bg-slate-700 rounded-xl hover:scale-[102%] mt-10'>
                <div className="flex">
                    <div>
                        <div className='pt-4 px-4 text-4xl font-bold text-cyan-400'>CYCLE 1</div>
                        <div className='p-4 text-lg font-semibold text-cyan-400'>Invite just 2 friends and get reward $250</div>
                    </div>
                    <button className='w-52 h-20 my-auto mr-8 ml-auto rounded-xl text-2xl font-bold'>COMPLETED <div className="text-yellow-400 animate-bounce">+$250 REWARDS</div></button>
                </div>

                {/* <div className="relative">
                    <div className="w-full h-6 bg-slate-500 rounded-lg -my-1 overflow-hidden">
                        <div className="h-full bg-cyan-400 w-[50%]"></div>
                        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white">50% (2 Invitees)</span>
                    </div>
                </div> */}
            </div>
        </Link>

        <Link to={'/dashboard'}>
        <div className='h-32 bg-slate-700 rounded-xl mt-10 hover:scale-[102%]'>

            <div className="flex">
                <div>
                    <div className='pt-4 px-4 text-4xl font-bold text-cyan-400'>CYCLE 2</div>
                    <div className='p-4 text-lg font-semibold text-cyan-400'>Invite just 2 friends and get reward $275</div>
                </div>
                <button className='w-52 h-20 my-auto mr-8 ml-auto  rounded-xl text-2xl font-bold text-green-400'>IN PROGRESS</button>
            </div>

            <div className="relative">
                <div className="w-full h-6 bg-slate-500 rounded-lg -my-1 overflow-hidden">
                    <div className="h-full bg-cyan-400 w-[25%]"></div>
                    <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white">25% (1 Invitee)</span>
                </div>
            </div>
        </div>
        </Link>

        <div className='h-32 bg-slate-700 rounded-xl mt-10'>
            <div className="flex">
                <div>
                    <div className='pt-4 px-4 text-4xl font-bold text-slate-400'>CYCLE 3</div>
                    <div className='p-4 text-lg font-semibold text-slate-400'>Invite just 2 friends and get reward $300</div>
                </div>
                <button className='w-52 h-20 my-auto mr-8 ml-auto bg-slate-400 rounded-xl text-4xl font-bold hover:cursor-not-allowed'>BUY</button>
            </div>

            <div className="relative hidden">
                <div className="w-full h-6 bg-slate-500 rounded-lg -my-1 overflow-hidden">
                    <div className="h-full bg-slate-400 w-[0%]"></div>
                    <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white">0% (No Invitee)</span>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Cycle;

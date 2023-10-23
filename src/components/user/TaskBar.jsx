import React from "react";
import { Link } from "react-router-dom";

const TaskBar = ({cycle=1, state=1, percentage=0, getRewards, getStarted, here=""}) => {

    return (
    <div className='dark:text-white'>
        <div className="w-full bg-slate-700 rounded-xl my-10 hover:scale-[102%]">
            <div className="flex p-4">
                <div>
                    <div className=" px-8 text-4xl font-bold text-cyan-400">CYCLE {cycle}</div>
                    <div className='p-8 text-xl font-semibold text-cyan-400 hidden sm:block'>
                        {/* <div>
                            {state === 1 && cycle === 1 && 'Activate cycle and start $250 reward plan'}
                            {state === 1 && cycle === 2 && 'Activate cycle and start $275 reward plan'}
                            {state === 1 && cycle === 3 && 'Activate cycle and start $300 reward plan'}
                        </div> */}
                        <div>
                            {cycle === 1 && 'Invite just 2 friends and get reward $250'}
                            {cycle === 2 && 'Invite just 2 friends and get reward $275'}
                            {cycle === 3 && 'Invite just 2 friends and get reward $300'}
                        </div>
                    </div>
                </div>
                {state === 0 && (
                   <button className='w-52 h-20 my-auto mr-8 ml-auto bg-slate-400 rounded-xl text-4xl font-bold hover:cursor-not-allowed' >BUY</button>
                )}
                {state === 1 && (
                <button className='w-52 h-20 my-auto mr-8 ml-auto rounded-xl text-4xl font-bold bg-cyan-500 hover:text-white text-slate-200' onClick={getStarted}>
                    {here=="dashboard"?"START":"BUY"}
                </button>
                )}
                {state === 2 && (
                <button className='w-52 h-20 my-auto mr-8 ml-auto  rounded-xl text-2xl font-bold text-green-400'>IN PROGRESS</button>
                )}
                {state === 3 && (
                <button className='w-52 h-20 my-auto mr-8 ml-auto rounded-xl text-3xl font-bold bg-amber-500 hover:text-white text-slate-200' onClick={getRewards}>
                    {cycle === 1 && 'Get +$250 Rewards'}
                    {cycle === 2 && 'Get +$275 Rewards'}
                    {cycle === 3 && 'Get +$300 Rewards'}
                </button>
                )}
                {state === 4 && (
                    <button className='w-52 h-20 my-auto mr-8 ml-auto rounded-xl text-2xl font-bold'>COMPLETED
                        <div className="text-yellow-400 animate-bounce text-2xl mt-2 font-bold my-auto">
                            {cycle === 1 && '+$250 REWARDS'}
                            {cycle === 2 && '+$275 REWARDS'}
                            {cycle === 3 && '+$300 REWARDS'}
                        </div>
                    </button>
                )}
            </div>
            {state === 2 && (
            <div className="relative">
                <div className="w-full h-6 bg-slate-500 rounded-lg -my-1 overflow-hidden">
                    {/* <div className={`h-full bg-cyan-400 w-[${percentage}%]`}></div> */}
                    <div className={`h-full bg-cyan-400 ${percentage < 1 ? 'w-0' : `w-[${percentage}%]`}`}></div>
                    <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white">{percentage}%</span>
                </div>
            </div>
            )}
        </div>
    </div>
    );
};

export default TaskBar;

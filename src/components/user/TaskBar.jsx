import React from "react";
import ConfirmDialog from "../ConfirmDialog";
import { useState } from "react";

const TaskBar = ({cycle=1, state=1, percentage=0, getRewards, getStarted, here=""}) => {

    const [show, setShow] = useState(false);
    const [showRewards, setShowRewards] = useState(false);
    const accept = () => {
        getStarted();
    }

    const acceptRewards = () => {
        getRewards();
    }
     return (
    <div className='dark:text-white'>
         { show &&
            <ConfirmDialog accept={accept} show={show} handleShow={setShow} title='Start Cycle' content='Do you want to start this cycle?' confirm='Start' confirmColor='yellow'/> }
          { showRewards &&
            <ConfirmDialog accept={acceptRewards} show={showRewards} handleShow={setShowRewards} title='Get Rewarded' content='Do you want to get rewarded this cycle?' confirm='Get' confirmColor='yellow'/> }
        <div className="w-full bg-slate-700 rounded-xl my-10 hover:scale-[102%]">
            <div className="flex p-4">
                <div className="my-auto">
                    <div className="xs:px-6 items-center xs:text-4xl text-3xl font-bold text-cyan-400">CYCLE {cycle}</div>
                    <div className='p-8 text-xl font-semibold text-cyan-400 hidden sm:block'>
                        <div>
                            {cycle === 1 && 'Invite just 2 friends and get reward $250'}
                            {cycle === 2 && 'Invite just 2 friends and get reward $275'}
                            {cycle === 3 && 'Invite just 2 friends and get reward $300'}
                        </div>
                    </div>
                </div>
                {state === 0 && (
                   <button className='xs:w-52 w-36 h-20 my-auto mr-4 ml-auto bg-slate-400 rounded-xl xs:text-4xl text-3xl font-bold hover:cursor-not-allowed' >BUY</button>
                )}
                {state === 1 && (
                <button className='xs:w-52 w-36 h-20 my-auto mr-4 ml-auto rounded-xl xs:text-4xl text-3xl font-bold bg-cyan-500 hover:text-white text-slate-200' onClick={()=>{here=="dashboard"?getStarted():setShow(true);}}>
                    {here=="dashboard"?"START":"BUY"}
                </button>
                )}
                {state === 2 && (
                <button className='xs:w-48 w-40 h-20 my-auto mr-4 ml-auto rounded-xl xs:text-2xl text-xl font-bold text-green-400'>IN PROGRESS</button>
                )}
                {state === 3 && (
                <button className='xs:w-52 w-36 h-20 my-auto mr-4 ml-auto rounded-xl xs:text-2xl text-xl font-bold bg-amber-500 hover:text-white text-slate-200' onClick={()=>{here=="dashboard"?getRewards():setShowRewards(true);}}>
                    {cycle === 1 && 'Get +$250 Rewards'}
                    {cycle === 2 && 'Get +$275 Rewards'}
                    {cycle === 3 && 'Get +$300 Rewards'}
                </button>
                )}
                {state === 4 && (
                    <button className='xs:w-48 w-40 h-20 my-auto mr-4 ml-auto rounded-xl xs:text-2xl text-xl font-bold'>COMPLETED
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
                    <div style={{ width: `${percentage}%`}} className='h-full bg-cyan-400'></div>
                    <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white">{percentage}%</span>
                </div>
            </div>
            )}
        </div>
    </div>
    );
};

export default TaskBar;

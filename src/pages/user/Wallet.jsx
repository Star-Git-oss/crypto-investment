import React from 'react'
import { useState } from 'react';
import { FaHistory } from 'react-icons/fa'
// import { Tooltip } from 'flowbite-react';
import { Tooltip, Button, Typography } from '@material-tailwind/react';
const Wallet = () => {
    const [isActive, setIsActive] = useState(true);

    const handleClickDeposit = () => {
      setIsActive(!isActive);
    };

    const handleClickWithdraw = () => {
        setIsActive(!isActive);
      };

    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    const [selectedToken, setSelectedToken] = useState("USDT ERC20");

    const handleTokenChange = (event) => {
      setSelectedToken(event.target.value);
    };

      
    return (
    <div className='dark:text-white'>
        <div className='flex mt-10'>
            <button
            className={`w-[40%] p-2 rounded-l-lg font-semibold text-lg ${
                isActive ? "bg-slate-700 shadow-md shadow-cyan-400" : "bg-slate-700 shadow-md shadow-black"
            } ml-auto`}
            onClick={handleClickDeposit}
            >
            Deposit
            </button>
            <button
            className={`w-[40%] p-2 rounded-r-lg font-semibold text-lg ${
                !isActive ? "bg-slate-700  shadow-md shadow-cyan-400" : "bg-slate-700 shadow-md shadow-black"
            } mr-auto`}
            onClick={handleClickWithdraw}
            >
            Withdraw
            </button>
        </div>
        
        <div className={`${isActive?'':'hidden'}`}>
            <div className='w-[80%] mx-auto mt-24'>
                <div className='flex px-4'>
                    <label htmlFor='depositAmount' className='w-[20%] text-md font-mono my-auto'>Deposit Amount </label>
                    <input type='text' id='depositAmount' placeholder='Minium $10' className='text-gray-900 text-md font-mono w-[80%] rounded-lg p-2.5 dark:bg-slate-700 dark:border-gray-400  dark:text-cyan-400 font-bold'></input>                
                </div>
                <div className='px-4 mt-16'>
                    <div className="grid grid-cols-4 gap-2">
                        <label
                        className={`col-span-1 py-5 px-4 hover:bg-gray-900 hover:cursor-pointer rounded-2xl font-bold text-lg  ${
                            selectedToken === "USDT ERC20" ? "bg-gray-900 text-white border-2 border-cyan-400" : "bg-slate-700 shadow-md shadow-black"
                        }`}
                        >
                        <input
                            type="radio"
                            value="USDT ERC20"
                            checked={selectedToken === "USDT ERC20"}
                            onChange={handleTokenChange}
                            style={{marginRight:"0.5rem"}}
                        />
                        USDT ERC20
                        </label>
                        <label
                        className={`col-span-1 py-5 px-4 hover:bg-gray-900 hover:cursor-pointer rounded-2xl font-bold text-lg  ${
                            selectedToken === "USDT TRC20" ? "bg-gray-900 text-white border-2 border-cyan-400": " bg-slate-700 shadow-md shadow-black"
                        }`}
                        >
                        <input
                            type="radio"
                            value="USDT TRC20"
                            checked={selectedToken === "USDT TRC20"}
                            onChange={handleTokenChange}
                            style={{marginRight:"0.5rem"}}
                        />
                        USDT TRC20
                        </label>
                        <label
                        className={`col-span-1 py-5 px-4 hover:bg-gray-900 hover:cursor-pointer rounded-2xl font-bold text-lg  ${
                            selectedToken === "USDT BSC" ? "bg-gray-900 text-white border-2 border-cyan-400" : "bg-slate-700 shadow-md shadow-black"
                        }`}
                        >
                        <input
                            type="radio"
                            value="USDT BSC"
                            checked={selectedToken === "USDT BSC"}
                            onChange={handleTokenChange}
                            style={{marginRight:"0.5rem"}}
                        />
                        USDT BSC
                        </label>
                        <label
                        className={`col-span-1 py-5 px-4 hover:bg-gray-900 hover:cursor-pointer rounded-2xl font-bold text-lg  ${
                            selectedToken === "USDC" ? "bg-gray-900 text-white border-2 border-cyan-400" : "bg-slate-700 shadow-md shadow-black"
                        }`}
                        >
                        <input
                            type="radio"
                            value="USDC"
                            checked={selectedToken === "USDC"}
                            onChange={handleTokenChange}
                            style={{marginRight:"0.5rem"}}
                        />
                        USDC
                        </label>
                    </div>
                    <div className="grid grid-cols-4 mt-4 gap-2">
                        <label
                        className={`col-span-1 py-5 px-4 hover:bg-gray-900 hover:cursor-pointer rounded-2xl font-bold text-lg  ${
                            selectedToken === "BTC" ? "bg-gray-900 text-white border-2 border-cyan-400" : "bg-slate-700 shadow-md shadow-black"
                        }`}
                        >
                        <input
                            type="radio"
                            value="BTC"
                            checked={selectedToken === "BTC"}
                            onChange={handleTokenChange}
                            style={{marginRight:"0.5rem"}}
                        />
                        BTC
                        </label>
                        <label
                        className={`col-span-1 py-5 px-4 hover:bg-gray-900 hover:cursor-pointer rounded-2xl font-bold text-lg  ${
                            selectedToken === "ETH" ? "bg-gray-900 text-white border-2 border-cyan-400" : "bg-slate-700 shadow-md shadow-black"
                        }`}
                        >
                        <input
                            type="radio"
                            value="ETH"
                            checked={selectedToken === "ETH"}
                            onChange={handleTokenChange}
                            style={{marginRight:"0.5rem"}}
                        />
                        ETH
                        </label>
                        <label
                        className={`col-span-1 py-5 px-4 hover:bg-gray-900 hover:cursor-pointer rounded-2xl font-bold text-lg  ${
                            selectedToken === "BNB BSC" ? "bg-gray-900 text-white border-2 border-cyan-400" : "bg-slate-700 shadow-md shadow-black"
                        }`}
                        >
                        <input
                            type="radio"
                            value="BNB BSC"
                            checked={selectedToken === "BNB BSC"}
                            onChange={handleTokenChange}
                            style={{marginRight:"0.5rem"}}
                        />
                        BNB BSC
                        </label>
                        <label
                        className={`col-span-1 py-5 px-4 hover:bg-gray-900 hover:cursor-pointer rounded-2xl font-bold text-lg  ${
                            selectedToken === "TRX" ? "bg-gray-900 text-white border-2 border-cyan-400" : "bg-slate-700 shadow-md shadow-black"
                        }`}
                        >
                        <input
                            type="radio"
                            value="TRX"
                            checked={selectedToken === "TRX"}
                            onChange={handleTokenChange}
                            style={{ marginRight: "0.5rem" }}
                        />
                        TRX
                        </label>
                    </div>
                </div>

            </div>
            <div className='flex mt-32'>
                 <button className='w-44 text-center mt-10 ml-auto mr-10 p-4 bg-cyan-500 hover:text-white text-slate-200 rounded-xl text-3xl font-bold'>PAY NOW</button>
                <div className='mt-14 mr-auto'>
                    <Tooltip content="Deposit History" placement="right">
                        <svg
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className='w-10 h-10 font-bold text-lg hover:cursor-pointer'
                        >
                        <path d="M8.515 1.019A7 7 0 008 1V0a8 8 0 01.589.022l-.074.997zm2.004.45a7.003 7.003 0 00-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 00-.439-.27l.493-.87a8.025 8.025 0 01.979.654l-.615.789a6.996 6.996 0 00-.418-.302zm1.834 1.79a6.99 6.99 0 00-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 00-.214-.468l.893-.45a7.976 7.976 0 01.45 1.088l-.95.313a7.023 7.023 0 00-.179-.483zm.53 2.507a6.991 6.991 0 00-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 01-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 01-.401.432l-.707-.707z" />
                        <path d="M8 1a7 7 0 104.95 11.95l.707.707A8.001 8.001 0 118 0v1z" />
                        <path d="M7.5 3a.5.5 0 01.5.5v5.21l3.248 1.856a.5.5 0 01-.496.868l-3.5-2A.5.5 0 017 9V3.5a.5.5 0 01.5-.5z" />
                        </svg>
                    </Tooltip>
                </div>
            </div>
        </div>

        <div className={`${isActive?'hidden':''}`}>
            <div className='w-[80%] mx-auto mt-24'>
                <div className='flex px-4'>
                    <label htmlFor='withdrawAmount' className='w-[20%] text-md font-mono my-auto'>Withdraw Amount </label>
                    <input type='text' id='withdrawAmount' placeholder='Minium $10' className='text-gray-900 text-md font-mono w-[80%] rounded-lg p-2.5 dark:bg-slate-700 dark:border-gray-400  dark:text-cyan-400 font-bold '></input>                
                </div>
                <div className='flex px-4 mt-10'>
                    <div className='flex w-[20%] mr-1'>
                        <button className=' bg-yellow-400 h-10 my-auto mr-auto hover:bg-yellow-500 rounded-md text-black px-1 font-bold font-mono text-sm'>Connect Wallet</button>
                    </div>
                    <input type='text' placeholder='Wallet Address' className='text-gray-900 text-md font-mono w-[80%] rounded-lg p-2.5 dark:bg-slate-700 dark:border-gray-400  dark:text-cyan-400 font-bold focus:outline-none' readOnly></input>
                </div>

                <div>
                    <div className="grid grid-cols-4 mt-16 gap-2 px-4">
                        <label
                        className={`col-span-1 py-5 px-4 hover:bg-gray-900 hover:cursor-pointer rounded-2xl font-bold text-lg  ${
                            selectedToken === "USDT ERC20" ? "bg-gray-900 text-white border-2 border-cyan-400" : "bg-slate-700 shadow-md shadow-black"
                        }`}
                        >
                        <input
                            type="radio"
                            value="USDT ERC20"
                            checked={selectedToken === "USDT ERC20"}
                            onChange={handleTokenChange}
                            style={{marginRight:"0.5rem"}}
                        />
                        USDT ERC20
                        </label>
                        <label
                        className={`col-span-1 py-5 px-4 hover:bg-gray-900 hover:cursor-pointer rounded-2xl font-bold text-lg  ${
                            selectedToken === "USDT TRC20" ? "bg-gray-900 text-white border-2 border-cyan-400": " bg-slate-700 shadow-md shadow-black"
                        }`}
                        >
                        <input
                            type="radio"
                            value="USDT TRC20"
                            checked={selectedToken === "USDT TRC20"}
                            onChange={handleTokenChange}
                            style={{marginRight:"0.5rem"}}
                        />
                        USDT TRC20
                        </label>
                        <label
                        className={`col-span-1 py-5 px-4 hover:bg-gray-900 hover:cursor-pointer rounded-2xl font-bold text-lg  ${
                            selectedToken === "USDT BSC" ? "bg-gray-900 text-white border-2 border-cyan-400" : "bg-slate-700 shadow-md shadow-black"
                        }`}
                        >
                        <input
                            type="radio"
                            value="USDT BSC"
                            checked={selectedToken === "USDT BSC"}
                            onChange={handleTokenChange}
                            style={{marginRight:"0.5rem"}}
                        />
                        USDT BSC
                        </label>
                        <label
                        className={`col-span-1 py-5 px-4 hover:bg-gray-900 hover:cursor-pointer rounded-2xl font-bold text-lg  ${
                            selectedToken === "USDC" ? "bg-gray-900 text-white border-2 border-cyan-400" : "bg-slate-700 shadow-md shadow-black"
                        }`}
                        >
                        <input
                            type="radio"
                            value="USDC"
                            checked={selectedToken === "USDC"}
                            onChange={handleTokenChange}
                            style={{marginRight:"0.5rem"}}
                        />
                        USDC
                        </label>
                    </div>
                   
                </div>

            </div>
            <div className='flex mt-32'>
                <button className='w-44 text-center mt-10 ml-auto mr-10 p-4 bg-cyan-500 hover:text-white text-slate-200 rounded-xl text-3xl font-bold'>Withdraw</button>
                <div className='mt-14 mr-auto'>
                    <Tooltip content="Deposit History" placement="right">
                        <svg
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className='w-10 h-10 font-bold text-lg hover:cursor-pointer'
                        >
                        <path d="M8.515 1.019A7 7 0 008 1V0a8 8 0 01.589.022l-.074.997zm2.004.45a7.003 7.003 0 00-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 00-.439-.27l.493-.87a8.025 8.025 0 01.979.654l-.615.789a6.996 6.996 0 00-.418-.302zm1.834 1.79a6.99 6.99 0 00-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 00-.214-.468l.893-.45a7.976 7.976 0 01.45 1.088l-.95.313a7.023 7.023 0 00-.179-.483zm.53 2.507a6.991 6.991 0 00-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 01-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 01-.401.432l-.707-.707z" />
                        <path d="M8 1a7 7 0 104.95 11.95l.707.707A8.001 8.001 0 118 0v1z" />
                        <path d="M7.5 3a.5.5 0 01.5.5v5.21l3.248 1.856a.5.5 0 01-.496.868l-3.5-2A.5.5 0 017 9V3.5a.5.5 0 01.5-.5z" />
                        </svg>
                    </Tooltip>
                </div>
            </div>
        </div>

    </div>
    );
}

export default Wallet

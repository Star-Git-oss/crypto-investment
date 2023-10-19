import React from 'react'
import { useState } from 'react';
import { FaHistory } from 'react-icons/fa'
import { Tooltip } from 'flowbite-react';

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
                 <button className='w-44 text-center mt-10 ml-auto mr-10 p-4 bg-cyan-400 hover:bg-cyan-500 rounded-xl text-3xl font-bold'>PAY NOW</button>
                <div className='mt-14 mr-auto'>
                    <Tooltip content="Deposit History" placement="right" animation="duration-150" arrow={false} style="dark">
                        <FaHistory className=' w-9 h-9 text-slate-400 hover:text-slate-100 hover:cursor-pointer' />
                    </Tooltip>
                </div>
            </div>
        </div>

        <div className={`${isActive?'hidden':''}`}>
            <div className='w-[80%] mx-auto mt-24'>
                <div className='flex px-4'>
                    <label htmlFor='depositAmount' className='w-[20%] text-md font-mono my-auto'>Withdraw Amount </label>
                    <input type='text' id='depositAmount' placeholder='Minium $10' className='text-gray-900 text-md font-mono w-[80%] rounded-lg p-2.5 dark:bg-slate-700 dark:border-gray-400  dark:text-cyan-400 font-bold '></input>                
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
                <button className='w-44 text-center mt-10 ml-auto mr-10 p-4 bg-cyan-400 hover:bg-cyan-500 rounded-xl text-3xl font-bold'>Withdraw</button>
                <div className='mt-14 mr-auto'>
                    <Tooltip content="Withdraw History" placement="right" animation="duration-150" arrow={false} style="dark">
                        <FaHistory className=' w-9 h-9 text-slate-400 hover:text-slate-100 hover:cursor-pointer' />
                    </Tooltip>
                </div>
            </div>
        </div>

    </div>
    );
}

export default Wallet

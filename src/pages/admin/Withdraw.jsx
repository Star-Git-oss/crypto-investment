import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Avatar00 from '../../assets/avatar12.png';
import { setUsers } from '../../slices/authSlice';
import ConfirmDialog from '../../components/ConfirmDialog';

const Withdraw = () => {

    const [show, setShow] = useState(false);
    
    const [userId, setUserId] = useState("");
    const [userEmail, setUserEmail] = useState("");

    const { userInfo } = useSelector((state)=>state.auth);
    const { users } = useSelector((state)=>state.auth);
    const [history, setHistory] = useState();
    const [balance, setBalance] = useState();

    const dispatch = useDispatch();

    const [isActive, setIsActive] = useState(true);

    const handleInvoiceTab = () => {
      setIsActive(!isActive);
    };

    const handleWithdrwTab = () => {
        setIsActive(!isActive);
        console.log('Deposit History : ',history);
    };

    useEffect(() => {
        axios
        .get("/api/history/withdraw")
        .then( res => {
            console.log("Withdraw History founded Successfully!", res.data);
            setHistory(res.data.withdrawHis);
        })
        .catch(err => {
            console.log(err);
        });
      }, []);

    useEffect(() => {
    axios
    .get("/api/history/balance")
    .then( res => {
        console.log("Balance History founded Successfully!", res.data.balanceHis);
        setBalance(res.data.balanceHis);
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

    const accept = () => {
        console.log('accepted');
        handleApprove(userId, userEmail);
        // toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const handleApprove = (_id, email) => {
        axios
        .put("/api/balance/approve", {_id, email})
        .then( res => {
            console.log("Fund is released Successfully!", res.data);
            toast.success('Fund is approved to successfully!', {autoClose: 1000, hideProgressBar: true, pauseOnHover: false, closeOnClick: true, theme: "dark",});
            setBalance(res.data.balanceHis);
        })
        .catch(err => {
            console.log(err.response);
			toast.error(err?.response?.data?.message || err.error, {autoClose: 1000, hideProgressBar: true, pauseOnHover: false, closeOnClick: true, theme: "dark",});
        });
    };
      
    return (
    <div className='dark:text-white h-screen w-full'>
        { show &&
        <ConfirmDialog accept={accept} show={show} handleShow={setShow} title='Approve Funds' content='Do you want to release fund to this user?' confirm='Approve' confirmColor='yellow'/> }
        <div className='flex sm:mt-10 mt-16'>
            <button
            className={`w-[40%] p-2 rounded-l-lg font-semibold text-lg ${
                isActive ? "bg-slate-700 shadow-md shadow-cyan-400 text-green-400" : "bg-slate-700 shadow-md shadow-black"
            } ml-auto`}
            onClick={handleInvoiceTab}
            >
            Invoice
            </button>
            <button
            className={`w-[40%] p-2 rounded-r-lg font-semibold text-lg ${
                !isActive ? "bg-slate-700  shadow-md shadow-cyan-400 text-green-400" : "bg-slate-700 shadow-md shadow-black"
            } mr-auto`}
            onClick={handleWithdrwTab}
            >
            Withdraw History
            </button>
        </div>

        <div className={`${isActive?'':'hidden'}`}>
            <div className='mx-auto mt-4'>
                <div className="col-span-12">
                    <div className="overflow-auto lg:overflow-visible ">
                        <table className="table text-gray-400 border-collapse space-y-6 mx-auto text-sm mt-16">
                            <thead className="bg-black text-slate-400">
                                <div>
                                    <tr>
                                        <th className="p-3 w-24 xs:w-60 text-center ">User</th>
                                        <th className="p-3 w-60 text-left hidden lg:block">Email</th>
                                        <th className="p-3 w-16 text-left hidden xs:table-cell">Balance</th>
                                        <th className="p-3 w-16">Request</th>
                                        <th className="p-3 text-left">Action</th>
                                    </tr>
                                </div>
                            </thead>

                            <tbody className="font-semibold font-sans text-md text-slate-300">
                                <div className='h-[70vh] overflow-y-auto'>
                                    {balance && balance.map((user, index) => (
                                        <tr key={index} className="bg-gray-900 hover:bg-gray-700 cursor-default ">
                                            <td className="p-3 w-24 xs:w-60 align-middle">
                                                <div className="flex">
                                                    {user.avatar?<img className="rounded-full h-12 w-12  object-cover" src={user.avatar} alt="unsplash image" />:<img className="rounded-full h-12 w-12  object-cover" src={Avatar00} alt="unsplash image" />}
                                                    <div className="ml-8 my-auto  hidden xs:table-cell">
                                                        <div>{user.username}</div>
                                                        <div className="text-gray-300 block lg:hidden">{user.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-3 w-60 hidden lg:table-cell align-middle">
                                                {user.email}
                                            </td>
                                            <td className="p-3 w-16 font-bold text-cyan-400 hidden xs:table-cell align-middle">
                                                ${user.balance}
                                            </td>
                                            <td className="p-3 w-16 text-cyan-400 align-middle">
                                                -${user.request}
                                            </td>
                                            <td className="p-3 align-middle">
                                                <div className="flex">
                                                    <button className='py-1 px-4 bg-yellow-600 hover:bg-yellow-500 text-white rounded-lg font-poppins' onClick={()=>{setUserId(user._id);setUserEmail(user.email);setShow(true);} }>APPROVE</button>
                                                </div>
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

        <div className={`${isActive?'hidden':''} `}>
            <div className='mx-auto mt-4'>
                <table className="table text-gray-400 border-collapse space-y-6 mx-auto text-sm mt-16">
                    <thead className="bg-black text-slate-400 sticky top-0">
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
                        <div className='h-[60vh] overflow-y-auto'>
                            {history && history.map((user, index) => (
                                <tr key={index} className="bg-gray-900 hover:bg-gray-700 cursor-default ">
                                    <td className="p-3 w-24 xs:w-60 align-middle">
                                        <div className="flex">
                                            {user.avatar?<img className="rounded-full h-12 w-12  object-cover" src={user.avatar} alt="unsplash image" />:<img className="rounded-full h-12 w-12  object-cover" src={Avatar00} alt="unsplash image" />}
                                            <div className="ml-8 my-auto hidden xs:table-cell">
                                                <div>{user.username}</div>
                                                <div className="text-gray-300 block lg:hidden">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-3 w-60 hidden lg:table-cell align-middle">
                                        {user.email}
                                    </td>
                                    <td className="p-3 w-16 xs:w-32 font-bold text-cyan-400 align-middle">
                                        ${user.balance}
                                    </td>
                                    <td className="p-3 w-32 align-middle">
                                        {user.date}
                                    </td>
                                </tr>
                            ))}
                        </div>
                    </tbody>
                </table>
            </div>
        </div>
        <ToastContainer />
    </div>
    );
}

export default Withdraw

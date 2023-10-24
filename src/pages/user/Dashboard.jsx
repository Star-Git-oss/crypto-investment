import React from 'react'
import Node from '../../components/user/Node';
import Avatar00 from '../../assets/avatar12.png'
import TaskBar from '../../components/user/TaskBar';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setCredentials, setNodes } from '../../slices/authSlice';
import axios from 'axios';

const Dashboard = () => {
    
    const { userInfo } = useSelector((state)=>state.auth);
    const { nodes } = useSelector((state)=> state.auth);
    const [prevFullTree, setPrevFullTree] = useState(false);
    const [email, setEmail] = useState(userInfo.email);
    const [cycle, setCycle] = useState(userInfo.cycle);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleBar = () =>{
        navigate('/cycle');
    }

    useEffect(()=>{
        setEmail(userInfo.email);
        setCycle(userInfo.cycle);
    }, [userInfo]);

    useEffect(() => {
        if(userInfo.state == 2) {
        axios
        .post("/api/tree", {email, cycle})
        .then( res => {
            console.log(res.data);
            dispatch(setNodes({ ...res.data }));
            const fullTree = Object.values(res.data).every(node => Object.keys(node).length > 0);
            console.log("Tree Updated Successfully!", fullTree);
            if(fullTree) {
                 axios
                .post("/api/users/cycle", { email, cycle })
                .then(res => {
                console.log('res', res.data);
                dispatch(setCredentials({ ...res.data }));
                console.log("Upstate Successfully!");
                })
                .catch(err => {
                console.log(err);
                });
            }
        })
        .catch(err => {
            console.log(err);
        });
        }
      }, []);

    let percentage;
    if(nodes){ percentage = (nodes.node1.email?1:0)*25 + (nodes.node2.email?1:0)*25 + (nodes.node11.email?1:0)*12.5 + (nodes.node12.email?1:0)*12.5 + (nodes.node21.email?1:0)*12.5 + (nodes.node22.email?1:0)*12.5;}

    console.log(percentage);
    return (
    <div className='dark:text-whiteh-screen xs:w-full w-[80%]'>
        <div className='mt-20'>
            <TaskBar cycle={userInfo.cycle} state={userInfo.state} percentage={percentage} getRewards={handleBar} getStarted={handleBar} here="dashboard" />
        </div>
        {
            nodes &&
            <div>
                <div className='w-full '>
                    {
                    userInfo.avatar?<Node avatar={userInfo.avatar} username={userInfo.username} email={userInfo.email} active={true}/>:
                        <Node avatar={Avatar00} username={userInfo.username} email={userInfo.email} active={true} />
                    }
                </div>
                <div className=' grid grid-cols-2'>
                    <div className=' col-span-1'>
                        { nodes.node1.email?
                            (nodes.node1.avatar?
                            <Node avatar={nodes.node1.avatar} username={nodes.node1.username} email={nodes.node1.email} active={nodes.node1}/>:<Node avatar={Avatar00} username={nodes.node1.username} email={nodes.node1.email} active={nodes.node1}/>
                            ):<Node avatar={Avatar00} active={false} /> }
                    </div>
                    <div className=' col-span-1'>
                        { nodes.node2.email?
                            (nodes.node2.avatar?
                            <Node avatar={nodes.node2.avatar} username={nodes.node2.username} email={nodes.node2.email} active={nodes.node2}/>:<Node avatar={Avatar00} username={nodes.node2.username} email={nodes.node2.email} active={nodes.node2}/>
                            ):<Node avatar={Avatar00} active={false} /> }
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-1/2 grid grid-cols-2'>
                        <div className=' col-span-1 ml-4'>
                        { nodes.node11.email?
                            (nodes.node11.avatar?
                            <Node avatar={nodes.node11.avatar} username={nodes.node11.username} email={nodes.node11.email} active={nodes.node11}/>:<Node avatar={Avatar00} username={nodes.node11.username} email={nodes.node11.email} active={nodes.node11}/>
                            ):<Node avatar={Avatar00} active={false} /> }
                        </div>
                        <div className=' col-span-1 mr-4'>
                        { nodes.node12.email?
                            (nodes.node12.avatar?
                            <Node avatar={nodes.node12.avatar} username={nodes.node12.username} email={nodes.node12.email} active={nodes.node12}/>:<Node avatar={Avatar00} username={nodes.node12.username} email={nodes.node12.email} active={nodes.node12}/>
                            ):<Node avatar={Avatar00} active={false} /> }
                        </div>
                    </div>
                    <div className=' w-1/2 grid grid-cols-2'>
                        <div className=' col-span-1 ml-4'>
                        { nodes.node21.email?
                            (nodes.node21.avatar?
                            <Node avatar={nodes.node21.avatar} username={nodes.node21.username} email={nodes.node21.email} active={nodes.node21}/>:<Node avatar={Avatar00} username={nodes.node21.username} email={nodes.node21.email} active={nodes.node21}/>
                            ):<Node avatar={Avatar00} active={false} /> }
                        </div>
                        <div className=' col-span-1 mr-4'>
                        { nodes.node22.email?
                            (nodes.node22.avatar?
                            <Node avatar={nodes.node22.avatar} username={nodes.node22.username} email={nodes.node22.email} active={nodes.node22}/>:<Node avatar={Avatar00} username={nodes.node22.username} email={nodes.node22.email} active={nodes.node22}/>
                            ):<Node avatar={Avatar00} active={false} /> }
                        </div>
                    </div>
                </div>
            </div>
        }

    </div>
    );
}

export default Dashboard

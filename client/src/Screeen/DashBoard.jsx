import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import NavBar2 from '../Components/NavBar2'
import avatar from "../assets/avatar.png"
import { loadData } from '../Data/Local'
import Dash from './Sub-screens/Dash'
import Add from './Sub-screens/Add'
import Delete from './Sub-screens/Delete'


const DashBoard = () => {
    const [options, setOptions] = useState(loadData);
    const [showMenu, setSHowMenu] = useState(true);
    const [view, setView] = useState("dashboard");
    const [log,showLog] = useState(false);
    const navigate = useNavigate();
    const logOut =()=>{
        alert("Succesfully loged out")
        navigate("/");

    }

  return (
    <div className=' w-full h-screen'>
        <NavBar2/>
        <div className='w-full h-14 bg-white relative flex flex-row items-center justify-between'>
            <i onClick={()=>setSHowMenu(!showMenu)} className='bx bx-menu-alt-left text-4xl font-semibold ml-4 cursor-pointer lg:opacity-0 w-2/12'></i>
            <div className='w-10/12 flex justify-end'>
                <div className=' flex flex-row lg:mr-10 mr-4 items-center cursor-pointer rounded-full w-10 h-10 shadow-xl px-1'  onClick={()=>showLog(!log)}>
                    <div className='w-5 h-5 rounded-full'>
                        <img src={avatar} alt="avatar" />
                    </div>
                    <i className='bx bxs-down-arrow scale-x-75'></i> 
                    {/* <p className='text-purple-900 ml-2 text-sm font-semibold'>Admin</p> */}
                </div>
            </div>
            {log && <div className=' absolute z-50 w-48 h-40 bg-slate-50 lg:right-12 right-5 top-12 border-2 border-purple-400 rounded-lg'>
                <img src={avatar} alt="avatar" className='w-1/3 mx-auto mt-3 ' />
                <p className='text-xs font-semibold text-purple-900 text-center'>Logged in as Admin</p>
                <div className='h-2/3'>
                    <button className='text-white bg-purple-800 rounded-md  mx-auto py-1 px-2 mt-2 flex flex-row items-center hover:shadow-2xl duration-700' onClick={logOut}>
                        LOGOUT
                        <i className='bx bxs-log-out ml-2 text-lg'></i>
                    </button>
                </div>
            </div>}
        </div>
        <div className='w-full h-screen flex flex-row relative'>
            {showMenu && <div className='w-4/10 fixed lg:relative bg-white h-screen border-2 border-l-0 border-slate-200'>
                <ul className=' p-2'>
                    {options.map(item=>{
                        return(
                            <span key={item.id} onClick={()=>{setView(item.view)}} className='flex flex-row items-center px-4 py-2 cursor-pointer lg:hover:bg-slate-200 border-b-slate-200 border-b-2 text-purple-900'>
                                <i className={item.logo}></i>
                                <li className='ml-4 text-sm font-semibold'>{item.desciption}</li>
                            </span>
                        )
                    })}
                </ul>
            </div>}
            <div className='w-full lg:w-6/10 flex-1 h-screen px-2 lg:px-5 py-2 lg:py-2 border-t-2 border-slate-200 bg-white'> 
                <div className='w-full'>
                    {view === "dashboard" && <Dash/>}
                    {view === "add" && <Add/>}
                    {view === "delete" && <Delete/>}

                </div>
            </div>
        </div>
    </div>
  )
}

export default DashBoard;
import React, { useState } from 'react'
import NavBar2 from '../Components/NavBar2'
import avatar from "../assets/avatar.png"
import { loadData } from '../Data/Local'


const DashBoard = () => {
    const [options, setOptions] = useState(loadData);
    const [showMenu, setSHowMenu] = useState(true);
    const [view, setView] = useState("dashboard")

  return (
    <div className=' w-full h-screen'>
        <NavBar2/>
        <div className='w-full h-14 bg-white flex flex-row items-center justify-between'>
            <i onClick={()=>setSHowMenu(!showMenu)} className='bx bx-menu-alt-left text-4xl font-semibold ml-4 cursor-pointer lg:opacity-0'></i>
            <div>
                <div className=' flex flex-row mr-3 items-center'>
                    <div className='w-7 h-7 rounded-full'>
                        <img src={avatar} alt="avatar" />
                    </div>
                    <p className='text-purple-900 ml-2 text-sm font-semibold'>Admin</p>
                </div>
            </div>
        </div>
        <div className='w-full h-screen flex flex-row relative'>
            {showMenu && <div className='w-4/10 fixed lg:relative bg-white h-screen border-2 border-l-0 border-slate-400'>
                <ul className=' p-2'>
                    {options.map(item=>{
                        return(
                            <span key={item.id} onClick={()=>{setView(item.view)}} className='flex flex-row items-center px-2 py-1 cursor-pointer my-1 lg:hover:bg-slate-300 border-b-slate-300 border-b-2 text-purple-900'>
                                <i className={item.logo}></i>
                                <li className='ml-4 text-sm font-semibold'>{item.desciption}</li>
                            </span>
                        )
                    })}
                </ul>
            </div>}
            <div className='w-full lg:w-6/10 flex-1 h-screen p-10 bg-yellow-100'> 
                <div className='w-full'>
                    {view}
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashBoard;
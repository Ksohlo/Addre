import React from 'react';
// import RFID from "../assets/rfidm.png"
import "./ind.css";
import NavBar from '../Components/NavBar'

export default function Home() {
  return (
    <>
    <NavBar/>
    <div className=' w-full h-screen flex items-center justify-between bg '>
        <div className='w-full text-center flex flex-col items-center justify-center '>
            <p className=' text-4xl mb-4 lg:text-8xl mt-7 lg:mt-3 text-white font-bold w-1/3 text-center'>
                WELCOME TO ADRE
            </p>
            <p className='text-white mb-3 text-sm lg:text-base w-2/3 lg:w-1/2'>
                Your Go to Solution to manage Organiation Attendance & Transactions from RFID Scanners!!</p>
            <button type="button" className="text-white mt-4 outline-none bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"><a href="/login">Login</a></button>
        </div>
        {/* <img src={RFID} className='lg:w-1/2 block lg:ml-8 px-5'/> */}
        
    </div>
    </>
  )
}

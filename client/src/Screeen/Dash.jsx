import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dash() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios.get("https://addre.onrender.com/api/student/fetch")
        .then((res)=>setData(res.data), setLoading(false))
        .catch((err)=>console.log(err))
        // console.log(data);
        // data && setLoading(false)
    }, []);
return (
    <>
        <h2 className='text-xl lg:text-3xl font-bold text-purple-800'>DashBoard</h2>
        <h2 className='text-base lg:text-lg mb-2 text-center font-semibold text-black'>List of Students</h2>
        <div className='flex flex-row items-center h-10 bg-purple-500 text-xs lg:text-sm text-white font-semibold'>
            <p className='mr-6 mx-4'>S/N</p>
            <p className='w-1/3 lg:w-1/4 '>Name</p>
            <p className='w-1/3 lg:w-1/4 hidden md:block '>E-mail</p>
            <p className='w-1/3 lg:w-1/4 '>Matric No</p>
            <p className='w-1/3 lg:w-1/4 '>RFID No</p>
        </div>
        {data && data.map((item, index)=>{
            return(
                <div key={index} className='flex flex-row text-xs lg:text-sm items-center h-10 even:bg-purple-100'>
                    <p className='mr-6 mx-4'>{`${index + 1}.`}</p>
                    <p className='w-1/3 lg:w-1/4 '>{item.name}</p>
                    <p className='w-1/3 lg:w-1/4 hidden md:block '>{item.email}</p>
                    <p className='w-1/3 lg:w-1/4 '>{item.matric}</p>
                    <p className='w-1/3 lg:w-1/4 '>{item.rfid_id}</p>
                </div>
            )
        })}
        
        {!data && <div className=' border-8 border-r-purple-300 border-purple-800 w-10 h-10 mx-auto rounded-full animate-spin'></div>}        

    </>
  )
}

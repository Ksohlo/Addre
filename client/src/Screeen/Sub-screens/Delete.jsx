import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Delete() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://addre.onrender.com/api/student/fetch")
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err))
    }, []);

    const handleDelete = (id) => {
        axios.delete(`https://addre.onrender.com/api/student/delete/${id}`);
        alert("Succesfully Deleted");
        window.location.reload();
    }
    return (
    <div className=''>
        <h2 className='text-xl lg:text-3xl font-bold text-purple-800'>Delete a Student data</h2><h2 className='text-base lg:text-lg mb-2 text-center font-semibold text-black mt-3'>Fill the Form below to delete a student data</h2>
        <div className='flex flex-row items-center h-10 bg-purple-500 text-xs lg:text-sm text-white font-semibold'>
            <p className='w-1/12 mx-4'>S/N</p>
            <p className='w-1/3 lg:w-1/4 '>Name</p>
            <p className='w-1/3 lg:w-1/4 hidden md:block '>E-mail</p>
            <p className='w-1/3 lg:w-1/4 '>Matric No</p>
            <p className='w-1/3 lg:w-1/4 hidden md:block'>RFID No</p>
        </div>
        {data && data.map((item, index)=>{
            return(
                <div key={index} className='flex flex-row text-xs lg:text-sm font-medium items-center h-10 even:bg-purple-100'>
                    <p className=' mx-4 w-1/12'>{`${index + 1}.`}</p>
                    <p className='w-1/3 lg:w-1/4 '>{item.name}</p>
                    <p className='w-1/3 lg:w-1/4 hidden md:block '>{item.email}</p>
                    <p className='w-1/3 lg:w-1/4 '>{item.matric}</p>
                    <p className='w-1/3 lg:w-1/4 hidden md:block'>{item.rfid_id}</p>
                    <div onClick={()=>handleDelete(item._id)} className='w-10 cursor-pointer hover:scale-110 duration-500'><i className='bx bxs-trash text-red-600'></i></div>
                </div>
            )
        })}
    </div>
  )
}

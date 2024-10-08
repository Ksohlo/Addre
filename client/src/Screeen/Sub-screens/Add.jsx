// import axios from 'axios';
import axios from 'axios';
import React, { useState } from 'react'

export default function Add() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [matric, setMatric] = useState("");
  const [rfid_id, setRfid_id] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  
  const reqData = {name, email, matric, rfid_id, phone, address};

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post("https://addre.onrender.com/api/student/create", reqData)
    .then((res)=>{
      if (res.status === 200) {
        alert("Succesfully Added student to the database");
        
      }else{
        alert("An error occured please contact the developer")
      }
    })
    
  }

  return (
    <div className='w-full h-full'>
        <h2 className='text-xl lg:text-3xl font-bold text-purple-800'>Register a Student</h2>
        <h2 className='text-base lg:text-lg mb-2 text-center font-semibold text-black mt-3'>Fill the Form below</h2>
        <form className='w-10/12 md:w-6/12 lg:w-5/12 mx-auto mt-4' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className='text-purple-800 font-semibold'>Name</label>
            <input onChange={e=>setName(e.target.value)} type="text" placeholder='Enter student name' name="name" id="name" className='w-full outline-0 h-10 border-2 border-slate-200 rounded-md p-2 mb-2' />
          </div>
          <div>
            <label htmlFor="email" className='text-purple-800 font-semibold'>E-mail</label>
            <input onChange={e=>setEmail(e.target.value)} type="email" placeholder='Enter student email' name="email" id="email" className='w-full outline-0 h-10 border-2 border-slate-200 rounded-md p-2 mb-2' />
          </div>
          <div>
            <label htmlFor="matric" className='text-purple-800 font-semibold'>Matric No</label>
            <input onChange={e=>setMatric(e.target.value)} type="text" placeholder='Enter student matric no' name="matric" id="matric" className='w-full outline-0 h-10 border-2 border-slate-200 rounded-md p-2 mb-2' />
          </div>
          <div>
            <label htmlFor="rfid_id" className='text-purple-800 font-semibold'>RFID No</label>
            <input onChange={e=>setRfid_id(e.target.value)} type="text" placeholder='Enter student unique RFID no' name="rfid_id" id="rfid_id" className='w-full outline-0 h-10 border-2 border-slate-200 rounded-md p-2 mb-2' />
          </div>
          <div>
            <label htmlFor="phone" className='text-purple-800 font-semibold'>Phone No</label>
            <input onChange={e=>setPhone(e.target.value)} type="tel" placeholder='Enter student phone no' name="phone" id="phone" className='w-full outline-0 h-10 border-2 border-slate-200 rounded-md p-2 mb-2' />
          </div>
          <button className='w-full h-10 bg-purple-500 text-white font-semibold rounded-md mt-4'>Register</button>
          
        </form>
    </div>
  )
}

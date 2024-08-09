import axios from 'axios'
import React, { useState } from 'react'
import { Alert, Button, Checkbox, Label, Navbar, TextInput } from "flowbite-react";
import NavBar from '../Components/NavBar';
import {useNavigate} from "react-router-dom"


export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("https://addre.onrender.com/api/user/login", {username, password})
        .then((res)=>{
            if (res.status === 200) {
                alert(res.data.message);
                navigate("/dashboard");
                // console.log(res);  
            }else{
                alert(res.data.message)
            }
            // console.log(res);
            
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <>
    <NavBar />
     <div className='w-full h-screen flex flex-col justify-center items-center'>
        <p className='text-purple-700 text-sm font-semibold mb-4 w-7/10 lg:1/6'>
            Login Into your Addre Account to access your data</p>
        <form onSubmit={handleSubmit} className="flex w-2/3 lg:w-1/5 flex-col gap-4">
        <div>
            <div className="mb-2 block">
            <Label htmlFor="username" value="Username" />
            </div>
            <TextInput id="usename" type="name" placeholder="Input Username" onChange={(e)=>{setUsername(e.target.value)}} required />
        </div>
        <div>
            <div className="mb-2 block">
            <Label htmlFor="password1" value="Password" />
            </div>
            <TextInput id="password1" placeholder='Input Password' type="password" onChange={(e)=>{setPassword(e.target.value)}} required />
        </div>
        <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit" className='bg-indigo-800'>Submit</Button>
        </form>
    </div>
    </>
  )
}

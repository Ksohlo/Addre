"use client";

import React from 'react'
import { Button, Checkbox, Label, Navbar, TextInput } from "flowbite-react";
import NavBar from '../Components/NavBar';

export default function Login() {
  return (
    <>
    <NavBar />
     <div className='w-full h-screen flex flex-col justify-center items-center'>
        <p className='text-purple-700 text-sm font-semibold mb-4 w-7/10 lg:1/6'>
            Login Into your Addre Account to access your data</p>
        <form className="flex w-2/3 lg:w-1/5 flex-col gap-4">
        <div>
            <div className="mb-2 block">
            <Label htmlFor="email1" value="Username" />
            </div>
            <TextInput id="email1" type="email" placeholder="Input Username" required />
        </div>
        <div>
            <div className="mb-2 block">
            <Label htmlFor="password1" value="Password" />
            </div>
            <TextInput id="password1" placeholder='Input Password' type="password" required />
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

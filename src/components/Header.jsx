import React from 'react'
import { Button, Navbar } from "flowbite-react";
import logo from "/logo.svg"
import { LuBellDot } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';

export default function Header() {

  const navigate=useNavigate();
  const handleClickLogin =() =>{
    navigate('/login');
  }
  return (
   <Navbar fluid rounded className="font-sans">
   <Navbar.Brand href="https://flowbite-react.com">
     <img src={logo} className="h-6 mr-3 sm:h-9" alt="Flowbite React Logo" />
     
   </Navbar.Brand>
   
   <div className="flex md:order-2">
      <div className="flex p-3 mr-5 transition-all bg-gray-200 rounded-full hover:bg-red-500"> 
      <LuBellDot className="w-full h-full m-auto text-red-600 rounded-full hover:text-white" />
      </div>
      
     <button  onClick={handleClickLogin} className="flex px-3 py-2 text-white transition-all bg-blue-900 rounded-full w-max hover:bg-cyan-500 hover:text-black">Login</button>
     <Navbar.Toggle />
   </div>
   <Navbar.Collapse className="md:flex md:items-center md:w-auto md:space-x-6">
     <Navbar.Link href="#">
       Home
     </Navbar.Link>
     <Navbar.Link href="#">About</Navbar.Link>
     <Navbar.Link href="#">Services</Navbar.Link>
     <Navbar.Link href="#">Pricing</Navbar.Link>
     <Navbar.Link href="#">Contact</Navbar.Link>
   </Navbar.Collapse>
 </Navbar>
  )
}

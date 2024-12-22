import React from 'react'
import { Button, Navbar } from "flowbite-react";
import logo from "/logo.svg"
import { LuBellDot } from "react-icons/lu";

export default function Header() {
  return (
   <Navbar fluid rounded className="font-sans">
   <Navbar.Brand href="https://flowbite-react.com">
     <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
     
   </Navbar.Brand>
   
   <div className="flex md:order-2">
      <div className="flex bg-gray-200 rounded-full p-3 mr-5 hover:bg-red-500 transition-all"> 
      <LuBellDot className="text-red-600 m-auto rounded-full hover:text-white w-full h-full" />
      </div>
      
     <button className="bg-blue-900 flex text-white w-max  rounded-full hover:bg-cyan-500 hover:text-black px-3 py-2 transition-all">Login</button>
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

"use client"
import React from "react";
import { useState } from 'react';

import Image from "next/image";
import { FaBars, FaTimes } from 'react-icons/fa';
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    // Your additional toggle logic here, if needed
  };
  const menuItems = [
    "Home",
    "About",
    "Resources"
  ];

  return (
    <Navbar maxWidth={'full'} className="bg-transparent blur-none justify-between" >
      
{/* for mobile screen */}
      <NavbarContent className="sm:hidden " justify="start">
      <NavbarMenuToggle
        onClick={handleToggle}
        icon={(isOpen) => (isOpen ? <FaTimes style={{ color: 'white', fontSize: '1.5em' }} /> : <FaBars style={{ color: 'white', fontSize: '1.5em' }} />)}
        // Other props for NavbarMenuToggle
      />
      </NavbarContent>
<div>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image src="/assets/icons/defcon.png"  alt="icon" height={100} width={100}/>
        </NavbarBrand>
      </NavbarContent>
      </div>


{/* for big screen  */}



<NavbarContent className="hidden sm:flex gap-4 justify-between" >

        <NavbarBrand>
     <Image src="/assets/icons/defcon.png"  alt="icon" height={100} width={100}/>
        </NavbarBrand>

      
        
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      

        <div >
        <NavbarItem className="" >
          <div className="gap-6 flex ">
            <div>
        <Link className="text-white" href="#">
            Home
          </Link>
          </div>
          <div>
        <Link className="text-white" href="#">
          About
          </Link>
          </div>
          <div>
        <Link className="text-white" href="#">
          Resources
          </Link>
          </div>
          </div>
         
        
        </NavbarItem>
        </div>
        
      </NavbarContent>

    

      <NavbarContent justify="end">
        
        <NavbarItem>
        <Button
  as={Link}
  className="bg-red-600 text-white font-bold py-2 px-2 rounded"
  href="/form"

  
>
  REGISTER NOW
</Button>

        </NavbarItem>
        
      </NavbarContent>
      

{/* side menu  */}
      <NavbarMenu className="bg-transparent">
        
          <NavbarMenuItem >
            <Link
              className="w-full text-white"
              
              href="#"
              size="lg"
            >
              Home
            </Link>
            <Link
              className="w-full text-white"
              
              href=""
              size="lg"
            >
              
              About
          
            </Link>
          
            <Link
              className="w-full text-white"
              
              href="#"
              size="lg"
            >
              Resources
            </Link>
          </NavbarMenuItem>
      
      </NavbarMenu>
    </Navbar>
  );
}

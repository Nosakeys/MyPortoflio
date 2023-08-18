import React from 'react'
import {  FaGithub, FaLinkedin,FaTwitter,FaMailBulk } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className='sm:hidden w-screen  h-[20svh] border-y-[1.3px] border- border-pink-600 flex flex-col items-center justify-center gap-4'>
      <div>
      <p className="text-gray-300 text-center">© Silas Aigbe, All Rights Reserved</p>
      </div>
      <div className=''>
        <ul>
          <li className='flex items-center justify-center gap-4'>
            <a className='text-gray-300' href="https://www.linkedin.com/in/silas-aigbe-8b506019b"target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={33} />
            </a>
            <a className='text-gray-300' href="https://github.com/Nosakeys"target="_blank" rel="noopener noreferrer">
            <FaGithub size={33} />
            </a>
            <a className='text-gray-300' href="https://twitter.com/Nosakeys"  target="_blank" rel="noopener noreferrer">
            <FaTwitter size={33} /> 
            </a>
            <a className='text-gray-300'   href="mailto:silaskeys95@gmail.com"target="_blank" rel="noopener noreferrer">
           <HiOutlineMail size={33} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer 
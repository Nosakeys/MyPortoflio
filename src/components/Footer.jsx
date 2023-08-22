import React from 'react'
import {  FaGithub, FaLinkedin,FaTwitter} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className='pb-14 px-5 align-top overflow-hidden '>
    <div className='sm:hidden h-[20vh] border-y-[0.56px] border-pink-300 flex flex-col items-center justify-center gap-5 align-top overflow-hidden'>
      <div>
      <p className="text-gray-300 text-center">© Silas Aigbe, All Rights Reserved</p>
      </div>
      <div className=''>
        <ul>
          <li className='flex items-center justify-center gap-5'>
          <a className='text-gray-300' href="https://twitter.com/Nosakeys"  target="_blank" rel="noopener noreferrer">
            <FaTwitter size={23} /> 
            </a>
            <a className='text-gray-300' href="https://github.com/Nosakeys"target="_blank" rel="noopener noreferrer">
            <FaGithub size={23} />
            </a>
            <a className='text-gray-300' href="https://www.linkedin.com/in/silas-aigbe-8b506019b"target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={23} />
            </a>
            <a className='text-gray-300'   href="mailto:silaskeys95@gmail.com"target="_blank" rel="noopener noreferrer">
           <HiOutlineMail size={23} />
            </a>
          </li>
        </ul>
      </div>
    </div>

    </div>
  )
}

export default Footer 
// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo1 from "../../assets/logo/logo2.webp"
import { FaLinkedin } from 'react-icons/fa6'
import { IoMdCall } from 'react-icons/io'
import { MdOutlineEmail } from 'react-icons/md'
export default function Footer() {
  return (
    <div>

        <div className='h-[160px] w-full  bg-[#002045]'>
                <div className='flex items-center justify-between h-full w-full lg:px-28 px-3'>
                    <img  src={logo1} alt="" />
                    <div className='lg:flex items-center hidden'>
                        <p className='w-40 text-center flex items-center justify-center border-r text-[#04dcdf] font-bold text-lg h-16'>Oue Solution</p>
                        <p className='text-[#04dcdf] ml-5'>AnyPaaS</p>
                        <p className='text-[#04dcdf] ml-5'>AnyPaaS</p>
                        <p className='text-[#04dcdf] ml-5'>AnyPaaS</p>
                    </div>
                    <div className='flex items-center gap-3 lg:hidden'>
                      <FaLinkedin className='text-3xl text-blue-600'/>
                      <IoMdCall className='text-3xl text-blue-600'/>
                      <MdOutlineEmail className='text-3xl text-blue-600'/>
                    </div>
                </div>
        </div>
        <div className='h-16 w-full  bg-[#00152d]'>
                    <div className='lg:flex items-center w-full h-full justify-between lg:px-20 p-3 text-center '>
                        <p className='text-blue-600 text-sm'>©2023 All rights reserved. Any Technology Pte Ltd.</p>
                        <p className='text-blue-600 text-sm hover:text-white duration-300 cursor-pointer'>Privacy Policy</p>
                    </div>
        </div>

    </div>
  )
}

// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo1 from "../../assets/logo/logo2.webp"
export default function Footer() {
  return (
    <div>

        <div className='h-[160px] w-full  bg-[#002045]'>
                <div className='flex items-center justify-between h-full w-full px-28'>
                    <img src={logo1} alt="" />
                    <div className='flex items-center'>
                        <p className='w-40 text-center flex items-center justify-center border-r text-[#04dcdf] font-bold text-lg h-16'>Oue Solution</p>
                        <p className='text-[#04dcdf] ml-5'>AnyPaaS</p>
                        <p className='text-[#04dcdf] ml-5'>AnyPaaS</p>
                        <p className='text-[#04dcdf] ml-5'>AnyPaaS</p>
                    </div>
                </div>
        </div>
        <div className='h-16 w-full  bg-[#00152d]'>
                    <div className='flex items-center w-full h-full justify-between px-20'>
                        <p className='text-blue-600 text-sm'>©2023 All rights reserved. Any Technology Pte Ltd.</p>
                        <p className='text-blue-600 text-sm hover:text-white duration-300 cursor-pointer'>Privacy Policy</p>
                    </div>
        </div>

    </div>
  )
}

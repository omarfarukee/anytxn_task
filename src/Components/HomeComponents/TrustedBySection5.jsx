// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import CountUp from 'react-countup'
import { FaGreaterThan } from 'react-icons/fa'
import ScrollTrigger from 'react-scroll-trigger'
import logo1 from "../../assets/logo/logo3.webp"
import logo2 from "../../assets/logo/logo4.webp"
import logo3 from "../../assets/logo/logo5.webp"
import logo4 from "../../assets/logo/logo6.webp"
import logo5 from "../../assets/logo/logo7.webp"
import logo6 from "../../assets/logo/logo8.webp"
import logo7 from "../../assets/logo/logo9.webp"
import logo8 from "../../assets/logo/logo10.webp"
import logo9 from "../../assets/logo/logo11.webp"
import logo10 from "../../assets/logo/logo12.webp"
import logo11 from "../../assets/logo/logo13.webp"
import logo12 from "../../assets/logo/logo14.webp"
import logo13 from "../../assets/logo/logo15.webp"
import logo14 from "../../assets/logo/logo16.webp"
import logo15 from "../../assets/logo/logo17.webp"
import Marquee from 'react-fast-marquee'
export default function TrustedBySection5() {
    const [counterOn, setCounterOn] = useState(false)
  return (
    <div>
        <div className='flex justify-center'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='tracking-widest font-bold text-blue-500' data-aos="fade-up"
                        data-aos-duration="1000">TRUSTED BY THE BEST</p>
                </div>
            </div>
            <div className='h-[200px] w-full' data-aos="fade-up"
                        data-aos-duration="2000">
            <ScrollTrigger onEnter={() => setCounterOn(true)}>
                            {counterOn &&
                                <div className="flex flex-wrap gap-20 justify-center mt-10 px-3 lg:px-0">
                                    <div className="flex lg:flex-col justify-center gap-5 items-center w-full border-b lg:border-none lg:w-[200px]">
                                        
                                   <div className='flex  items-center text-blue-600'>
                                   <FaGreaterThan className='lg:text-6xl text-4xl'/> <p className="mt-2 text-6xl font-semibold md:text-8xl"><CountUp start={0} end={20} duration={4} delay={0} /></p>
                                    </div> 
                                        <p className="text-lg font-semibold text-gray-600">Years of Experience</p>
                                    </div>
                                    <div className="flex lg:flex-col justify-center gap-5 items-center w-full border-b lg:border-none lg:w-[200px]">
                                        
                                   <div className='flex items-center text-blue-600'>
                                  <p className="mt-2 text-6xl font-semibold md:text-8xl"><CountUp start={0} end={40} duration={4} delay={0} />+</p>
                                    </div> 
                                        <p className="text-lg font-semibold text-gray-600">Financial Institutions</p>
                                    </div>
                                    <div className=" flex lg:flex-col justify-center gap-5 items-center w-full border-b lg:border-none lg:w-[300px]">
                                        
                                   <div className='flex items-center text-blue-600'>
                                   <FaGreaterThan className='lg:text-6xl text-4xl'/> <p className="mt-2 text-6xl font-semibold md:text-8xl"><CountUp start={0} end={200} duration={4} delay={0} />m</p>
                                    </div> 
                                        <p className="text-lg font-semibold text-gray-600">Customers Each</p>
                                    </div>

                                </div>
                            }
                        </ScrollTrigger>
            </div>

            <div className='lg:flex justify-center mt-20 mb-20 hidden'>
                <div className='flex lg:flex-col flex-row justify-between items-center' data-aos="fade-down"
                        data-aos-duration="3000">
                    <div className='lg:w-[1000px] flex flex-wrap justify-between items-center'>
                    <img className='w-40' src={logo1} alt="" />
                    <img className='w-40 h-10 ' src={logo2} alt="" />
                    <img className='w-40 h-14 ' src={logo3} alt="" />
                    <img className='w-40 h-12 ' src={logo4} alt="" />
                    <img className='w-40' src={logo5} alt="" />
                    </div>
                  
                    <div className='lg:w-[1000px] flex flex-wrap justify-between items-center mt-8'>
                     <img className='w-40' src={logo6} alt="" />
                    <img className='w-40' src={logo7} alt="" />
                    <img className='w-40' src={logo8} alt="" />
                    <img className='w-40' src={logo9} alt="" />
                    <img className='w-40' src={logo10} alt="" />
                </div>
                    <div className='lg:w-[1000px] flex flex-wrap justify-between items-center mt-8'>
                     <img className='w-40' src={logo11} alt="" />
                    <img className='w-40' src={logo12} alt="" />
                    <img className='w-40' src={logo13} alt="" />
                    <img className='w-40' src={logo14} alt="" />
                    <img className='w-40' src={logo15} alt="" />
                </div>
                   
                </div>
            </div>

            {/* mobile marque */}
            <div className="w-full mt-56 lg:hidden block">
                        <Marquee pauseOnHover={true} speed={80} className='mt-4 mb-4'>
                            <div className='w-[250px] mr-5 flex justify-center rounded-xl    items-center '>
                                <img className="" src={logo1} alt="logo1" />
                            </div>
                            <div className='w-[250px] mr-5 flex justify-center rounded-xl    items-center '>
                                <img src={logo2} alt="logo2" />
                            </div>
                            <div className='w-[250px] mr-5 flex justify-center rounded-xl    items-center '>
                                <img src={logo3} alt="logo2" />
                            </div>
                            <div className='w-[250px] mr-5 flex justify-center rounded-xl    items-center '>
                                <img src={logo4} alt="logo2" />
                            </div>
                            <div className='w-[250px] mr-5 flex justify-center rounded-xl    items-center '>
                                <img src={logo5} alt="logo2" />
                            </div>
                            <div className='w-[250px] mr-5 flex justify-center rounded-xl    items-center '>
                                <img src={logo6} alt="logo2" />
                            </div>
                            <div className='w-[250px] mr-5 flex justify-center rounded-xl    items-center '>
                                <img src={logo7} alt="logo2" />
                            </div>
                            <div className='w-[250px] mr-5 flex justify-center rounded-xl    items-center '>
                                <img src={logo8} alt="logo2" />
                            </div>
                            <div className='w-[250px] mr-5 flex justify-center rounded-xl    items-center '>
                                <img src={logo9} alt="logo2" />
                            </div>
                            <div className='w-[250px] mr-5 flex justify-center rounded-xl    items-center '>
                                <img src={logo10} alt="logo2" />
                            </div>
                            <div className='w-[250px] mr-5 flex justify-center rounded-xl    items-center '>
                                <img src={logo11} alt="logo2" />
                            </div>
                            <div className='w-[250px] mr-5 flex justify-center rounded-xl    items-center '>
                                <img src={logo12} alt="logo2" />
                            </div>
                            <div className='w-[250px] mr-5 flex justify-center rounded-xl    items-center '>
                                <img src={logo13} alt="logo2" />
                            </div>
                            <div className='w-[250px] mr-5 flex justify-center rounded-xl    items-center '>
                                <img src={logo14} alt="logo2" />
                            </div>
                            <div className='w-[250px] mr-5 flex justify-center rounded-xl    items-center '>
                                <img src={logo15} alt="logo2" />
                            </div>

                        </Marquee>
                    </div>
    </div>
  )
}

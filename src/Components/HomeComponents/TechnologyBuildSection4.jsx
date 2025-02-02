// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import img1 from "../../assets/slide/img1.avif"
export default function TechnologyBuildSection4() {
    const [activeSlider, setActiveSlider] = useState(1);

    // Automatically switch slides every 4 seconds
    useEffect(() => {
        const interval = setTimeout(() => {
            setActiveSlider((prev) => (prev === 4 ? 1 : prev + 1));
        }, 10000);

        // Cleanup the interval
        return () => clearTimeout(interval);
    }, [activeSlider]);
    return (
        <div>
            <div className='flex justify-center'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='tracking-widest font-bold text-blue-500' data-aos="fade-up"
                        data-aos-duration="1000">TECHNOLOGY BUILT FOR YOU</p>
                    <h1 className='text-6xl mt-5' data-aos="fade-up"
                        data-aos-duration="2000">The future of finance</h1>
                </div>

            </div>
            {/* Button for slider control start */}
            <div className="flex flex-wrap justify-center">
                <div className="flex items-center gap-2 absolute font-bold mt-8">
                    <button
                        className={`w-56 h-12 rounded-3xl text-[#0055ec] ${activeSlider === 1 ? "bg-[#b9d9ff] duration-300" : 'text-black hover:bg-[#f5faff] transition-all duration-300'}`}
                        onClick={() => setActiveSlider(1)}
                    >
                        Customer focused
                    </button>
                    
                    <button
                       className={`w-56 h-12 rounded-3xl text-[#0055ec] ${activeSlider === 2 ? "bg-[#b9d9ff] duration-300" : 'text-black hover:bg-[#f5faff] transition-all duration-300'}`}
                        onClick={() => setActiveSlider(2)}
                    >
                        Agile and adaptable
                    </button>
                    
                    <button
                        className={`w-56 h-12 rounded-3xl text-[#0055ec] ${activeSlider === 3 ? "bg-[#b9d9ff] duration-300" : 'text-black hover:bg-[#f5faff] transition-all duration-300'}`}
                        onClick={() => setActiveSlider(3)}
                    >
                       Compliance ready
                    </button>
                    <button
                       className={`w-56 h-12 rounded-3xl text-[#0055ec] ${activeSlider === 4 ? "bg-[#b9d9ff] duration-300" : 'text-black hover:bg-[#f5faff] transition-all duration-300'}`}
                        onClick={() => setActiveSlider(4)}
                    >
                       Secure and safe
                    </button>
                </div>
            </div>

            {/* Button for slider control end */}
            <div className='flex justify-center mt-10'>
     
            <div className=' w-[1150px] overflow-hidden p-10'>


                <div className='flex flex-col items-center justify-center mt-5'>
                    <div className={`w-[1100px] flex h-[480px] animate__animated animate__backInRight  justify-between rounded-3xl shadow-xl shadow-[#1a84ee2d] p-12 ${activeSlider === 1 ? 'block' : 'hidden'}`}>
                        <div className="w-[50%]">
                            <p className=" font-bold text-blue-500 uppercase tracking-widest">
                                Customer focused
                            </p>
                            <h1 className="text-4xl mt-5">
                                Purpose-build financial <br /> services
                            </h1>

                            <p className=" text-[#002e6f] font-bold mt-5">
                                AnyTech is revolutionizing financial technology by introducing
                                innovative and real-time transaction account processing
                                capabilities, specifically designed for retail financial services.
                            </p>
                            <p className="text-[#002e6fb2] mt-5">
                                Our modern approach surpasses traditional banking and card
                                processing systems, empowering you with the most advanced technology
                                for lasting success.
                            </p>
                        </div>
                        <div className='w-[50%] flex justify-end'>
                            <img className='w-[450px] h-[380px] rounded-3xl' src={img1} alt="" />
                        </div>
                    </div>

                    <div className={`w-[1100px] flex h-[480px] animate__animated animate__backInRight justify-between rounded-3xl shadow-xl shadow-[#1a84ee2d] p-12 ${activeSlider === 2 ? 'block' : 'hidden'}`}>
                        <div className="w-[50%]">
                            <p className=" font-bold text-blue-500 uppercase tracking-widest">
                                Customer focused
                            </p>
                            <h1 className="text-4xl mt-5">
                                Purpose-build financial <br /> services
                            </h1>

                            <p className=" text-[#002e6f] font-bold mt-5">
                                AnyTech is revolutionizing financial technology by introducing
                                innovative and real-time transaction account processing
                                capabilities, specifically designed for retail financial services.
                            </p>
                            <p className="text-[#002e6fb2] mt-5">
                                Our modern approach surpasses traditional banking and card
                                processing systems, empowering you with the most advanced technology
                                for lasting success.
                            </p>
                        </div>
                        <div className='w-[50%] flex justify-end'>
                            <img className='w-[450px] h-[380px] rounded-3xl' src={img1} alt="" />
                        </div>
                    </div>

                    <div className={`w-[1100px] flex h-[480px] animate__animated animate__backInRight justify-between rounded-3xl shadow-xl shadow-[#1a84ee2d] p-12 ${activeSlider === 3 ? 'block' : 'hidden'}`}>
                        <div className="w-[50%]">
                            <p className=" font-bold text-blue-500 uppercase tracking-widest">
                                Customer focused
                            </p>
                            <h1 className="text-4xl mt-5">
                                Purpose-build financial <br /> services
                            </h1>

                            <p className=" text-[#002e6f] font-bold mt-5">
                                AnyTech is revolutionizing financial technology by introducing
                                innovative and real-time transaction account processing
                                capabilities, specifically designed for retail financial services.
                            </p>
                            <p className="text-[#002e6fb2] mt-5">
                                Our modern approach surpasses traditional banking and card
                                processing systems, empowering you with the most advanced technology
                                for lasting success.
                            </p>
                        </div>
                        <div className='w-[50%] flex justify-end'>
                            <img className='w-[450px] h-[380px] rounded-3xl' src={img1} alt="" />
                        </div>
                    </div>

                    <div className={`w-[1100px] flex h-[480px] animate__animated animate__backInRight justify-between rounded-3xl shadow-xl shadow-[#1a84ee2d] p-12 ${activeSlider === 4 ? 'block' : 'hidden'}`}>
                        <div className="w-[50%]">
                            <p className=" font-bold text-blue-500 uppercase tracking-widest">
                                Customer focused
                            </p>
                            <h1 className="text-4xl mt-5">
                                Purpose-build financial <br /> services
                            </h1>

                            <p className=" text-[#002e6f] font-bold mt-5">
                                AnyTech is revolutionizing financial technology by introducing
                                innovative and real-time transaction account processing
                                capabilities, specifically designed for retail financial services.
                            </p>
                            <p className="text-[#002e6fb2] mt-5">
                                Our modern approach surpasses traditional banking and card
                                processing systems, empowering you with the most advanced technology
                                for lasting success.
                            </p>
                        </div>
                        <div className='w-[50%] flex justify-end'>
                            <img className='w-[450px] h-[380px] rounded-3xl' src={img1} alt="" />
                        </div>
                    </div>
                </div>

              
            </div>
                  
            </div>
            <svg className="undefined max-h-[240px] md:my-sm my-lg w-full min-h-[60px]" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1920 280" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.7" d="M-240 0L1680 0L-240 280L-240 0Z" fill="url(#paint0_linear_6055_471)"></path><defs><linearGradient id="paint0_linear_6055_471" x1="458.5" y1="1561.14" x2="392.705" y2="52.1879" gradientUnits="userSpaceOnUse"><stop stopColor="#1F80F0"></stop><stop offset="1" stopColor="#1F80F0" stopOpacity="0"></stop></linearGradient></defs></svg> 
        </div>
    )
}

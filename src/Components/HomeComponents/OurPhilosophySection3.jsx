// eslint-disable-next-line no-unused-vars
import React from 'react'
import bg from "../../assets/backgrounds-20250201T092151Z-001/backgrounds/bg.avif"
import { FaDiagramProject } from 'react-icons/fa6'
import { FaLightbulb } from 'react-icons/fa'
import { HiCpuChip } from 'react-icons/hi2'
export default function OurPhilosophySection3() {
    return (
        <div>
            <div className='flex justify-center'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='tracking-widest font-bold text-blue-500' data-aos="fade-up"
                        data-aos-duration="1000">OUR PHILOSOPHY</p>
                    <h1 className='text-6xl mt-5' data-aos="fade-up"
                        data-aos-duration="2000">Human-centred innovation</h1>
                </div>

            </div>
            <div className='flex justify-center mt-10 mb-10'>
                <img data-aos="fade-up"
                    data-aos-duration="3000" className='w-[1100px] rounded-3xl' src={bg} alt="" />
            </div>

            {/* 3 cards  */}
            <div className='flex flex-wrap gap-8 justify-center mb-20'>
               <div className="bg-[#f8fcff] rounded-lg shadow-md p-6 w-[350px]" data-aos="fade-up"
                    data-aos-duration="1000"> {/* Card container */}
                <div className="flex  mb-4"> {/* Icon container */}
                    <div className="bg-[#e9f3ff] rounded-full h-12 w-12 flex items-center justify-center"> {/* Icon background */}
                        <FaDiagramProject className="text-[#002152] text-2xl" />
                    </div>
                </div>
                <h3 className="text-xl font-semibold  mb-2"> {/* Title */}
                    Full-suite solutions
                </h3>
                <p className="text-gray-600"> {/* Description */}
                    Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.
                </p>
            </div> 
            <div className="bg-[#f8fcff] rounded-lg shadow-md p-6 w-[350px]" data-aos="fade-up"
                    data-aos-duration="2000"> {/* Card container */}
                <div className="flex  mb-4"> {/* Icon container */}
                    <div className="bg-[#d6f8f9] rounded-full h-12 w-12 flex items-center justify-center"> {/* Icon background */}
                        <FaLightbulb  className="text-[#002152] text-2xl" />
                    </div>
                </div>
                <h3 className="text-xl font-semibold  mb-2"> {/* Title */}
                Simplify the complex
                </h3>
                <p className="text-gray-600"> {/* Description */}
                Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.
                </p>
            </div> 
            <div className="bg-[#f8fcff] rounded-lg shadow-md p-6 w-[350px]" data-aos="fade-up"
                    data-aos-duration="3000"> {/* Card container */}
                <div className="flex  mb-4"> {/* Icon container */}
                    <div className="bg-[#ffe2d5] rounded-full h-12 w-12 flex items-center justify-center"> {/* Icon background */}
                        <HiCpuChip  className="text-[#002152] text-2xl" />
                    </div>
                </div>
                <h3 className="text-xl font-semibold  mb-2"> {/* Title */}
                Cutting-edge tech
                </h3>
                <p className="text-gray-600"> {/* Description */}
                We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.
                </p>
            </div> 
            </div>
            
        </div>
    )
}

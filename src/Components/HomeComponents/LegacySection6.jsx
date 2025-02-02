// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import bg1 from "../../assets/backgrounds-20250201T092151Z-001/backgrounds/WaveLinesDesktop3.svg";
import bg2 from "../../assets/backgrounds-20250201T092151Z-001/backgrounds/WaveLinesDesktop4.svg";
import bg3 from "../../assets/backgrounds-20250201T092151Z-001/backgrounds/WaveLinesDesktop4.svg";
import bg4 from "../../assets/backgrounds-20250201T092151Z-001/backgrounds/WaveLinesDesktop4.svg";
import bg5 from "../../assets/backgrounds-20250201T092151Z-001/backgrounds/WaveLinesDesktop4.svg";

export default function LegacySection6() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ['.bg1', '.bg2', '.bg3'],
        { x: "100vw", y: "-100vh", opacity: 0 },
        { x: "0", y: "0", opacity: 1, duration: 2, ease: "power3.out" }
      );
      gsap.fromTo(
        ['.bg4', '.bg5'],
        { x: "-100vw", y: "-100vh", opacity: 0 },
        { x: "0", y: "0", opacity: 1, duration: 2, ease: "power3.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    const xPercent = (clientX / width - 0.5) * 20;
    const yPercent = (clientY / height - 0.5) * 20;

    gsap.to(['.bg1', '.bg2', '.bg3'], { x: -xPercent, y: -yPercent, duration: 2, ease: "power2.out" });
    gsap.to(['.bg4', '.bg5'], { x: xPercent, y: yPercent, duration: 2, ease: "power2.out" });
  };

  return (
    <div ref={containerRef} className="relative overflow-hidden" onMouseMove={handleMouseMove}>
      <div className="bg-white z-[50] border absolute w-full h-[300px] -top-20"
        style={{ clipPath: "polygon(0 17%, 100% 18%, 100% 100%, 0 35%)" }}>
      </div>
      
      <div className="min-h-[500px] bg-gradient-to-b from-[#005bc4] to-[#1a85ee] relative z-20"></div>
      <div className='absolute z-30 top-0 w-[100vw] h-[500px] bg1'>
        <img className='absolute w-full h-full z-50' src={bg1} alt="" />
      </div>
      <div className='absolute z-30 top-0 w-[100vw] h-[500px] bg2'>
        <img className='absolute w-full h-full z-50' src={bg2} alt="" />
      </div>
      <div className='absolute z-30 top-0 w-[80vw] h-[500px] bg3'>
        <img className='absolute w-full h-full z-50' src={bg3} alt="" />
      </div>
      <div className='absolute z-30 top-0 w-[70vw] h-[200px] bg4'>
        <img className='absolute w-full h-full z-50' src={bg4} alt="" />
      </div>
      <div className='absolute z-30 top-0 w-[30vw] h-[200px] bg5'>
        <img className='absolute w-full h-full z-50' src={bg5} alt="" />
      </div>
    </div>
  );
}

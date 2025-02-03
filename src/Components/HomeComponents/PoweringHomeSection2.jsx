// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import women from "../../assets/person/women3.avif";
import icon1 from "../../assets/icons-20250201T092212Z-001/icon1.svg";
import icon2 from "../../assets/icons-20250201T092212Z-001/icon2.svg";
import icon3 from "../../assets/icons-20250201T092212Z-001/icon3.svg";
import bg1 from "../../assets/frames-20250201T092203Z-001/frames/founder/2.svg";
import bg2 from "../../assets/frames-20250201T092203Z-001/frames/founder/3.svg";
import bg3 from "../../assets/frames-20250201T092203Z-001/frames/founder/2.svg";
import bg4 from "../../assets/frames-20250201T092203Z-001/frames/founder/2.svg";

gsap.registerPlugin(ScrollTrigger);

export default function PoweringHomeSection2() {
  const sectionRef = useRef(null);
  const bg1Ref = useRef(null);
  const bg2Ref = useRef(null);
  const bg3Ref = useRef(null);
  const bg4Ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate BG1 & BG2 (move downward)
      gsap.to([bg1Ref.current, bg2Ref.current], {
        y: 50, // Moves down smoothly
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // Animate BG3 & BG4 (move upward)
      gsap.to([bg3Ref.current, bg4Ref.current], {
        y: -100, // Moves up smoothly
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="lg:min-h-[110vh] flex justify-center flex-col items-center overflow-hidden">
      <div className="lg:w-[1100px] lg:h-[600px] lg:flex items-center px-5">
        <div className="lg:w-[50%] " data-aos="fade-right"
     data-aos-duration="3000">
          <p className="lg:text-lg text-sm font-bold text-blue-500 tracking-widest">
            POWERING THE FUTURE OF FINANCE
          </p>
          <h1 className="lg:text-6xl text-3xl mt-5">
            Uncovering new <br /> ways to delight <br /> customers
          </h1>

          <p className="text-lg text-[#002e6f] font-bold mt-5 hidden lg:block">
            AnyTech is revolutionizing financial technology by introducing
            innovative and real-time transaction account processing
            capabilities, specifically designed for retail financial services.
          </p>
          <p className="text-[#002e6fb2] mt-5 hidden lg:block">
            Our modern approach surpasses traditional banking and card
            processing systems, empowering you with the most advanced technology
            for lasting success.
          </p>
        </div>

        <div className="lg:w-[50%] h-full flex justify-center relative " data-aos="fade-left"
     data-aos-duration="3000"> 
          {/* Background Images (TOP) */}
          <div className="absolute flex">
            <img
              ref={bg2Ref}
              className="lg:w-56 w-40 rotate-180 mr-24"
              src={bg2}
              alt=""
            />
            <div className="flex" >
              <img ref={bg1Ref} className="lg:w-40 w-20 " src={bg1} alt="" />
              <img ref={bg1Ref} className="lg:w-40 w-20 absolute lg:left-[240px] left-[150px]" src={bg1} alt="" />
            </div>
          </div>

          {/* Floating Icons */}
          <img
            src={icon1}
            className="absolute lg:mr-[400px] mr-[240px] mt-[125px] z-20 lg:mt-[160px] w-14 lg:w-[75px] animate-floating-icon1"
            alt=""
          />
          <img
            src={icon2}
            className="absolute lg:ml-[400px] z-20 lg:mt-[110px] lg:w-[120px] w-24 ml-[235px] mt-[100px] animate-floating-icon2"
            alt=""
          />
          <img
            src={icon3}
            className="absolute lg:mr-[220px] z-20 lg:mt-[260px] mt-[180px] mr-[135px] w-16 lg:w-[90px] animate-floating-icon3"
            alt=""
          />

          {/* Woman Image */}
          <img
            className="lg:w-[400px] w-[240px] h-[295px] lg:h-[500px] mt-[75px] z-10 shadow-2xl shadow-[#1e7bed7c]"
            src={women}
            alt=""
          />

          {/* Bottom Background Images */}
          <div className="lg:mt-[500px] mt-[360px] flex z-20 lg:h-[200px] lg:w-[500px] w-[300px] pr-20 absolute">
            <img ref={bg3Ref} className="lg:w-40 w-24 absolute z-20" src={bg3} alt="" />
            <img
              ref={bg4Ref}
              className="lg:w-48 w-24 absolute z-20 lg:ml-[360px] ml-[200px] lg:mt-10 mt-12"
              src={bg4}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="lg:hidden flex flex-col items-center px-5"data-aos="fade-right"
     data-aos-duration="3000">
      <p className="text-sm text-[#002e6f] font-bold mt-5">
            AnyTech is revolutionizing financial technology by introducing
            innovative and real-time transaction account processing
            capabilities, specifically designed for retail financial services.
          </p>
          <p className="text-[#002e6fb2] text-sm mt-5">
            Our modern approach surpasses traditional banking and card
            processing systems, empowering you with the most advanced technology
            for lasting success.
          </p>
      </div>
      <svg className="undefined max-h-[240px] md:my-sm my-lg w-full min-h-[60px]" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1920 280" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.7" d="M-240 0L1680 0L-240 280L-240 0Z" fill="url(#paint0_linear_6055_471)"></path><defs><linearGradient id="paint0_linear_6055_471" x1="458.5" y1="1561.14" x2="392.705" y2="52.1879" gradientUnits="userSpaceOnUse"><stop stopColor="#1F80F0"></stop><stop offset="1" stopColor="#1F80F0" stopOpacity="0"></stop></linearGradient></defs></svg>

    </div>
  );
}

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
    <div ref={sectionRef} className="min-h-[110vh] flex justify-center flex-col items-center">
      <div className="w-[1100px] h-[600px] flex items-center ">
        <div className="w-[50%] ">
          <p className="text-lg font-bold text-blue-500">
            POWERING THE FUTURE OF FINANCE
          </p>
          <h1 className="text-6xl mt-5">
            Uncovering new <br /> ways to delight <br /> customers
          </h1>

          <p className="text-lg text-[#002e6f] font-bold mt-5">
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

        <div className="w-[50%] h-full flex justify-center relative ">
          {/* Background Images (TOP) */}
          <div className="absolute flex">
            <img
              ref={bg2Ref}
              className="w-56 rotate-180 mr-24"
              src={bg2}
              alt=""
            />
            <div className="flex">
              <img ref={bg1Ref} className="w-40 absolute" src={bg1} alt="" />
              <img ref={bg1Ref} className="w-40 mb-20" src={bg1} alt="" />
            </div>
          </div>

          {/* Floating Icons */}
          <img
            src={icon1}
            className="absolute mr-[400px] z-20 mt-[160px] animate-floating-icon1"
            alt=""
          />
          <img
            src={icon2}
            className="absolute ml-[400px] z-20 mt-[110px] animate-floating-icon2"
            alt=""
          />
          <img
            src={icon3}
            className="absolute mr-[220px] z-20 mt-[260px] animate-floating-icon3"
            alt=""
          />

          {/* Woman Image */}
          <img
            className="w-[400px] h-[500px] mt-[75px] z-10 shadow-2xl shadow-[#1e7bed7c]"
            src={women}
            alt=""
          />

          {/* Bottom Background Images */}
          <div className="mt-[500px] flex z-20 h-[200px] w-[500px] pr-20 absolute">
            <img ref={bg3Ref} className="w-40 absolute z-20" src={bg3} alt="" />
            <img
              ref={bg4Ref}
              className="w-28 absolute z-20 ml-[360px] mt-10"
              src={bg4}
              alt=""
            />
          </div>
        </div>
      </div>
      <svg className="undefined max-h-[240px] md:my-sm my-lg w-full min-h-[60px]" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1920 280" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.7" d="M-240 0L1680 0L-240 280L-240 0Z" fill="url(#paint0_linear_6055_471)"></path><defs><linearGradient id="paint0_linear_6055_471" x1="458.5" y1="1561.14" x2="392.705" y2="52.1879" gradientUnits="userSpaceOnUse"><stop stopColor="#1F80F0"></stop><stop offset="1" stopColor="#1F80F0" stopOpacity="0"></stop></linearGradient></defs></svg>

    </div>
  );
}

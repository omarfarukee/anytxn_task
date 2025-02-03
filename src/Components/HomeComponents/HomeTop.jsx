/* eslint-disable react-hooks/exhaustive-deps */

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import women from "../../assets/person/women2.jpg";
import bg1 from "../../assets/backgrounds-20250201T092151Z-001/backgrounds/WaveLinesDesktop3.svg";
import bg2 from "../../assets/backgrounds-20250201T092151Z-001/backgrounds/WaveLinesDesktop4.svg";
import bg3 from "../../assets/backgrounds-20250201T092151Z-001/backgrounds/WaveLinesDesktop3.svg";
import bg4 from "../../assets/frames-20250201T092203Z-001/frames/founder/2.svg";
import bg5 from "../../assets/frames-20250201T092203Z-001/frames/founder/2.svg";
import { FaAngleRight } from "react-icons/fa";

export default function HomeTop() {
    const bg1Ref = useRef(null);
    const bg2Ref = useRef(null);
    const bg3Ref = useRef(null);
    const bg4Ref = useRef(null);
    const bg5Ref = useRef(null);
    const womenRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        let animationComplete = false; // Prevent mousemove before animation ends
    
        // Set initial positions
        gsap.set(bg1Ref.current, { x: "10%", y: "-10%" });
        gsap.set(bg2Ref.current, { x: "12%", y: "-12%" });
        gsap.set(bg3Ref.current, { x: "-12%", y: "-15%" });
        gsap.set(bg4Ref.current, { x: "-14%", y: "-18%" });
        gsap.set(bg5Ref.current, { x: "-16%", y: "-20%" });
        gsap.set(womenRef.current, { x: "8%" });
    
        // Timeline for intro animation
        const tl = gsap.timeline({
            onComplete: () => { animationComplete = true; } // Enable 3D effect after animation
        });
    
        tl.to([bg3Ref.current, bg4Ref.current, bg5Ref.current], {
            x: "0%",
            y: "0%",
            duration: 3,
            ease: "power3.out",
        })
        .to([bg1Ref.current, bg2Ref.current, womenRef.current], {
            x: "0%",
            y: "0%",
            duration: 2.5,
            ease: "power3.out",
        }, "-=1.2");
    
        // Mousemove Parallax Effect (3D Effect)
        const handleMouseMove = (event) => {
            if (!animationComplete) return; // Ignore mousemove until animation is done
    
            const { clientX, clientY } = event;
            const { innerWidth, innerHeight } = window;
    
            const moveX = (clientX / innerWidth - 0.5) * 30;
            const moveY = (clientY / innerHeight - 0.5) * 30;
    
            gsap.to(bg1Ref.current, { x: -moveX * 0.8, y: moveY * 0.3, duration: 0.5 });
            gsap.to(bg2Ref.current, { x: -moveX * 0.6, y: moveY * 0.2, duration: 0.5 });
            gsap.to(bg3Ref.current, { x: moveX * 0.8, y: -moveY * 0.3, duration: 0.5 });
            gsap.to(bg4Ref.current, { x: moveX * 0.7, y: -moveY * 0.2, duration: 0.5 });
            gsap.to(bg5Ref.current, { x: moveX * 0.6, y: -moveY * 0.1, duration: 0.5 });
        };
    
        containerRef.current.addEventListener("mousemove", handleMouseMove);
    
        return () => {
            containerRef.current?.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    

    return (
        <div className="overflow-hidden relative" ref={containerRef}>

            <div className="absolute z-[60] right-0  top-0 w-[400px] h-[150px] pointer-events-none overflow-visible">
                <div className="absolute right-[-30px] top-[-20px] w-[400px] h-[150px] bg-[#1a85ee]  blur-[40px] rounded-full"></div>
            </div>


            {/* Blue Gradient Background */}
            <div
                className="min-h-[100vh] bg-gradient-to-b from-[#005bc4] to-[#1a85ee] relative z-20"
                style={{ clipPath: "polygon(0 0, 82% 0, 37% 100%, 0% 100%)" }}
            >
            </div>

            <div className="z-[70] absolute top-0 h-[100vh] w-[60%] flex items-end justify-end ">
                <div className="flex flex-col items-start  h-screen pt-[20%] pr-5">
                    <div className="overflow-hidden"><h1 className="text-[85px] leading-none  text-white animate__animated animate__fadeInUp">Embrace the <br />
                        future of finance</h1>
                    </div>
                    <div className="overflow-hidden">
                        <p className="w-[600px] mt-5 text-white font-bold animate__animated animate__fadeInUp">Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation</p>
                    </div>
                    <div className="overflow-hidden">
                        <button className="w-56 animate__animated animate__fadeInUp flex items-center justify-center gap-0 hover:gap-3 transition-all duration-300 mt-8 py-4 rounded-md bg-[#fe8b53] text-white font-bold text-lg shadow-xl">Reach Out to us <p><FaAngleRight /></p> </button>
                    </div>
                    
                </div>

            </div>    <div className="z-[70] absolute top-0 h-[100vh] w-[60%] flex items-end justify-end ">
                <div className="flex flex-col items-start  h-screen pt-[20%] pr-5">
                    <div className="overflow-hidden"><h1 className="text-[85px] leading-none  text-white animate__animated animate__fadeInUp">Embrace the <br />
                        future of finance</h1>
                    </div>
                    <div className="overflow-hidden">
                        <p className="w-[600px] mt-5 text-white font-bold animate__animated animate__fadeInUp">Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation</p>
                    </div>
                    <div className="overflow-hidden">
                        <button className="w-56 animate__animated animate__fadeInUp flex items-center justify-center gap-0 hover:gap-3 transition-all duration-300 mt-8 py-4 rounded-md bg-[#fe8b53] text-white font-bold text-lg shadow-xl">Reach Out to us <p><FaAngleRight /></p> </button>
                    </div>
                    
                </div>

            </div>

            {/* Background Images */}
            <div className="absolute w-[120vw] h-[100vh] top-0 z-30" ref={bg1Ref}>
                <img className="absolute h-full w-full right-[10%] top-0 z-30" src={bg1} alt="" />
            </div>
            <div className="absolute w-[100vw] h-[100vh] top-0 z-30" ref={bg2Ref}>
                <img className="absolute h-full w-full right-[30%] top-0 z-30" src={bg2} alt="" />
            </div>
            <div className="absolute w-[100vw] h-[100vh] top-[-30%] z-30" ref={bg3Ref}>
                <img className="absolute h-full w-full right-[35%] top-0 z-30" src={bg3} alt="" />
            </div>
            <div className="absolute w-[100vw] h-[100vh] top-[0%] z-30" ref={bg4Ref}>
                <img className="absolute h-full w-full right-[20%] top-0 z-30" src={bg4} alt="" />
            </div>
            <div className="absolute w-[200px] h-[100vh] overflow-hidden top-[0%] z-30" ref={bg5Ref}>
                <img className="absolute h-full w-full right-[15%] top-[-8%] z-30" src={bg5} alt="" />
            </div>

            {/* Women Image (Visible but moves left after delay) */}
            <img
                src={women}
                ref={womenRef}
                className="absolute bottom-0 left-[30%] top-[-100px] object-cover bg-no-repeat w-full z-10"
                alt=""
            />

            {/* White Polygon Div */}
            <div
                className="bg-white z-[50] w-full absolute bottom-0 h-[300px]"
                style={{ clipPath: "polygon(0 95%, 100% 60%, 100% 100%, 0 100%)" }}
            ></div>
        </div>
    );
}

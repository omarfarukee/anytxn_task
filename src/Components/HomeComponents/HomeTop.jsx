// // eslint-disable-next-line no-unused-vars
// import React from "react";
// import women from "../../assets/person/women2.jpg";
// import bg1 from "../../assets/backgrounds-20250201T092151Z-001/backgrounds/WaveLinesDesktop3.svg";
// import bg2 from "../../assets/backgrounds-20250201T092151Z-001/backgrounds/WaveLinesDesktop4.svg";
// import bg3 from "../../assets/backgrounds-20250201T092151Z-001/backgrounds/WaveLinesDesktop3.svg";
// import bg4 from "../../assets/frames-20250201T092203Z-001/frames/founder/2.svg";

// export default function HomeTop() {
//     return (
//         <div className="overflow-hidden relative">
//             {/* Blue Gradient Background */}
//             <div
//                 className="min-h-[100vh] bg-gradient-to-b from-[#005bc4] to-[#1a85ee] relative z-20"
//                 style={{ clipPath: "polygon(0 0, 79% 0, 37% 100%, 0% 100%)" }}
//             ></div>

//             {/* 1st Wave Line BG (Now Moved Up) */}
//             <div className="w-[120vw] h-[100vh] overflow-hidden  absolute top-0  z-50">
//                 <img
//                     className="absolute h-full w-full right-[15%] top-0 z-50"
//                     src={bg1}
//                     alt=""
//                 />
//             </div>

//             <div className="w-[100vw] h-[100vh] overflow-hidden border absolute top-0 border-red-500 z-50">
//                 <img
//                     className="absolute h-full w-full right-[35%]  top-0 z-50"
//                     src={bg2}
//                     alt=""
//                 />
//             </div>
//             <div className="w-[100vw] h-[100vh] overflow-hidden absolute bottom-[30%] z-50">
//                 <img
//                     className="absolute  h-full w-full right-[35%]    top-0 z-50"
//                     src={bg3}
//                     alt=""
//                 />
//             </div>
//             <div className="w-[100vw] h-[100vh] overflow-hidden absolute bottom-[30%]  z-50">
//                 <img
//                     className="absolute h-full w-full right-[25%]    top-0 z-50"
//                     src={bg4}
//                     alt=""
//                 />
//             </div>
//             <div className="w-[200px] h-[100vh] overflow-hidden absolute bottom-[30%] z-50">
//                 <img
//                     className="absolute h-full w-full right-[15%]    top-[-8%] z-50"
//                     src={bg4}
//                     alt=""
//                 />
//             </div>
            

//             {/* Women Image */}
//             <img
//                 src={women}
//                 className="absolute bottom-0 ml-[25%] top-[-100px] object-cover bg-no-repeat w-full z-10"
//                 alt=""
//             />

//             {/* White Polygon Div */}
//             <div
//                 className="bg-white z-[50] border w-full absolute bottom-0 h-[300px]"
//                 style={{ clipPath: "polygon(0 95%, 100% 49%, 100% 100%, 0 100%)" }}
//             ></div>
//         </div>
//     );
// }

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import women from "../../assets/person/women2.jpg";
import bg1 from "../../assets/backgrounds-20250201T092151Z-001/backgrounds/WaveLinesDesktop3.svg";
import bg2 from "../../assets/backgrounds-20250201T092151Z-001/backgrounds/WaveLinesDesktop4.svg";
import bg3 from "../../assets/backgrounds-20250201T092151Z-001/backgrounds/WaveLinesDesktop3.svg";
import bg4 from "../../assets/frames-20250201T092203Z-001/frames/founder/2.svg";

export default function HomeTop() {
    const bg1Ref = useRef(null);
    const bg2Ref = useRef(null);
    const bg3Ref = useRef(null);
    const bg4Ref = useRef(null);
    const womenRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        // Timeline for entrance animations
        const tl = gsap.timeline();

        // First animate bg3 and bg4
        tl.fromTo(
            [bg3Ref.current, bg4Ref.current],
            { x: "10%", opacity: 0 },
            { x: "0%", opacity: 1, duration: 1 }
        );

        // Then animate bg1, bg2, and the women image (after 1 sec delay)
        tl.fromTo(
            [bg1Ref.current, bg2Ref.current, womenRef.current],
            { x: "10%", opacity: 0 },
            { x: "0%", opacity: 1, duration: 1 },
            "+=1"
        );

        // Mousemove Parallax Effect
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            const { innerWidth, innerHeight } = window;

            const moveX = (clientX / innerWidth - 0.5) * 20; // Scale factor for X movement
            const moveY = (clientY / innerHeight - 0.5) * 20; // Scale factor for Y movement

            gsap.to([bg1Ref.current, bg2Ref.current, bg3Ref.current, bg4Ref.current], {
                x: moveX,
                y: moveY,
                duration: 0.5,
                ease: "power1.out",
            });
        };

        containerRef.current.addEventListener("mousemove", handleMouseMove);
        return () => {
            containerRef.current.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="overflow-hidden relative" ref={containerRef}>
            {/* Blue Gradient Background */}
            <div
                className="min-h-[100vh] bg-gradient-to-b from-[#005bc4] to-[#1a85ee] relative z-20"
                style={{ clipPath: "polygon(0 0, 79% 0, 37% 100%, 0% 100%)" }}
            ></div>

            {/* Background Images */}
            <div className="w-[120vw] h-[100vh] absolute top-0 z-50" ref={bg1Ref}>
                <img className="absolute h-full w-full right-[10%] top-0 z-50" src={bg1} alt="" />
            </div>
            <div className="w-[100vw] h-[100vh] absolute top-0 z-50" ref={bg2Ref}>
                <img className="absolute h-full w-full right-[30%] top-0 z-50" src={bg2} alt="" />
            </div>
            <div className="w-[100vw] h-[100vh] absolute bottom-[30%] z-50" ref={bg3Ref}>
                <img className="absolute h-full w-full right-[30%] top-0 z-50" src={bg3} alt="" />
            </div>
            <div className="w-[100vw] h-[100vh] absolute bottom-[30%] z-50" ref={bg4Ref}>
                <img className="absolute h-full w-full right-[20%] top-0 z-50" src={bg4} alt="" />
            </div>

            {/* Women Image */}
            <img
                src={women}
                ref={womenRef}
                className="absolute bottom-0 left-[20%] top-[-100px] object-cover bg-no-repeat w-full z-10"
                alt=""
            />

            {/* White Polygon Div */}
            <div
                className="bg-white z-[50] w-full absolute bottom-0 h-[300px]"
                style={{ clipPath: "polygon(0 95%, 100% 49%, 100% 100%, 0 100%)" }}
            ></div>
        </div>
    );
}

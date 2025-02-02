// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import logo1 from "../../assets/logo/logo2.webp"
import logo2 from "../../assets/logo/logo1.svg"
import { NavLink } from 'react-router';
import { GoChevronDown } from 'react-icons/go';
import { TbWorld } from 'react-icons/tb';
import { FaAngleRight } from 'react-icons/fa';
export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    // Effect to handle scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window?.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`fixed flex  justify-between px-32  items-center top-0 w-full z-[100] transition-all duration-300 h-20 ${isScrolled
                ? 'bg-[#ffffff] shadow-md h-[100px]'
                : 'bg-transparent'
                }`}
        >
            <div className=''>
                <div className=''>
                    <img className={`  ${isScrolled ? "w-40 block" : "w-40 hidden"}`} src={logo2} alt="Logo" />
                </div>
                <div className=''>
                    <img className={` ${isScrolled ? "w-40 hidden" : "w-40 block"}`} src={logo1} alt="Logo" />
                </div>
            </div>


            <div className='flex gap-10'>
                <div className="relative group">
                    <div
                        className={({ isActive }) =>
                            `flex items-center${isActive ? "nav-item active" : "nav-item"}`
                        }
                    >
                     <div className={`text-fontXsm ${isScrolled? "text-[#0050ed]":"text-white"}`}>
                        <button className='flex items-center mt-2'>Solutions <p><GoChevronDown /></p></button>
                        </div>   
                    </div>
                    {/* Submenu */}
                    <div className="submenu">
                        <NavLink
                            to="/shop/formal"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-red submenu-item"
                                    : "text-black submenu-item"
                            }
                        >
                            Men Formal
                        </NavLink>
                        <NavLink
                            to="/shop/sports"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-red submenu-item"
                                    : "text-black submenu-item"
                            }
                        >
                            Men Sports
                        </NavLink>
                        <NavLink
                            to="/shop/sneakers"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-red submenu-item"
                                    : "text-black submenu-item"
                            }
                        >
                            Men Sneakers

                        </NavLink>
                    </div>
                </div>

                <NavLink
                    to="/services"
                    className={({ isActive }) =>
                        isActive ? "nav-item active" : "nav-item"
                    }
                >
                    <a className={`text-fontXsm ${isScrolled ? "text-[#0050ed]" : "text-white"}`}>Services</a>
                </NavLink>

                <NavLink
                    to="/aboutUS"
                    className={({ isActive }) =>
                        isActive ? "nav-item active" : "nav-item"
                    }
                >
                    <a className={`text-fontXsm ${isScrolled? "text-[#0050ed]":"text-white"}`}>About us</a>
                </NavLink>

                <div className="relative group">
                    <div
                        className={({ isActive }) =>
                            `flex items-center${isActive ? "nav-item active" : "nav-item"}`
                        }
                    >
                        <div className={`text-fontXsm ${isScrolled ? "text-[#0050ed] border-white" : "text-white"}`}><button className='flex items-center border gap-2 px-2 h-10 rounded-3xl'><TbWorld /> EN <p><GoChevronDown /></p></button>
                        </div>
                    </div>
                    {/* Submenu */}
                    <div className="submenu">
                        <NavLink
                            to="/shop/formal"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-red submenu-item"
                                    : "text-black submenu-item"
                            }
                        >
                            a
                        </NavLink>
                        <NavLink
                            to="/shop/sports"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-red submenu-item"
                                    : "text-black submenu-item"
                            }
                        >
                            b
                        </NavLink>
                        <NavLink
                            to="/shop/sneakers"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-red submenu-item"
                                    : "text-black submenu-item"
                            }
                        >
                            c

                        </NavLink>
                    </div>
                </div>

            </div>

            <div className={`border rounded-lg ${isScrolled?"bg-[#fe8b53]":"bg-transparent"}`}>
                <button className={`flex text-white font-bold items-center gap-2 w-40 justify-center h-12 rounded-md ${isScrolled?"transition-all hover:gap-3 gap-0 duration-300 hover:shadow-lg":"hover:text-blue-500 hover:bg-white duration-300 transition-all hover:gap-3 gap-0"}`}> Contact us <FaAngleRight /></button>
            </div>
        </div>
    );
}
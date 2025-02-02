
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import logo1 from "../../assets/logo/logo2.webp"
import { NavLink } from 'react-router';
import { GoChevronDown } from 'react-icons/go';
import { TbWorld } from 'react-icons/tb';
import { FaAngleRight } from 'react-icons/fa';
export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    // Effect to handle scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`fixed flex justify-between px-20  items-center top-0 w-full z-[100] transition-all duration-300 h-20 ${isScrolled
                    ? 'bg-[#ffffff] shadow-md'
                    : 'bg-transparent'
                }`}
        >
            <div className=''>
                <img className='w-40' src={logo1} alt="Logo" />
            </div>

            <div className='flex gap-10'>
            <div className="relative group">
                <div
                    className={({ isActive }) =>
                        `flex items-center${isActive ? "nav-item active" : "nav-item"}`
                    }
                >
                    <button className='flex items-center mt-2'>Solutions <p><GoChevronDown /></p></button>
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
                <a className={`text-black text-fontXsm `}>Services</a>
            </NavLink>

            <NavLink
                to="/aboutUS"
                className={({ isActive }) =>
                    isActive ? "nav-item active" : "nav-item"
                }
            >
                <a className={`text-black text-fontXsm `}>About us</a>
            </NavLink>

            <div className="relative group">
                <div
                    className={({ isActive }) =>
                        `flex items-center${isActive ? "nav-item active" : "nav-item"}`
                    }
                >
                    <button className='flex items-center border gap-2 px-2 h-10 rounded-3xl'><TbWorld /> EN <p><GoChevronDown /></p></button>
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
            
            <div>
                <button className='flex items-center gap-2 px-4 h-14 rounded-md border text-lg '> Contact us <FaAngleRight  />                </button>
            </div>
        </div>
    );
}
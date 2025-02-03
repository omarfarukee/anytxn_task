// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import logo1 from "../../assets/logo/logo2.webp"
import logo2 from "../../assets/logo/logo1.svg"
import { Link, NavLink, useLocation } from 'react-router';
import { GoChevronDown } from 'react-icons/go';
import { TbWorld } from 'react-icons/tb';
import { FaAngleRight } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp, IoIosMenu, IoMdClose } from 'react-icons/io';
export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const location = useLocation(); // Get current route
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener safely
        return () => {
            if (handleScroll) {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);


    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    // Set navbar background based on route
    const getNavbarBackground = () => {
        if (location.pathname === "/services" || location.pathname === "/aboutUS") {
            return "bg-blue-500"; // Blue when on "/services"
        }
        return isScrolled ? "bg-[#ffffff] shadow-md h-[100px]" : "bg-transparent"; // Default behavior
    };



    // Toggle the modal open/close
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Toggle the submenu
    const toggleSubmenu = () => {
        setSubmenuOpen(!submenuOpen);
    };
    return (
        <main>
            <div
                className={`fixed lg:flex hidden  justify-between px-32  items-center top-0 w-full z-[100] transition-all duration-300 h-20 ${getNavbarBackground()}`}
            >
                <Link to="/">
                    <div className=''>
                        <img className={`  ${isScrolled ? "w-40 block" : "w-40 hidden"}`} src={logo2} alt="Logo" />
                    </div>
                    <div className=''>
                        <img className={` ${isScrolled ? "w-40 hidden" : "w-40 block"}`} src={logo1} alt="Logo" />
                    </div>
                </Link>


                <div className='flex gap-10'>
                    <div className="relative group">
                        <div
                            className={({ isActive }) =>
                                `flex items-center${isActive ? "nav-item active" : "nav-item"}`
                            }
                        >
                            <div className={`text-fontXsm ${isScrolled ? "text-[#0050ed]" : "text-white"}`}>
                                <button className='flex items-center mt-2'>Solutions <p><GoChevronDown /></p></button>
                            </div>
                        </div>
                        {/* Submenu */}
                        <div className="submenu">
                            <NavLink
                                to="/anyCaas"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-red submenu-item"
                                        : "text-black submenu-item"
                                }
                            >
                                Any Caas
                            </NavLink>
                            <NavLink
                                to="/anyBaas"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-red submenu-item"
                                        : "text-black submenu-item"
                                }
                            >
                                Any Baas
                            </NavLink>
                            <NavLink
                                to="/anyPaas"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-red submenu-item"
                                        : "text-black submenu-item"
                                }
                            >
                                Any Paas

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
                        <a className={`text-fontXsm ${isScrolled ? "text-[#0050ed]" : "text-white"}`}>About us</a>
                    </NavLink>

                    {/* language area */}
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

                <div className={`border rounded-lg ${isScrolled ? "bg-[#fe8b53]" : "bg-transparent"}`}>
                    <button className={`flex text-white font-bold items-center gap-2 w-40 justify-center h-12 rounded-md ${isScrolled ? "transition-all hover:gap-3 gap-0 duration-300 hover:shadow-lg" : "hover:text-blue-500 hover:bg-white duration-300 transition-all hover:gap-3 gap-0"}`}> Contact us <FaAngleRight /></button>
                </div>
            </div>


            <div className='lg:hidden block'>


                {/* Mobile Navbar */}
                <div className="fixed flex items-center justify-between px-6  bg-[#1f80f0] top-0 w-full z-[100] transition-all duration-300 h-20">
                    <div>
                        <img className="w-32" src={logo1} alt="Logo" />
                    </div>
                    {/* Toggle Menu Button */}
                    {isOpen ? (
                        <IoMdClose className="text-3xl text-white cursor-pointer" onClick={toggleMenu} />
                    ) : (
                        <IoIosMenu className="text-3xl text-white cursor-pointer" onClick={toggleMenu} />
                    )}
                </div>

                {/* Slide-in Modal */}
                <div
                    className={`fixed top-[80px] left-0 w-full min-h-1/2 bg-[#1f80f0] z-[99] transition-transform duration-500 ${isOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <div className="flex flex-col items-center justify-start h-full py-6 ">
                        {/* Solutions Menu Item with Dropdown */}
                        <div className="w-full px-6">
                            <button
                                className="flex items-center justify-between w-full text-white bg-blue-500 px-4 py-3 rounded-md"
                                onClick={toggleSubmenu}
                            >
                                Solutions
                                {submenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </button>

                            {/* Submenu (Dropdown) */}
                            <div
                                className={`mt-2 transition-all duration-300 overflow-hidden px-5 ${submenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <NavLink
                                    to="/solution1"
                                    className="block px-4 py-2 text-white bg-[#60626442] rounded-md"
                                    onClick={toggleMenu}
                                >
                                    Solution 1
                                </NavLink>
                                <NavLink
                                    to="/solution2"
                                    className="block px-4 py-2 text-white bg-[#60626442] rounded-md"
                                    onClick={toggleMenu}
                                >
                                    Solution 2
                                </NavLink>
                                <NavLink
                                    to="/solution3"
                                    className="block px-4 py-2 text-white bg-[#60626442] rounded-md"
                                    onClick={toggleMenu}
                                >
                                    Solution 3
                                </NavLink>
                            </div>
                        </div>

                        {/* Other Menu Items */}
                        <NavLink to="/services" className="w-full px-6 py-2 text-white" onClick={toggleMenu}>
                            Services
                        </NavLink>
                        <NavLink to="/about" className="w-full px-6 py-2 text-white" onClick={toggleMenu}>
                            About Us
                        </NavLink>
                        <NavLink to="/contact" className="w-full px-6 py-2 text-white" onClick={toggleMenu}>
                            Contact
                        </NavLink>
                    </div>
                </div>
            </div>
        </main>

    );
}
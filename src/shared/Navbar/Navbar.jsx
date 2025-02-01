
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import logo1 from "../../assets/logo/logo2.webp"
import { NavLink } from 'react-router';
import { GoChevronDown } from 'react-icons/go';
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
      className={`fixed flex border items-center top-0 w-full z-50 transition-all duration-300 h-24 ${
        isScrolled
          ? 'bg-[#ffffff] shadow-md'
          : 'bg-transparent'
      }`}
    >
       <div className='bg-black'>
         <img className='' src={logo1} alt="Logo" />
       </div>
       <div className="relative group">
                <div
                  className={({ isActive }) =>
                    `flex items-center${isActive ? "nav-item active" : "nav-item"}`
                  }
                >
                 <button className='flex items-center gap-2'>Solutions <p><GoChevronDown /></p></button> 
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
    </div>
  );
}
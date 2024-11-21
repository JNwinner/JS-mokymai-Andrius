import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="relative bg-[#16302D] text-[#EFF1EC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-32">
                    {/* Logo */}
                    <div className="logo">
                        <NavLink className="flex items-center gap-2" to="/">
                            <img src="/imgs/logo.png" alt="logo" />
                            <p className="font-krona text-xl">Manaus <span className="block text-3xl leading-7">Hotel</span></p>
                        </NavLink>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-4">
                        <li>
                            <NavLink className="font-krona neon-link" to="/" end>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="font-krona neon-link" to="/about-us">About Us</NavLink>
                        </li>
                        <li>
                            <NavLink className="font-krona neon-link" to="/bookings">Bookings</NavLink>
                        </li>
                        <li>
                            <NavLink className="font-krona neon-link" to="/what-to-do">What to do?</NavLink>
                        </li>
                        <li>
                            <NavLink className="font-krona neon-link" to="/contacts">Contacts</NavLink>
                        </li>
                    </ul>

                    {/* Hamburger Button */}
                    <button
                        className="md:hidden p-2 rounded-md hover:bg-[#2A4A46] focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {isOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute w-full bg-[#16302D] z-50`}>
                <ul className="px-4 pt-2 pb-4 space-y-4">
                    <li>
                        <NavLink 
                            className="font-krona neon-link block py-2" 
                            to="/" 
                            end
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className="font-krona neon-link block py-2" 
                            to="/about-us"
                            onClick={() => setIsOpen(false)}
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className="font-krona neon-link block py-2" 
                            to="/bookings"
                            onClick={() => setIsOpen(false)}
                        >
                            Bookings
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className="font-krona neon-link block py-2" 
                            to="/what-to-do"
                            onClick={() => setIsOpen(false)}
                        >
                            What to do?
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className="font-krona neon-link block py-2" 
                            to="/contacts"
                            onClick={() => setIsOpen(false)}
                        >
                            Contacts
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
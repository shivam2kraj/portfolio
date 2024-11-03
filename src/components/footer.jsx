
import React, { useContext } from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaPhone, FaMailBulk } from 'react-icons/fa';
import ThemeContext from '../context/themeContext';

const Footer = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <footer className={`py-8 ${theme === "light" ? "bg-[#64748b] text-white" : "bg-[#111827] text-white"}`}>
            {/* Centered Container for Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 rounded-md">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                    
                    {/* Logo and Copyright */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center space-x-1">
                            <div className="bg-[#072F57] w-2 h-6"></div>
                            <div className="bg-[#456381] w-2 h-6"></div>
                            <div className="bg-[#8FB7E1] w-2 h-6"></div>
                            <h1 className="text-2xl font-bold italic ml-2">Portfolio</h1>
                        </div> 
                        <p className="text-sm mt-2">© Shivam Raj</p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex space-x-12 md:space-x-20 mt-6 md:mt-0">
                        
                        <div className="flex flex-col items-center md:items-start">
                            <a href="#" className="text-sm mt-2 hover:underline">About</a>
                            <a href="#" className="text-sm hover:underline">Skills</a>
                            <a href="#" className="text-sm hover:underline">Experience</a>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <a href="#" className="text-sm mt-2 hover:underline">Projects</a>
                            <a href="#" className="text-sm hover:underline">Education</a>
                            <a href="#" className="text-sm hover:underline">Contact</a>

                        </div>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4 mt-6 md:mt-0">
                        <FaLinkedin className="hover:text-gray-400 cursor-pointer" size={20} />
                        <FaTwitter className="hover:text-gray-400 cursor-pointer" size={20} />
                        <FaFacebook className="hover:text-gray-400 cursor-pointer" size={20} />
                        <FaInstagram className="hover:text-gray-400 cursor-pointer" size={20} />
                        <FaPhone className="hover:text-gray-400 cursor-pointer" size={20} />
                        <FaMailBulk className="hover:text-gray-400 cursor-pointer" size={20} />
                        
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
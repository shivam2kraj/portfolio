
import React, { useContext } from "react";
import arrow_right from "../../assets/arrow_right.svg"
import { Link } from "react-router-dom";
import ThemeContext from '../../context/themeContext';

function Project() {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`${theme === "light" ? "bg-[#a5b4fc]" : "bg-[#6366f1]"} px-8 md:px-12 lg:px-20 xl:px-32 py-20 md:py-16`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white capitalize leading-tight font-semibold">
                My Projects
            </h1>
            <div className="flex flex-wrap mt-12 gap-8 justify-center lg:justify-start">
                <div className="w-full sm:w-[45%] lg:w-[31%] hover:scale-105 transition-all duration-300 relative h-auto bg-white rounded-lg px-4 py-6 shadow-lg">
                    <h1 className="text-xl font-semibold mt-2">Integrated Management System (ISM)</h1>
                    <p className="truncate">- Developed various modules, including audit, non-conformance, risk management, and more, while creating multiple screens.</p>
                    <p className="truncate">- Familiar with popular libraries and tools such as Redux, React Router, and Axios, handle routing.</p>
                    <p className="truncate">- Throughout the development process, I have integrated API calls into the UI components, allowing them to fetch and display real-time data from external sources.</p>
                    <p className="truncate">- Screens develops utilizing to manage the state, and handle props.</p>
                    <p className="truncate">- Implemented UI/UX enhancements, including responsive layouts, accessibility features.</p>
                    <p className="text-base font-semibold italic mt-4 mb-2">Skills Used:</p>
                    <div className="flex flex-wrap gap-3">
                        <p className={`px-3 py-1 text-sm ${theme === "light" ? "bg-[#64748b]" : "bg-[#111827]"} rounded-full text-white`}>Reactjs</p>
                        <p className={`px-3 py-1 text-sm ${theme === "light" ? "bg-[#64748b]" : "bg-[#111827]"} rounded-full text-white`}>HTML5</p>
                        <p className={`px-3 py-1 text-sm ${theme === "light" ? "bg-[#64748b]" : "bg-[#111827]"} rounded-full text-white`}>CSS3</p>
                        <p className={`px-3 py-1 text-sm ${theme === "light" ? "bg-[#64748b]" : "bg-[#111827]"} rounded-full text-white`}>Javascript</p>
                        <p className={`px-3 py-1 text-sm ${theme === "light" ? "bg-[#64748b]" : "bg-[#111827]"} rounded-full text-white`}>Redux</p>
                        <p className={`px-3 py-1 text-sm ${theme === "light" ? "bg-[#64748b]" : "bg-[#111827]"} rounded-full text-white`}>Restful Api</p>
                        <p className={`px-3 py-1 text-sm ${theme === "light" ? "bg-[#64748b]" : "bg-[#111827]"} rounded-full text-white`}>Postman</p>
                        <p className={`px-3 py-1 text-sm ${theme === "light" ? "bg-[#64748b]" : "bg-[#111827]"} rounded-full text-white`}>Bootstrap</p>
                    </div>
                    <Link to={'/'} className="absolute flex left-[69%] max-[670px]:left-[calc(100%-110px)] max-xl:left-[60%] max-lg:left-[60%] cursor-pointer bottom-0">
                        <p className="text-[14px] italic hover:mr-[8px] transition-all duration-300">Read More</p>
                        <img src={arrow_right} className="w-[24px]" alt=""></img>
                    </Link>
                </div>

                {/* Repeated project cards - adjust their content and details as needed */}
                <div className="w-full sm:w-[45%] lg:w-[31%] hover:scale-105 transition-all duration-300 relative h-auto bg-white rounded-lg px-4 py-6 shadow-lg">
                    <h1 className="text-xl font-semibold mt-2">Portfolio Website</h1>
                    <p className="truncate">- Developed various screen, included experience, project, about section, and more, while created multiple screens.</p>
                    <p className="truncate">- Familiar with popular libraries and tools such as React Router, and gsap, animation.</p>
                    <p className="truncate">- Throughout the development process, maked resuable component.</p>
                    <p className="truncate">- Screens develops utilizing to manage the state using context for dark and light mode, and hover effect like button.</p>
                    <p className="truncate">- Implemented UI/UX enhancements, including responsive layouts, accessibility features.</p>
                    <p className="text-base font-semibold italic mt-4 mb-2">Skills Used:</p>
                    <div className="flex flex-wrap gap-3">
                        <p className={`px-3 py-1 text-sm ${theme === "light" ? "bg-[#64748b]" : "bg-[#111827]"} rounded-full text-white`}>Reactjs</p>
                        <p className={`px-3 py-1 text-sm ${theme === "light" ? "bg-[#64748b]" : "bg-[#111827]"} rounded-full text-white`}>HTML5</p>
                        <p className={`px-3 py-1 text-sm ${theme === "light" ? "bg-[#64748b]" : "bg-[#111827]"} rounded-full text-white`}>Tailwind css</p>
                        <p className={`px-3 py-1 text-sm ${theme === "light" ? "bg-[#64748b]" : "bg-[#111827]"} rounded-full text-white`}>Javascript</p>
                        <p className={`px-3 py-1 text-sm ${theme === "light" ? "bg-[#64748b]" : "bg-[#111827]"} rounded-full text-white`}>Material ui</p>

                    </div>
                    <Link to={'/'} className="absolute flex left-[69%] max-[670px]:left-[calc(100%-110px)] max-xl:left-[60%] max-lg:left-[60%] cursor-pointer bottom-0">
                        <p className="text-[14px] italic hover:mr-[8px] transition-all duration-300">Read More</p>
                        <img src={arrow_right} className="w-[24px]" alt=""></img>
                    </Link>
                </div>
                <div className="w-full sm:w-[45%] lg:w-[31%] hover:scale-105 transition-all duration-300 relative h-auto bg-white rounded-lg px-4 py-6 shadow-lg">
                    <h1 className="text-xl font-semibold mt-2">Ecommerce Website</h1>
                    <p className="truncate">- This ecommerce website, users can be easily searching, filtering of shoes.
                    </p>
                    <p className="truncate">- In that solid understanding of React core concepts, such as efficient state management, Link, event handling, props, and resuable components.</p>
                    <p className="text-base font-semibold italic mt-4 mb-2">Skills Used:</p>
                    <div className="flex flex-wrap gap-3">
                        <p className={`px-3 py-1 text-sm ${theme === "light" ? "bg-[#64748b]" : "bg-[#111827]"} rounded-full text-white`}>Reactjs</p>
                        <p className={`px-3 py-1 text-sm ${theme === "light" ? "bg-[#64748b]" : "bg-[#111827]"} rounded-full text-white`}>HTML5</p>
                        <p className={`px-3 py-1 text-sm ${theme === "light" ? "bg-[#64748b]" : "bg-[#111827]"} rounded-full text-white`}>CSS3</p>
                        <p className={`px-3 py-1 text-sm ${theme === "light" ? "bg-[#64748b]" : "bg-[#111827]"} rounded-full text-white`}>Javascript</p>
                    </div>
                    <Link to={'/'} className="absolute flex left-[69%] max-[670px]:left-[calc(100%-110px)] max-xl:left-[60%] max-lg:left-[60%] cursor-pointer bottom-0">
                        <p className="text-[14px] italic hover:mr-[8px] transition-all duration-300">Read More</p>
                        <img src={arrow_right} className="w-[24px]" alt=""></img>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Project;

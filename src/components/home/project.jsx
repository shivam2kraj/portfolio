
import React, { useContext } from "react";
import ThemeContext from '../../context/themeContext';

function Project() {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`${theme === "light" ? "bg-[#a5b4fc]" : "bg-[#6366f1]"} px-8 md:px-12 lg:px-20 xl:px-32 py-25 md:py-16`}>
            <h1 className={`${theme === "light" ? "text-black" : "text-white"} text-4xl sm:text-5xl md:text-6xl lg:text-7xl capitalize leading-tight font-semibold py-[51px]`}>
                My Projects
            </h1>
            <div className="flex flex-wrap mt-12 gap-8 justify-center lg:justify-start">
                <div className="w-full sm:w-[45%] lg:w-[31%] hover:scale-105 transition-all duration-300 relative h-auto bg-white rounded-lg px-4 py-6 shadow-lg">
                    <h1 className="text-xl font-semibold mt-2">Integrated Management System (ISM)</h1>
                    <p>- Developed various modules, including audit, non-conformance, risk management, and more, while creating multiple screens.</p>
                    <p>- Familiar with popular libraries and tools such as Redux, React Router, and Axios, handle routing.</p>
                    <p>- Throughout the development process, I have integrated API calls into the UI components, allowing them to fetch and display real-time data from external sources.</p>
                    <p>- Screens develops utilizing to manage the state, and handle props.</p>
                    <p>- Implemented UI/UX enhancements, including responsive layouts, accessibility features.</p>
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

                </div>

                <div className="w-full sm:w-[45%] lg:w-[31%] hover:scale-105 transition-all duration-300 relative h-auto bg-white rounded-lg px-4 py-6 shadow-lg">
                    <h1 className="text-xl font-semibold mt-2">Portfolio Website</h1>
                    <p>- Developed various screen, included experience, project, about, section, and more, while created multiple screens.</p>
                    <p>- Familiar with popular libraries and tools such as React Router, and gsap, animation.</p>
                    <p>- Throughout the development process, maked resuable component.</p>
                    <p>- Screens develops utilizing to manage the state using context for dark and light mode, and hover effect like button.</p>
                    <p>- Implemented UI/UX enhancements, including responsive layouts, accessibility features.</p>
                    <p className="text-base font-semibold italic mt-4 mb-2">Skills Used:</p>
                    <div className="flex flex-wrap gap-3">
                        <p className={`px-3 py-1 text-sm ${theme === "light" ? "bg-[#64748b]" : "bg-[#111827]"} rounded-full text-white`}>Reactjs</p>
                        <p className={`px-3 py-1 text-sm ${theme === "light" ? "bg-[#64748b]" : "bg-[#111827]"} rounded-full text-white`}>HTML5</p>
                        <p className={`px-3 py-1 text-sm ${theme === "light" ? "bg-[#64748b]" : "bg-[#111827]"} rounded-full text-white`}>Tailwind css</p>
                        <p className={`px-3 py-1 text-sm ${theme === "light" ? "bg-[#64748b]" : "bg-[#111827]"} rounded-full text-white`}>Javascript</p>
                        <p className={`px-3 py-1 text-sm ${theme === "light" ? "bg-[#64748b]" : "bg-[#111827]"} rounded-full text-white`}>Material ui</p>

                    </div>

                </div>
                <div className="w-full sm:w-[45%] lg:w-[31%] hover:scale-105 transition-all duration-300 relative h-auto bg-white rounded-lg px-4 py-6 shadow-lg">
                    <h1 className="text-xl font-semibold mt-2">Ecommerce Website</h1>
                    <p>- This ecommerce website, users can be easily searching, filtering of shoes.
                    </p>
                    <p>- In that solid understanding of React core concepts, such as efficient state management, Link, event handling, props, and resuable components.</p>
                    <p className="text-base font-semibold italic mt-4 mb-2">Skills Used:</p>
                    <div className="flex flex-wrap gap-3">
                        <p className={`px-3 py-1 text-sm ${theme === "light" ? "bg-[#64748b]" : "bg-[#111827]"} rounded-full text-white`}>Reactjs</p>
                        <p className={`px-3 py-1 text-sm ${theme === "light" ? "bg-[#64748b]" : "bg-[#111827]"} rounded-full text-white`}>HTML5</p>
                        <p className={`px-3 py-1 text-sm ${theme === "light" ? "bg-[#64748b]" : "bg-[#111827]"} rounded-full text-white`}>CSS3</p>
                        <p className={`px-3 py-1 text-sm ${theme === "light" ? "bg-[#64748b]" : "bg-[#111827]"} rounded-full text-white`}>Javascript</p>
                    </div>

                </div>
            </div>

        </section>
    );
}

export default Project;

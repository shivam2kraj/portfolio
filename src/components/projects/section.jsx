import { Link } from "react-router-dom";
import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";

function Section() {

    const {theme} = useContext(ThemeContext);

    return (
            <section className={`${theme === "light" ? "text-black bg-white" : "text-white bg-[#a21caf]"} max-md:px-[40px] max-sm:px-[20px] max-sm:py-[51px] px-[80px] py-[101px]`}>

                <h1 className="text-[64px] max-md:text-[56px] max-sm:text-[44px] max-[500px]:text-[36px] capitalize leading-[120%] font-semibold">
                    Experience and skills:
                </h1>
                
                <h1 className="mt-[30px] text-[20px] font-bold font-cursive">
                Integrated Management System (ISM):
                </h1>
                <p className="mt-[10px] max-xl:w-full w-[1024px]">
                 Developed various modules, including audit, non-conformance, risk management, and more, while creating multiple screens.
                 Familiar with popular libraries and tools such as Redux, React Router, and Axios, handle routing. 
                 Throughout the development process, I have integrated API calls into the UI components, allowing them to fetch and display real-time data from external sources.
                 Screens develops utilizing to manage the state, and handle props.
                 Implemented UI/UX enhancements, including responsive layouts, accessibility features.
                </p>

                <h1 className="mt-[30px] text-[20px] font-bold font-cursive">
                Portfolio Website:
                </h1>
                <p className="mt-[10px] max-xl:w-full w-[1024px]">
                Developed various screen, included experience, project, about, section, and more, while created multiple screens.
                Familiar with popular libraries and tools such as React Router, and gsap, animation.
                Throughout the development process, maked resuable component. 
                Screens develops utilizing to manage the state using context for dark and light mode, and hover effect like button.
                Implemented UI/UX enhancements, including responsive layouts, accessibility features.  <Link to={'https://portfolio-website-peach-phi.vercel.app/'} target="_blank" className="underline">Click here</Link> to visit my project. <span className="font-medium"> Another Project </span>  <Link to={'https://portfolio-ten-rho.vercel.app/'} target="_blank" className="underline">Click here</Link> to visit my project.
                </p>
                <h1 className="mt-[30px] text-[20px] font-bold font-cursive">
                Ecommerce Website:
                </h1>
                <p className="mt-[10px] max-xl:w-full w-[1024px]">
                This ecommerce website, users can be easily searching, filtering of shoes.
                In that solid understanding of React core concepts, such as efficient state management, Link, event handling, props, and resuable components. <Link to={'https://shoes-ecommerce-beta.vercel.app/'} target="_blank" className="underline">Click here</Link> to visit my project.
                </p>
            </section>
    )
}

export default Section
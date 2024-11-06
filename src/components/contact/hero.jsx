import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";

function Hero() {

    const {theme} = useContext(ThemeContext);

    return (
        <main className={`${theme === "light" ? "text-black bg-[#e2e8f0]" : "text-white bg-[#52525b]"} 
        px-[80px] max-md:px-[40px] max-sm:px-[20px] h-[100vh] max-sm:h-[600px] relative pt-[250px] max-sm:pt-[150px]`}>
        <h1 className="text-[92px] w-[1050px] max-lg:text-[76px] max-md:text-[62px] max-sm:text-[56px] max-xl:w-full capitalize leading-[120%] font-semibold">
           Fillout the form below to get in touch with me
        </h1>
       </main>
    )
}

export default Hero
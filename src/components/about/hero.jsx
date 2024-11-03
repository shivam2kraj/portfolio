import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";

function Hero() {

    const {theme} = useContext(ThemeContext);

    return (
       <main className={`${theme === "light" ? "text-black bg-white" : "text-white bg-black"} 
       px-[80px] max-md:px-[40px] max-sm:px-[20px] h-[600px] max-[1100px]:h-auto max-[1100px]:pb-[50px] relative pt-[180px] max-md:pt-[120px]`}>
        <h1 className="text-[92px] w-[970px] max-lg:text-[76px] max-md:text-[62px] leading-[120%] max-sm:text-[56px] max-[1100px]:w-full capitalize font-semibold">
            Hi, <br/> i'm shivam raj, <br/>Reactjs Developer
            </h1>
       </main>
    )
}

export default Hero
import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";

function ProjectHero() {
   
    const {theme} = useContext(ThemeContext);

    return(
        <main className={`${theme === "light" ? "text-black bg-white" : "text-white bg-black"} 
        px-[80px] h-[700px] max-md:px-[40px] max-sm:px-[20px] relative pt-[180px] max-sm:pt-[120px]`}>
        <h1 className="text-[92px] max-lg:text-[76px] max-md:text-[62px] max-sm:text-[56px] w-[900px] max-xl:w-full capitalize leading-[120%] font-semibold">
           Learn more about my skill and experience through my project
        </h1>
       </main>
    )
}

export default ProjectHero
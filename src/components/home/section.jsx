import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../context/themeContext";

function Section() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`px-[80px] max-md:px-[40px] max-sm:px-[20px] ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      } flex flex-col items-center gap-[24px] py-[101px]`}
    >
      <h1
        className={`text-[64px] max-md:text-[56px] max-sm:text-[44px] max-[500px]:text-[36px] text-center w-[700px] max-md:w-full leading-[120%] font-medium animate-rotate-upward`}
      >
        Want to know more about me.
      </h1>
      <Link className="max-sm:w-full" to={"/about"}>
        <button
          className={`border-[1px] max-sm:w-full hover:shadow-[0px_0px_20px_grey] transition-all duration-500 ${
            theme === "light" ? "border-black" : "border-white"
          } px-[35px] py-[12px] rounded-[35px]`}
        >
          About
        </button>
      </Link>
    </section>
  );
}

export default Section;

// import React, { useContext, useEffect, useRef } from "react";
// import photo from '../../assets/photo.jpg'
// import ThemeContext from "../../context/themeContext";
// import gsap from "gsap";

// function Hero() {

//   const heading = useRef(null);

//   const {theme} = useContext(ThemeContext);

//   useEffect(() => {
//     gsap.to(heading.current, { duration: 5, x: 0 });
//   }, []);
//     return(
//      <main className="px-[80px] h-[650px] max-md:px-[40px] max-sm:px-[20px] overflow-hidden relative max-[500px]:pt-[200px] pt-[250px]">
//         <h1 ref={heading} className={`text-[92px] max-lg:text-[76px] max-md:text-[62px] max-sm:text-[56px] fixed z-[-1] ${theme === "light" ? "text-white" : "text-black"} w-[900px] max-lg:w-[90%] -translate-x-[380%] capitalize leading-[120%] font-semibold`}>
//             Welcome to my portfolio website 
//         </h1>
//         <div className="absolute w-full top-0 z-[-5] left-0">
//           <img className="w-full max-md:h-[100vh] fixed blur-[20px]" src={photo} alt="" />
//           { theme === 'dark' && 
//           <div className="bg-[#ffffff33] absolute top-0 left-0 w-full h-[100vh]">
            
//           </div>
//           }
//         </div>
//      </main>
//     )
// }

// export default Hero


import React, { useContext, useEffect, useRef } from "react";
import photo from '../../assets/photo.jpg';
import ThemeContext from "../../context/themeContext";
import gsap from "gsap";

function Hero() {
  const heading = useRef(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    // GSAP animation with repeat for continuous effect
    gsap.fromTo(
      heading.current,
      { x: -500, opacity: 0 }, // Starting position
      {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        repeat: -1, // Infinite repeat
        yoyo: true, // Makes it go back and forth
        repeatDelay: 1 // Delay before each repeat
      }
    );
  }, []);

  return (
    <main className="px-[80px] h-[650px] max-md:px-[40px] max-sm:px-[20px] overflow-hidden relative max-[500px]:pt-[200px] pt-[250px]">
      <h1
        ref={heading}
        className={`text-[92px] max-lg:text-[76px] max-md:text-[62px] max-sm:text-[56px] fixed z-[-1] ${theme === "light" ? "text-white" : "text-black"} w-[900px] max-lg:w-[90%] capitalize leading-[120%] font-serif `}
      >
        Welcome to my portfolio website
      </h1>
      <div className="absolute w-full top-0 z-[-5] left-0">
        <img className="w-full max-md:h-[100vh] fixed blur-[20px]" src={photo} alt="" />
        {theme === 'dark' && (
          <div className="bg-[#ffffff33] absolute top-0 left-0 w-full h-[100vh]"></div>
        )}
      </div>
    </main>
  );
}

export default Hero;

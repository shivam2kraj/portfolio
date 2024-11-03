import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import { Link } from "react-router-dom";

function Section() {

  const {theme} = useContext(ThemeContext);

    return (
        <section className={`${theme === "light" ? "text-black bg-white" : "text-white bg-black"} px-[80px] py-[101px]`}>
            <h1 className="text-[64px] capitalize leading-[120%] font-semibold">
              Description and skills:
            </h1>
            <p className="mt-[30px] w-[1024px]">
              Inspired: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam rerum cumque error ab, aperiam et autem, voluptatibus assumenda maxime suscipit dignissimos, 
                 molestias perferendis saepe. Delectus natus eius voluptatum laboriosam neque.
            </p>
            <p className="mt-[20px] w-[1024px]">
                Skills: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam rerum cumque error ab, aperiam et autem, voluptatibus assumenda maxime suscipit dignissimos, 
                 molestias perferendis saepe. Delectus natus eius voluptatum laboriosam neque.
            </p>
            <h1 className="mt-[20px] text-[20px]">
               HTML:
            </h1>
            <p className="mt-[10px] w-[1024px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam rerum cumque error ab, aperiam et autem, voluptatibus assumenda maxime suscipit dignissimos, 
                 molestias perferendis saepe. Delectus natus eius voluptatum laboriosam neque. 
            </p>
           
            <h1 className="mt-[20px] text-[20px]">
                CSS:
            </h1>
            <p className="mt-[10px] w-[1024px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam rerum cumque error ab, aperiam et autem, voluptatibus assumenda maxime suscipit dignissimos, 
                 molestias perferendis saepe. Delectus natus eius voluptatum laboriosam neque.
          </p>
            <h1 className="mt-[20px] text-[20px]">
                Responsiveness:
            </h1>
            <p className="mt-[10px] w-[1024px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam rerum cumque error ab, aperiam et autem, voluptatibus assumenda maxime suscipit dignissimos, 
                 molestias perferendis saepe. Delectus natus eius voluptatum laboriosam neque.
                 <Link to={'/'} className="underline">Click here</Link> to visit my project.
            </p>
        </section>
    )
}

export default Section
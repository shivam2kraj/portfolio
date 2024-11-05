import { Link } from "react-router-dom";
import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";

function Section() {

    const {theme} = useContext(ThemeContext);

    return (
            <section className={`${theme === "light" ? "text-black bg-white" : "text-white bg-black"} max-md:px-[40px] max-sm:px-[20px] max-sm:py-[51px] px-[80px] py-[101px]`}>

                <h1 className="text-[64px] max-md:text-[56px] max-sm:text-[44px] max-[500px]:text-[36px] capitalize leading-[120%] font-semibold">
                    Experience and skills:
                </h1>
                <p className="mt-[30px] max-xl:w-full w-[1024px]">
                    Inspired: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam rerum cumque error ab, aperiam et autem, voluptatibus assumenda maxime suscipit dignissimos,
                    molestias perferendis saepe. Delectus natus eius voluptatum laboriosam neque.
                </p>
                <p className="mt-[20px] max-xl:w-full w-[1024px]">
                    Skills: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam rerum cumque error ab, aperiam et autem, voluptatibus assumenda maxime suscipit dignissimos,
                    molestias perferendis saepe. Delectus natus eius voluptatum laboriosam neque.
                </p>
                <h1 className="mt-[30px] text-[20px]">
                    Project - 1:
                </h1>
                <p className="mt-[10px] max-xl:w-full w-[1024px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam rerum cumque error ab, aperiam et autem, voluptatibus assumenda maxime suscipit dignissimos,
                    molestias perferendis saepe. Delectus natus eius voluptatum laboriosam neque. <a href="" className="underline">Click here</a> to visit my project.
                </p>

                <h1 className="mt-[30px] text-[20px]">
                    Project - 2:
                </h1>
                <p className="mt-[10px] max-xl:w-full w-[1024px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam rerum cumque error ab, aperiam et autem, voluptatibus assumenda maxime suscipit dignissimos,
                    molestias perferendis saepe. Delectus natus eius voluptatum laboriosam neque. <a href="" className="underline">Click here</a> to visit my project.
                </p>
                <h1 className="mt-[30px] text-[20px]">
                    Project - 3:
                </h1>
                <p className="mt-[10px] max-xl:w-full w-[1024px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam rerum cumque error ab, aperiam et autem, voluptatibus assumenda maxime suscipit dignissimos,
                    molestias perferendis saepe. Delectus natus eius voluptatum laboriosam neque. <Link to={'/'} className="underline">Click here</Link> to visit my project.
                </p>
            </section>

    )
}

export default Section
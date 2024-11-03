import React from "react";
import photo from "../../assets/photo.jpg"
import arrow_right from "../../assets/arrow_right.svg"
import { Link } from "react-router-dom";

function Project() {

    return (
        <section className="bg-[#000000] px-[80px] py-[101px]">
            <h1 className="text-[64px] text-white capitalize leading-[120%] font-semibold">
                My Projects
            </h1>
            <div className="flex mt-[52px] gap-[32px]">
                <div className="w-[400px] hover:scale-105 transition-all duration-300 relative h-[400px] bg-white rounded-[7px] px-[12px] py-[20px]">
                    <img src={photo} className="border-[1px]" alt="" />
                    <h1 className="text-[20px] font-semibold mt-[12px]">
                        Project-1
                    </h1>
                    <p className="text-base mt-[12px] mb-[8px]">
                        Skills Used:
                    </p>
                    <div className="flex gap-[12px]">
                        <p className="px-[8px] py-[4] text-[14px] bg-[black] rounded-[35px] text-white">HTML
                        </p>
                        <p className="px-[8px] py-[4] text-[14px] bg-[black] rounded-[35px] text-white">Tailwind CSS
                        </p>
                    </div>
                    <Link to={'/project/Tailwind-project'} className="absolute flex left-[72%] cursor-pointer bottom-[5px]">
                        <p className="text-[14px] italic hover:mr-[8px] transition-all duration-300">Read More</p>
                        <img src={arrow_right} className="w-[24px]" alt=""></img>
                    </Link>
                </div>
              
                <div className="w-[400px] hover:scale-105 transition-all duration-300 relative h-[400px] bg-white rounded-[7px] px-[12px] py-[20px]">
                    <img src={photo} className="border-[1px]" alt="" />
                    <h1 className="text-[20px] font-semibold mt-[12px]">
                        Project-3
                    </h1>
                    <p className="text-base mt-[12px] mb-[8px]">
                        Skills Used:
                    </p>
                    <div className="flex gap-[12px]">
                        <p className="px-[8px] py-[4] text-[14px] bg-[black] rounded-[35px] text-white">HTML
                        </p>
                        <p className="px-[8px] py-[4] text-[14px] bg-[black] rounded-[35px] text-white">Tailwind CSS
                        </p>
                    </div>
                    <Link to={'/project/Tailwinds-projects3'} className="absolute flex left-[72%] cursor-pointer bottom-[5px]">
                        <p className="text-[14px] italic hover:mr-[8px] transition-all duration-300">Read More</p>
                        <img src={arrow_right} className="w-[24px]" alt=""></img>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Project
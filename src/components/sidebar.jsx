
import React, { useState, useContext } from "react";
import Github from "../assets/Github.png";
import Linkedin from "../assets/Linkedin.jpg";
import Resume_icon from "../assets/Resume_icon.png";
import arrow_left from "../assets/arrow_left.svg";
import ThemeContext from '../context/themeContext';

function Sidebar() {
    const [visibility, setVisibility] = useState(false);
    const view = () => {
        setVisibility(!visibility);
    };

    const {theme} = useContext(ThemeContext);

    return (
        <aside className="fixed bottom-[150px]">
            <ul className="flex flex-col items-center gap-[22px]">
                <li onClick={view} className={`w-[50px] h-[50px] ${theme === "light" ? "bg-[#f0f0f0]" : "bg-[#84cc16]"} flex items-center justify-center rounded-[7px] cursor-pointer animate-spin-slow`}>
                    <img
                        src={arrow_left}
                        className={`transition-transform duration-500 ${visibility ? 'rotate-[360deg]' : 'rotate-[0deg]'}`}
                        width={30}
                        height={30}
                        alt="Toggle Sidebar"
                    />
                </li>
                <div
                    className={`flex-col relative transition-transform duration-300 ease-in-out flex ${theme === "light" ? "bg-[#f0f0f0]" : "bg-[#84cc16]"} p-[8px] shadow rounded-[13px] gap-[14px] ${
                        visibility ? 'translate-x-0' : '-translate-x-[50px]'
                    }`}
                >
                    <li>
                        <a href="">
                            <img src={Github} className="bg-white rounded-full" width={30} height={30} alt="GitHub" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={Linkedin} className="bg-white rounded-full" width={30} height={30} alt="LinkedIn" />
                        </a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/1khyroT1QpZPP2Tg5O_7tD4vuVYKXzZWD/view?usp=drive_link">
                            <img src={Resume_icon} className="rounded-full" width={30} height={30} alt="Resume" />
                        </a>
                    </li>
                </div>
            </ul>
        </aside>
    );
}

export default Sidebar;

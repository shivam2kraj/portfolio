import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import developer from "../assets/developer.svg"
import ThemeContext from "../context/themeContext";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

function Navbar() {

    const { theme, setTheme } = useContext(ThemeContext)
    const [hamburger, setHamburger] = useState(false)

    const handleClick = () => {
        window.scrollTo({ top: 0, left: 0 })
    }

    return (
        <header className="flex z-[999] relative justify-center">
            {/* sm-640px
            md-768px
            lg-1024px
            xl-1280px
            2xl-1440px */}
            <div className={`flex ${theme === "light" ? "bg-[#f0f0f0]" : "bg-[#fda4af]"} w-[1024px] max-xl:w-[90%] rounded-[50px] shadow-[0px_0px_20px_#00000033] backdrop-blur fixed top-[20px] justify-between items-center px-[40px] pt-[10px] pb-[10px]`}>
                <Link onClick={handleClick} to={'/'}>
                    <img src={developer} alt="" />
                </Link>
                <img src={menu} onClick={() => setHamburger(!hamburger)} className="hidden max-md:block" alt="" />

                <nav className={`absolute ${hamburger ? 'translate-0' : 'translate-x-full'} ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'} transition-transform duration-300 hidden max-sm:flex max-md:flex ease-in-out max-[500px]:w-full flex w-[50%] h-[100vh] shadow-[0px_0px_20px_#00000033] px-[20px] py-[40px] flex-col gap-[56px] top-[-20px] right-[-40px]`}>
                    <img src={close} onClick={() => setHamburger(!hamburger)} className="w-[40px]" alt="" />
                    <ul className="flex flex-col gap-[12px]">
                        <li>
                            <Link onClick={handleClick} to={'/about'}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link onClick={handleClick} to={'/services'}>
                            Services
                            </Link>
                        </li>
                        <li>
                            <Link onClick={handleClick} to={'/experience'}>
                            Experience
                            </Link>
                        </li>

                        <li>
                            {/* <Link onClick={handleClick} to={'/project'}> */}
                            Projects
                            {/* </Link> */}
                        </li>
                        <li> <Link onClick={handleClick} to={'/education'}>
                        Education
                            </Link></li>
                        <li>
                            <Link onClick={handleClick} to={'/contact'}>
                            Contact
                            </Link>
                        </li>

                    </ul>
                    <div onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                        className={`w-[60px] cursor-pointer p-[4px] ${theme === 'light' ? 'border-[whitesmoke] bg-[#00000033]' : ' border-[black] bg-[#ffffff66]'}
      border-[1px] rounded-[35px]`}>
                        <div
                            className={`w-[20px] ${theme === 'light' ? 'translate-0  bg-[whitesmoke]' : 'translate-x-[30px] bg-[black]'} transition-all duration-300
          h-[20px] rounded-[50%]`}>

                        </div>
                    </div>
                </nav>

                <nav className="flex max-md:hidden items-center gap-[52px]">
                    <ul className="flex gap-[24px]">
                        <li>
                            <Link onClick={handleClick} to={'/about'}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link onClick={handleClick} to={'/services'}>
                            Services
                            </Link>
                        </li>
                        <li>
                            <Link onClick={handleClick} to={'/experience'}>
                            Experience
                            </Link>
                        </li>
                        <li>
                            {/* <Link onClick={handleClick} to={'/project'}> */}
                            Projects
                            {/* </Link> */}
                        </li>
                        <li> <Link onClick={handleClick} to={'/education'}>
                        Education
                            </Link></li>
                        <li>
                            <Link onClick={handleClick} to={'/contact'}>
                            Contact
                            </Link>
                        </li>
                    </ul>
                    <div onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                        className={`w-[60px] cursor-pointer p-[4px] ${theme === 'light' ? 'border-[whitesmoke] bg-[#00000033]' : ' border-[black]'}
                        border-[1px] rounded-[35px]`}>
                        <div
                            className={`w-[20px] ${theme === 'light' ? 'translate-0  bg-[whitesmoke]' : 'translate-x-[30px] bg-black'} transition-all duration-300
                            h-[20px] rounded-[50%]`}>

                        </div>
                    </div>
                </nav>
            </div>

        </header>
    )
}

export default Navbar;
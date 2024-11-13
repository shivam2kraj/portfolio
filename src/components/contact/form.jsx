import React, { useState, useContext } from "react";
import ThemeContext from "../../context/themeContext";

function Form() {

    const {theme} = useContext(ThemeContext);

    const [formData, setFormData] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        PhoneNumber: "",
        Message: ""
    })

    const HandleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const [firstNameValid, setFirstNameValid] = useState(true)
    const [lastNameValid, setLastNameValid] = useState(true)
    const [emailValid, setEmailValid] = useState(true)
    const [submit, setSubmit] = useState(false)

    const HandleSubmit = (e) => {
        e.preventDefault();
        if (formData.FirstName === '') {
            setFirstNameValid(false)
        } else {
            setFirstNameValid(true)
        }
        if (formData.LastName === '') {
            setLastNameValid(false)
        } else {
            setLastNameValid(true)
        }
        if (formData.Email === '') {
            setEmailValid(false)
        } else {
            setEmailValid(true)
        }
        if (formData.FirstName !== '' && formData.LastName !== '' && formData.Email !== '') {
            setSubmit(true)
        }
    }

    return (
        <section className={`px-[80px] max-md:px-[40px] max-sm:px-[20px] max-sm:pt-[51px] max-lg:pb-[151px] max-lg:flex-col max-lg:gap-[52px] max-lg:items-center ${theme === "light" ? "bg-[#a3a3a3]" : "bg-black"} flex justify-between py-[101px]`}>
            <h1 className="text-[30px] max-lg:text-center text-white capitalize leading-[120%] font-semibold">
            Feel free to reach out to me for any questions or opportunities!
            </h1>
            <form className="w-[560px] max-xl:w-[480px] max-md:w-full relative shadow-[0px_0px_20px_#ffffffff] transition-all duration-300 hover:shadow-[0px_0px_60px_#00000033] flex flex-col gap-[20px] bg-[white] px-[20px] py-[24px] rounded-[13px]" action="">
                <div className="flex max-md:flex-col gap-[20px]">
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <label htmlFor="" className={firstNameValid ? "text-black" : "text-[red]"}>First Name: </label>
                            {firstNameValid === false && <span className="text-[red]">required*</span>}
                        </div>
                        <input
                            name="FirstName"
                            type="text"
                            onChange={HandleChange}
                            placeholder="Enter Your First Name"
                            className={firstNameValid ? "border-[1px] w-[250px] max-xl:w-[210px] max-md:w-full mt-[6px] border-black pl-[12px] py-[7px] rounded-[7px]" : "border-[1px] w-[250px] mt-[6px] max-xl:w-[210px] border-[red] max-md:w-full placeholder:text-[red] pl-[12px] py-[7px] rounded-[7px]"} />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <label htmlFor="" className={lastNameValid ? "text-black" : "text-[red]"}>Last Name: </label>
                            {lastNameValid === false && <span className="text-[red]">required*</span>}
                        </div>
                        <input
                            name="LastName"
                            type="text"
                            onChange={HandleChange}
                            placeholder="Enter Your Last Name"
                            className={lastNameValid ? "border-[1px] w-[250px] mt-[6px] max-md:w-full max-xl:w-[210px] border-black pl-[12px] py-[7px] rounded-[7px]" : "border-[1px] w-[250px] mt-[6px] max-md:w-full border-[red] max-xl:w-[210px] placeholder:text-[red] pl-[12px] py-[7px] rounded-[7px]"} />
                    </div>

                </div>

                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <label htmlFor="" className={emailValid ? "text-black" : "text-[red]"}>Email: </label>
                        {emailValid === false && <span className="text-[red]">required*</span>}
                    </div>
                    <input
                        name="Email"
                        type="text"
                        onChange={HandleChange}
                        placeholder="Enter Your Email"
                        className={emailValid ? "border-[1px] mt-[6px] border-black pl-[12px] py-[7px] rounded-[7px]" : "border-[1px] mt-[6px] border-[red] placeholder:text-[red] pl-[12px] py-[7px] rounded-[7px]"} />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="">Phone Number: </label>
                    <input
                        type="number"
                        name="PhoneNumber"
                        onChange={HandleChange}
                        placeholder="Enter Your Phone Number"
                        className="border-[1px] mt-[6px] border-black pl-[12px] py-[7px] rounded-[7px]" />
                </div>
                <div>
                    <label htmlFor="">Message: </label>
                    <textarea
                        name="Message"
                        id=""
                        onChange={HandleChange}
                        placeholder="Enter Your Message"
                        className="border-[1px] h-[120px] mt-[6px] w-full resize-none border-black pl-[12px] py-[12px] rounded-[7px]"></textarea>
                </div>

                <button
                    onClick={HandleSubmit}
                    className="border-black border-[1px] hover:bg-black hover:text-white transition-all duration-300 py-[12px] px-[35px] rounded-[5px]">Submit
                </button>
                {submit &&
                    <div className="absolute left-[-220px] max-lg:left-0 max-lg:bottom-[-100px] max-lg:w-full max-lg:pl-[16px] bottom-[0px] shadow-[0px_0px_50px_#00000033] bg-white h-[80px] flex items-center rounded-[13px] w-[200px] text-center">
                        Your Form have been Submitted
                    </div>}

            </form>
        </section>
    )
}

export default Form
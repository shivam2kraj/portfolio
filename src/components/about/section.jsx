import React, { useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ThemeContext from "../../context/themeContext";
import shivam from "../../assets/shivam.jpg";

function Section() {
  const { theme } = useContext(ThemeContext);

  // Animation controls for each section
  const presentControls = useAnimation();
  const pastControls = useAnimation();
  const futureControls = useAnimation();

  // View triggers for each section
  const { ref: presentRef, inView: presentInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: pastRef, inView: pastInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: futureRef, inView: futureInView } = useInView({ threshold: 0.2, triggerOnce: true });

  // Trigger animations when sections come into view
  React.useEffect(() => {
    if (presentInView) presentControls.start("visible");
    if (pastInView) pastControls.start("visible");
    if (futureInView) futureControls.start("visible");
  }, [presentControls, pastControls, futureControls, presentInView, pastInView, futureInView]);

  // Animation variants
  const fadeInVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      {/* Main Information Section */}

      <motion.section
        className={`${theme === "light" ? "text-black bg-[#d9f99d]" : "text-white bg-gray-900"} px-[80px] max-md:px-[40px] max-sm:px-[20px] pt-[51px] pb-[121px] max-md:pb-[51px] rounded-lg shadow-lg`}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        <motion.div className="flex gap-[52px] max-md:flex-col items-center" variants={fadeInVariant}>
          <motion.div
            className="relative"
            style={{ perspective: '1000px' }} // Perspective applied here for a 3D effect
          >

            <motion.img
              src={shivam}
              alt="Shivam"
              width={300}
              className="rounded-[13px] transition-all duration-500 shadow-lg"
              whileHover={{
                scale: 1.1,
                rotateY: 15,
                rotateX: 10,
                boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.3)",
              }}
              style={{
                transformStyle: "preserve-3d",
                willChange: "transform, box-shadow",
              }}
            />
          </motion.div>
          <div className="flex flex-col gap-[12px]">
            {/* Personal Info */}
            {[
              { label: "Name:", value: "Shivam Raj" },
              { label: "Date of Birth:", value: "25-01-2000" },
              { label: "Highest Qualification:", value: "MCA" },
              { label: "Passout Year:", value: "2022" },
              { label: "Experience:", value: "2 years" },
              { label: "Tech Stack:", value: "ReactJS" },
            ].map((info, index) => (
              <motion.div key={index} className="flex items-end gap-[12px]" variants={fadeInVariant} initial="hidden" animate="visible">
                <h1 className="text-[30px] font-bold capitalize">{info.label}</h1>
                <p className="capitalize text-[24px] italic">{info.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
      {/* Present Section */}
      <motion.section
        ref={presentRef}
        initial="hidden"
        animate={presentControls}
        variants={fadeInVariant}
        className={`${theme === "light" ? "text-black bg-[#ddd6fe]" : "text-white bg-[#7c3aed]"} px-[80px] max-md:px-[40px] flex justify-end max-sm:px-[20px] py-[60px] bg-gradient-to-r rounded-lg shadow-lg my-[30px] transition duration-300 hover:shadow-xl`}
      >
        <h2 className="text-[36px] mt-[52px] w-[1024px] font-bold">Present</h2>
        <p className="mt-[20px] text-[20px] leading-[150%]">
        Building efficient, modern user interfaces with React.js—transforming ideas into seamless, interactive experiences.
          Responsive design, strong UX, and reusable component architecture.
        </p>
      </motion.section>
      {/* Past Section */}
      <motion.section
        ref={pastRef}
        initial="hidden"
        animate={pastControls}
        variants={fadeInVariant}
        className={`${theme === "light" ? "text-black bg-[#f5d0fe]" : "text-white bg-[#c026d3]"} px-[80px] max-md:px-[40px] flex justify-end max-sm:px-[20px] py-[60px] bg-gradient-to-r rounded-lg shadow-lg my-[30px] transition duration-300 hover:shadow-xl`}
      >
        <h2 className="text-[36px] mt-[52px] w-[1024px] font-bold">Past</h2>
        <p className="mt-[20px] text-[20px] leading-[150%]">
        Every line of code is a step forward, but it's the journey behind it that shapes my expertise.
        Legacy projects or contributions to applications where you modernized the frontend.
        </p>
      </motion.section>
      <motion.section
        ref={futureRef}
        initial="hidden"
        animate={futureControls}
        variants={fadeInVariant}
        className={`${theme === "light" ? "text-black bg-[#bae6fd]" : "text-white bg-[#0284c7]"} px-[80px] max-md:px-[40px] flex justify-end max-sm:px-[20px] py-[60px] bg-gradient-to-r rounded-lg shadow-lg my-[30px] transition duration-300 hover:shadow-xl`}
      >
        <h2 className="text-[36px] mt-[52px] w-[1024px] font-bold">Future</h2>
        <p className="mt-[20px] text-[20px] leading-[150%]">
        Exploring the future of web development to create smarter, faster, and more engaging digital experiences, with goals like mastering React’s latest features, AI-enhanced interfaces, Web3, and mobile-first PWAs. Plans for growth include contributing to open-source projects and attending React and frontend tech conferences.
        </p>
      </motion.section>
      {/* Future Section */}
      {/* <motion.section
        ref={futureRef}
        initial="hidden"
        animate={futureControls}
        variants={fadeInVariant}
        className={`${theme === "light" ? "text-black bg-[#bae6fd]" : "text-white bg-[#0284c7]"} px-[80px] max-md:px-[40px] flex justify-start max-sm:px-[20px] py-[60px] bg-gradient-to-r rounded-lg shadow-lg my-[30px] transition duration-300 hover:shadow-xl`}
      >
        <h2 className="text-[36px] font-bold mt-[52px] w-[1024px]">Future</h2>
        <p className="mt-[20px] text-[20px] leading-[150%]">
        Exploring the future of web development to create smarter, faster, and more engaging digital experiences.
        Goals like mastering React's upcoming features (e.g., new state management, server components).
        Interest in AI-enhanced interfaces, Web3, or mobile-first progressive web apps (PWAs).
        Plans for growth, such as contributing to open-source projects or attending React and frontend tech conferences.

        </p>
      </motion.section> */}
    </>
  );
}

export default Section;



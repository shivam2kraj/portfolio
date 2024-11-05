
import React, { useContext, useRef } from 'react';
import heartemoji from '../../assets/heartemoji.png';
import glasses from '../../assets/glasses.png';
import humble from '../../assets/humble.png';
import Card from '../Card/card';
import ThemeContext from '../../context/themeContext';
import { motion, useInView } from 'framer-motion';

const servicesData = [
  {
    emoji: heartemoji,
    heading: 'Tailwind Css',
    initialPosition: { x: 200, y: 0 },
    inViewPosition: { x: 0, y: 0 },
  },
  {
    emoji: glasses,
    heading: 'Material UI',
    initialPosition: { x: -200, y: 100 },
    inViewPosition: { x: 0, y: 100 },
  },
  {
    emoji: humble,
    heading: 'React Router',
    initialPosition: { x: 200, y: 50 },
    inViewPosition: { x: 0, y: 50 },
    color: 'rgba(252, 166, 31, 0.45)',
  },
];

const Services = () => {
  const { theme } = useContext(ThemeContext);
  const transition = {
    duration: 1,
    type: 'spring',
  };

  return (
    <div className="flex flex-col px-[80px] md:flex-row items-center justify-center h-[90vh] mx-9 my-12 mb-36">
      {/* Left Side - Text & Skills List */}
      <div className="flex flex-col items-start text-left md:w-1/3 relative">
        <span className={`${theme ? 'text-[#f97316]' : 'text-[#1f2937]'} text-3xl font-semibold`}>
          My Awesome
        </span>
        <span className="text-5xl font-cursive text-[#f97316]">Services</span>
        <SkillsList />
        <div className="blur s-blur1 bg-[#ABF1FF94] absolute -left-34 top-20 w-72 h-72 rounded-full opacity-50"></div>
      </div>

      {/* Right Side - Cards with Grid Layout */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-[150px] pt-[180px] items-start md:mt-0 md:w-2/3">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            emoji={service.emoji}
            heading={service.heading}
            initialPosition={service.initialPosition}
            inViewPosition={service.inViewPosition}
            transition={transition}
            color={service.color}
          />
        ))}
        <div className="blur s-blur2 bg-purple-500 absolute left-1/2 top-2/3 w-72 h-72 rounded-full opacity-40 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
};

const ServiceCard = ({ emoji, heading, initialPosition, inViewPosition, transition, color }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={initialPosition}
      animate={isInView ? inViewPosition : initialPosition}
      transition={transition}
      className="flex flex-col items-center p-8 bg-white shadow-lg rounded-lg border-2 border-[#f97316] w-64 h-60 text-center"
    >
      <Card
        emoji={emoji}
        heading={heading}
        color={color}
      />
    </motion.div>
  );
};

const SkillsList = () => (
  <div className="flex flex-wrap mt-4 text-[#1f2937]">
    <ul className="flex flex-wrap gap-4 text-lg font-medium">
      <li>Reactjs</li>
      <li>JavaScript</li>
      <li>HTML5/CSS3</li>
      <li>Azure Repo</li>
      <li>Bootstrap</li>
      <li>Material UI</li>
      <li>Redux</li>
      <li>Tailwind CSS</li>
      <li>GitHub</li>
      <li>RESTful APIs</li>
      <li>Postman</li>
      <li>Webpack</li>
      <li>Figma</li>
    </ul>
  </div>
);

export default Services;



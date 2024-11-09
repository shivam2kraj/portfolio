
import React from "react";
import { education } from "../../data/constant";
import EducationCard from "./educationCard";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <div className="mt-24 flex flex-col items-center relative z-10">
      <div className="relative flex flex-col items-center w-full max-w-5xl gap-3">
        <h1 className="text-5xl font-semibold text-center text-primary mt-5 md:text-3xl">
          Education
        </h1>
        <p className="text-lg font-semibold text-center text-secondary mb-10 md:text-base">
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </p>

        <VerticalTimeline lineColor="#334155">
          {education.map((edu, index) => (
            <EducationCard key={`education-${index}`} education={edu}/>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;

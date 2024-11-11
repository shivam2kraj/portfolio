import React, {useContext} from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import { experiences } from '../../data/constant';
import ExperienceCard from './experience';
import ThemeContext from '../../context/themeContext';

const Experience = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <div className="flex flex-col justify-center items-center relative z-10 py-10 md:py-20">
            <div className="flex flex-col items-center w-full max-w-screen-xl px-5 md:py-20">
                <h2 className={`text-4xl font-semibold text-center mt-5 ${theme === "light" ? "text-[#306EE8]" : "text-[#047857]"} md:text-3xl`}>Experience</h2>
                <p className={`text-lg text-center max-w-xl mt-2 md:mt-3 ${theme === "light" ? "text-[#06b6d4]" : "text-[#075985]"}`}>
                    My work experience as a software engineer and working on companies and projects.
                </p>
                <div className={`w-full max-w-4xl flex flex-col items-center mt-5`}>
                    <Timeline>
                        {experiences.map((experience, index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    {index !== experiences.length - 1 && (
                                        <TimelineConnector />
                                    )}
                                </TimelineSeparator>
                                <TimelineContent
                                    className="py-3 px-2"
                                >
                                    <ExperienceCard experience={experience} />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </div>
            </div>
        </div>
    );
};

export default Experience;

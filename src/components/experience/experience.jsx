import React, {useContext} from 'react';
import ThemeContext from '../../context/themeContext';

const ExperienceCard = ({ experience }) => {
    const {theme} = useContext(ThemeContext);

    return (
        <div className={`w-80 md:w-[650px] border ${theme === "light" ? "border-[#306EE8]" : "border-[#047857]"} p-4 rounded-lg shadow-lg transition-transform hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden`}>
            <div className="flex flex-col">
                <div className="text-lg font-bold italic text-primary-500">{experience.role}</div>
                <div className="text-sm font-medium text-secondary-500 font-cursive">{experience.company}</div>
                <div className="text-xs text-secondary-400">{experience.date}</div>
            </div>
            <div className="mt-2 text-sm text-primary-400">
                {experience?.desc && <p className="line-clamp-4">{experience.desc}</p>}
                {experience?.desc1 && <p className="line-clamp-4">{experience.desc1}</p>}
                {experience?.desc2 && <p className="line-clamp-4">{experience.desc2}</p>}
                {experience?.desc3 && <p className="line-clamp-4">{experience.desc3}</p>}
                {experience?.desc4 && <p className="line-clamp-4">{experience.desc4}</p>}
                {experience?.skills && (
                    <div className="flex flex-wrap items-center mt-2">
                        <b className="mr-2">Skills:</b>
                        <div className="flex flex-wrap gap-2">
                            {experience.skills.map((skill, index) => (
                                <span key={index} className="text-sm text-primary-400">• {skill}</span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExperienceCard;


import React, { useContext } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import ThemeContext from "../../context/themeContext";

const EducationCard = ({ education }) => {
  const { theme } = useContext(ThemeContext);

  // Define dynamic styles based on theme
  const contentBackgroundColor = theme === "light" ? "#fed7aa" : "#ea580c";
  const textColor = theme === "light" ? "#64748b" : "#fff";
  const secondaryTextColor = theme === "light" ? "#333" : "#ccc";

  return (
    <VerticalTimelineElement
      icon={
        <div className={`${theme === "light" ? "text-black bg-[#e2e8f0]" : "text-white bg-[#52525b]"} flex items-center justify-center w-full h-full font-bold rounded-full hover:shadow-[0px_0px_20px_grey] transition-all duration-500`}>
          {education.img} {/* Use the `img` property as text for the icon */}
        </div>
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: contentBackgroundColor,
        color: textColor,
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      <div className="flex w-full gap-3">
        <div className="flex flex-col w-full">
          <div
            className="text-lg font-semibold md:text-sm"
            style={{ color: secondaryTextColor }}
          >
            {education.school}
          </div>
          <div
            className="text-sm font-medium md:text-xs"
            style={{ color: secondaryTextColor }}
          >
            {education.degree}
          </div>
          <div
            className="text-xs font-normal md:text-[10px]"
            style={{ color: secondaryTextColor }}
          >
            {education.date}
          </div>
        </div>
      </div>
      <div className="text-sm font-medium mt-2 md:text-xs" style={{ color: secondaryTextColor }}>
        <b>Grade:</b> {education.grade}
      </div>
      <div className="w-full text-base font-normal mb-2 md:text-sm" style={{ color: textColor }}>
        <span>{education.desc}</span>
      </div>
    </VerticalTimelineElement>
  );
};

export default EducationCard;

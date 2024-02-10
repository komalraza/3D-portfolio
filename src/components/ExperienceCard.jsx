import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience?.date}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience?.icon}
            alt={experience?.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
      iconStyle={{ background: experience?.iconBg }}
    >
      <div>
        <h3 className="font-bold text-[24px] text-white">
          {experience?.title}
        </h3>
        <p className="text-[17px] text-secondary font-semibold">
          {experience?.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience?.points?.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;

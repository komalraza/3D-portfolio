import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { SectionWrapper } from "./hoc";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";
import ExperienceCard from "./ExperienceCard";

// const ExperienceCard = ({ experience }) => {

//   console.log(experience)
//   return (
//     <>

//     </>
//   );
// };

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I've Done so Far</p>
        <h2 className={styles.sectionHeadText}>Work Experiences</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences?.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

import React from "react";
import { SectionWrapper } from "./hoc";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import Tilt from "react-parallax-tilt";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 550,
        }}
        className="bg-tertiary p-5 rounded-2xl xs:w-[360px] w-full"
      >
        <div className="relative h-[230px] w-full">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* make something appear on top  */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>

            {/* Add the live Link foe your project */}
            {/* <div
            onClick={()=> window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
            </div> */}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following Projects showcases my skills and experinece through
          real-world examples of my work. Each project is briefly described with
          links to code repositories an dlive demos in it. it reflects my
          ability to work with different technologies and manage project
          effectively
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects?.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");

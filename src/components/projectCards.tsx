import { mainProjects } from "../data/mainProjectData";
import "./projectCards.css";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";
import { standardEaseTransition } from "../utils/motion_utils";

export type ProjectCardProps = {
  ind: number;
  title: string;
  date: string;
  imageLink: string;
  description: string;
  route: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  const { ind, title, date, imageLink, description, route } = props;
  const [isHover, setIsHover] = useState(false);

  const toggleHover = useCallback(
    (hover: boolean) => {
      setIsHover(hover);
    },
    [setIsHover]
  );
  return (
    <motion.div
      className={`project-card ${
        ind % 2 == 0 ? "align-self-end" : "align-self-start"
      }`}
      whileHover={{ scale: 1.1 }}
      layout
      transition={standardEaseTransition}
      onHoverStart={() => toggleHover(true)}
      onHoverEnd={() => toggleHover(false)}
    >
      <motion.div>
        <div className="section-header project-title">{title}</div>
        <div className="subtitle project-date">{date}</div>
      </motion.div>

      {imageLink != "" ? (
        <motion.img
          className={"project-preview"}
          src={imageLink}
          alt={`${title} project preview`}
        ></motion.img>
      ) : (
        <></>
      )}
      <AnimatePresence>
        {/* {isHover && ( */}
        <motion.div
          className="content-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className="content instrument-sans-500-normal text-black">
            {description}
          </div>
        </motion.div>
        {/* )} */}
      </AnimatePresence>
    </motion.div>
  );
};

export const ProjectCards = () => {
  return (
    <motion.div className="project-cards-wrapper" layout>
      {mainProjects.map((mainProject, ind) => (
        <ProjectCard ind={ind} {...mainProject} key={ind} />
      ))}
    </motion.div>
  );
};

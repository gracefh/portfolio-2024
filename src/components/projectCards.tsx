import { mainProjects } from "../data/mainProjectData";
import "./projectCards.css";
import { motion } from "framer-motion";
import {
  standardEaseTransition,
  standardSpringTransition,
} from "../utils/motion_utils";

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

  return (
    <motion.div className={`project-card`}>
      <motion.div>
        <div className="section-header project-title">{title}</div>
        <div className="subtitle project-date">{date}</div>
      </motion.div>

      {imageLink != "" ? (
        <center>
          <motion.img
            className={"project-preview"}
            src={imageLink}
            alt={`${title} project preview`}
            whileHover={{ scale: 1.1 }}
            layout
            transition={standardSpringTransition}
          ></motion.img>
        </center>
      ) : (
        <></>
      )}
      <p className="instrument-sans-400 text-black">{description}</p>
    </motion.div>
  );
};

export const ProjectCards = () => {
  return (
    <motion.div className="two-column-layout" layoutRoot>
      {mainProjects.map((mainProject, ind) => (
        <ProjectCard ind={ind} {...mainProject} key={ind} />
      ))}
    </motion.div>
  );
};

const containerMotion = {
  hover: {
    backgroundColor: "#f7c3c3",
  },
};
const arrowMotion = {
  rest: {
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
  hover: {
    x: [0, 15, 0],
    transition: {
      repeat: Infinity,
      duration: 0.8,
      delay: 0.5,
      ease: "easeInOut",
    },
  },
};

const AllProjectsBar = () => {
  return (
    <motion.a
      layout
      initial="rest"
      whileHover="hover"
      className="all-projects-link instrument-sans-500-normal"
      href="/projects"
      variants={containerMotion}
    >
      <div>All Projects</div>
      <motion.div variants={arrowMotion}>
        <i className="fa fa-solid fa-arrow-right-long"></i>
      </motion.div>
    </motion.a>
  );
};

export const HomeProjectSection = () => {
  return (
    <section className="projects section-flex">
      <div>
        <h2 className="text-pink header-lg header-with-subtitle">PROJECTS</h2>
        <div className="instrument-sans-500-normal">
          some of the programming projects I've worked on recently!
        </div>
      </div>
      <ProjectCards />
      <AllProjectsBar />
    </section>
  );
};

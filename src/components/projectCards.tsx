import { mainProjects } from "../data/mainProjectData";
import "./projectCards.css";

export type ProjectCardProps = {
  ind: number;
  title: string;
  date: string;
  imageLink: string
  description: string
  route:string
};

export const ProjectCard = (props: ProjectCardProps) => {
  const { ind, title, date, imageLink, description, route } = props;
  return (
    <div
      className={`project-card ${
        ind % 2 == 0 ? "align-self-end" : "align-self-start"
      }`}
      key={ind}
    >
      <div>
        <div>{title}</div>
        <div>{date}</div>
      </div>
      {imageLink != "" ? <img
          className={"project-preview"}
          src={imageLink}
          alt={`${title} project preview`}
        ></img> : <></>}
      <div className="content-wrapper">
        <div className="content instrument-sans-500 text-black">{description}</div>
      </div>
    </div>
  );
};
export const ProjectCards = () => {
  return (
    <div className="project-cards-wrapper">
      {mainProjects.map((mainProject, ind) => (
        <ProjectCard ind={ind} {...mainProject}/>
      ))}
    </div>
  );
};

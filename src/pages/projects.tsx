import { ProjectCards } from "../components/projectCards";
import { PageHeader } from "../layout/pageHeader";

export const Projects = () => {
  return (
    <main>
      <PageHeader
        title="PROJECTS"
        subtitle="class and personal projects I've worked on in the past few years"
      />
      <article>
        <ProjectCards />
      </article>
    </main>
  );
};

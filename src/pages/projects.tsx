import { ProjectCards } from "../components/projectCards";
import { PageHeader } from "../layout/pageHeader";

export const Projects = () => {
  return (
    <main>
      <PageHeader
        title="PROJECTS"
        subtitle="projects I've worked on over the years!"
      />
      <article>
        <ProjectCards />
      </article>
    </main>
  );
};

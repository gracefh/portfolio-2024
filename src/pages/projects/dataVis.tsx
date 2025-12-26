import { Link } from "react-router-dom";
import { PageHeader } from "../../layout/pageHeader";
import { ImageCarousel } from "../../components/imageCarousel";

export const DataVis = () => {
  return (
    <main>
      <PageHeader title="Data Visualization Work" image={"/image/project-previews/data-vis-preview.png"} />
      <article>
        <div>
          <p>
            One of the areas I ended up spending a lot of time on during college
            was Data Visualization. Before entering college, I knew I wanted to
            do Computer Science but didn't really have a concept of what I
            wanted to actually explore within the broad field. The first lab I
            joined happened to be an HCI lab, which I did not even really
            process until a year or two into college. Joining that lab gave me
            some experience with D3 and more importantly introduced me to MIT's
            Visualization group, where I learned that research into data
            visualizations and data visualization tools existed. In the process
            of working in the lab, as well as taking and TA-ing the Interactive
            Data Visualization and Society course, I gained a lot of
            appreciation for the data visualizations that I encountered in my
            daily life. In the rest of this page, I'll detail some highlights
            from each of my data visualization experiences.
          </p>
        </div>
        <div>
          <h3>Haystack Group</h3>
          <p>
            In the fall of freshman year, I joined MIT CSAIL's Haystack Group,
            working on the Machine Learning Driven Clinical Documentation
            project. One of the most memorable parts of the project was creating
            prototypes for visualizing medical lab data across time. I went
            through several rounds of feedback and was able to brainstorm a
            variety of different potential designs. I also got introduced to
            D3.js in this process. At the time, I hadn't really understood what
            D3.js was, but I was able to create some lab visualizations based on
            examples using Observable.
          </p>
          <ImageCarousel>
            <div key={1}>
              <img
                className={"carousel-image"}
                src={"/image/project-images/data-vis/ml-doc-charting-1.png"}
                alt="prototypes for lab data visualization"
              />
            </div>
            <div key={2}>
              <img
                className={"carousel-image"}
                src={"/image/project-images/data-vis/ml-doc-charting-2.png"}
                alt="line chart on D3"
              />
            </div>
          </ImageCarousel>
        </div>
        <div>
          <h3>Visualization Group</h3>
          <p>
            In junior year, I moved from MIT's Haystack Group to MIT's
            Visualization Group to work on Bluefish, a relational visualization
            grammar that allows for more user-extensibility and better reasoning
            about the relations within diagrams. I contributed to the language
            by creating basic components as well as making example
            visualizations that have previously presented in other use cases.
          </p>
          <p>
            I also did research in the Visualization group from 2023 - 2024 for
            my Master of Engineering degree. I worked on Twofish, an exploration
            into improving the process of editing charts. The project extends
            Bluefish and combines it with TLDraw, a whiteboard editing tool, to
            create a graphical chart editor that considers spatial constraints.
          </p>
        </div>
        <div>
          <h3>Interactive Data Visualization & Society</h3>
          <p>
            Having worked in the Visualization Group for a semester, I decided
            to take MIT's data visualization course in the spring of my junioar
            year. I wanted to become a bit more acquainted with the overall
            field and also to get some more practice actually creating
            visualizations. While I'll talk about some of the things I learned
            through taking the course here, I also have a separate page just for{" "}
            <Link to="/projects/migration-motivations" className={"text-link"}>
              my final project
            </Link>
            .
          </p>
          <p>
            As I was taking the graduate version of the class, I was able to
            attend a weekly reading group, where we were assigned data
            visualization-related papers to read every week. There, I was
            exposed to a lot of new information about the ethics of data
            visualizations. Before taking the class, I had mostly thought of
            charts and diagrams as unbiased snapshots of the world. Through
            reading some of these different papers, I realized how easy it was
            to make visualizations that tell different stories, even off of the
            same data set.
          </p>
          <p>
            In the main class, I also got to practice the design thinking
            process through assignments and got acquainted to visualization
            software, including Tableau, D3.js, and Mapbox.
          </p>
          <p>
            Out of all the assignments we did, my favorite one involved making
            two visualizations with one dataset such that each visualization
            made opposing arguments. I think that creating 2 visualizations that
            try to tell 2 very different stories emphasized how important it is
            to be cognizant of the potential impacts of visualizations and of
            the ethical choices that people who create visualizations need to
            consider.
          </p>
          <ImageCarousel>
            <div>
              <img
                src={"/image/project-images/data-vis/visualization_1.png"}
                alt="Visualization 1"
                className={"carousel-image"}
              />
              <div className={"carousel-caption"}>
                Misinformation Assignment, Visualization 1
              </div>
            </div>
            <div>
              <img
                src={"/image/project-images/data-vis/visualization_2.png"}
                alt="Visualization 2"
                className={"carousel-image"}
              />
              <div className={"carousel-caption"}>
                Misinformation Assignment, Visualization 2
              </div>
            </div>
          </ImageCarousel>
        </div>
      </article>
    </main>
  );
};

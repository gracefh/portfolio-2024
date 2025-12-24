import { Link } from "react-router-dom";
import { PageHeader } from "../../layout/pageHeader";
import { ImageCarousel } from "../../components/imageCarousel";

export const DataVis = () => {
  return (
    <main>
      <PageHeader title="Data Visualization Work" />
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
          <h3 className="text-left">Haystack Group</h3>
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
          <h3 className="text-left">Visualization Group</h3>
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
          <h3 className="text-left">
            Interactive Data Visualization & Society
          </h3>
          <p>
            Having worked in the Visualization Group for a semester, I decided
            to take MIT's data visualization course, in order to become more
            acquainted with the overall field and to get more practice creating
            data visualizations, instead of mostly creating software to create
            visualizations. Here, I'll detail a bit about what I learned overall
            from the class and things I was able to create, though there also is
            a separate page just for{" "}
            <Link to="/projects/migration-motivations" className={"text-link"}>
              my final project
            </Link>
            .
          </p>
          <p>
            Because I was taking the graduate version of the course, beyond the
            normal course assignments, I also attended a weekly reading group.
            There, I was able to read many papers on data visualization ethics,
            which was extremely valuable, as I had not been exposed to many of
            the concepts before.
          </p>
          <p>
            Additionally, in the first half of the semester, we were able to
            complete multiple assignments and labs in order to both learn the
            design thinking process in terms of data visualization and get
            acquainted with useful tools for visualizing data, i.e. Tableau,
            D3.js, and Mapbox.
          </p>
          <p>
            Out of all the assignments we did, my favorite one was actually one
            about misinformation in data visualization and how easy it is to
            tell very different stories using the same piece of data. I think
            that creating 2 visualizations that try to tell 2 very different
            stories emphasized how important it is to be cognizant of the
            potential impacts of visualizations and of the ethical choices that
            people who create visualizations need to consider.
          </p>
          {/* <ImageCarousel>
          <div>
            <img
              src={Visualization1}
              alt="Visualization 1"
              className={CarouselStyle.carouselImage}
            />
            <div className={CarouselStyle.carouselCaption}>
              Misinformation Assignment, Visualization 1
            </div>
          </div>
          <div>
            <img
              src={Visualization2}
              alt="Visualization 2"
              className={CarouselStyle.carouselImage}
            />
          </div>
          <div className={CarouselStyle.carouselCaption}>
            Misinformation Assignment, Visualization 2
          </div>
        </ImageCarousel> */}
        </div>
      </article>
    </main>
  );
};

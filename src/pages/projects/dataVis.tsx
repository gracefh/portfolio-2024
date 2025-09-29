import { Link } from "react-router-dom";
import { PageHeader } from "../../layout/pageHeader";

export const DataVis = () => {
  return (
    <main>
      <PageHeader title="Data Visualization Work" />
      <article>
        <div>
          <p>
            My journey in HCI and data visualization spanned the majority of my
            time in college. Here, I hope to describe how I have become involved
            in data visualization across my years in college and what I learned
            in the process.
          </p>
        </div>
        <div>
          <h3 className="text-left">Haystack Group</h3>
          <p>
            In freshman and sophomore year, I worked on the Machine Learning
            Driven Clinical Documentation project in MIT CSAIL's Haystack Group
            as an undergraduate researcher. There, I was able to practice design
            thinking in the medical space, was exposed to D3.js, and got to
            create some visualizations. The images below include some of the
            work I got to do on this project.
          </p>
          {/* <ImageCarousel>
          <div key={1}>
            <img
              className={CarouselStyle.carouselImage}
              src={MLDocCharting1}
              alt=""
            />
          </div>
          <div key={2}>
            <img
              className={CarouselStyle.carouselImage}
              src={MLDocCharting2}
              alt=""
            />
          </div>
        </ImageCarousel> */}
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
          <h3 className="text-left">Interactive Data Visualization & Society</h3>
          <p>
            Having worked in the Visualization Group for a semester, I decided
            to take MIT's data visualization course, in order to become more
            acquainted with the overall field and to get more practice creating
            data visualizations, instead of mostly creating software to create
            visualizations. Here, I'll detail a bit about what I learned overall
            from the class and things I was able to create, though there also is
            a separate page just for{" "}
            <Link to="migration-motivations" className={"text-link"}>
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

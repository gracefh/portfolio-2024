import { PageHeader } from "../../layout/pageHeader";
import { ImageCarousel } from "../../components/imageCarousel";

export const InteractiveDataVis = () => {
  const imagePath = "/image/project-images/mmdt";
  return (
    <>
      <PageHeader
        title="Central American Migration Motivations"
        subtitle={
          <a href="https://migration-mdt.vercel.app/" className="text-link">
            https://migration-mdt.vercel.app/
          </a>
        }
        image={"/image/project-previews/mmdt-preview.png"}
      />
      <article>
        <h3>Intro</h3>
        <p>
          I took MIT's Interactive Data Visualization and Society course (6.c85)
          in the spring semester of 2023. Our final project for the class
          involved creating an interactive data visualization using information
          surveyed by the World Food Program (WFP) about food security, income,
          and migration of residents of Guatemala, El Salvador, and Honduras.
        </p>
        <p>
          I was in a team with 2 other students, and within the group, I worked
          mainly on wireframing and coding. I ended up writing the code for all
          of the visualizations except for the third one. We used D3.js for all
          of the visualizations I created and Svelte for the overall website
          itself.
        </p>
        <h3>Brainstorming</h3>
        <p>
          We first got acquainted with the dataset through an individual process
          of exploring the data, where we formed our own questions based on
          context given about the dataset and created a set of data
          visualizations and analysis to investigate said questions. After
          spending some time cleaning the dataset, I used Tableau to start
          exploring the data, resulting in the following visualizations.
        </p>
        <ImageCarousel>
          <div key={1}>
            <img
              className={"carousel-image"}
              src={`${imagePath}/department_migrating_to.png`}
              alt=""
            />
          </div>
          <div key={2}>
            <img
              className={"carousel-image"}
              src={`${imagePath}/funding_and_debt_sources.png`}
              alt=""
            />
          </div>
          <div key={3}>
            <img
              className={"carousel-image"}
              src={`${imagePath}/internal_migration_and_departments.png`}
              alt=""
            />
          </div>
        </ImageCarousel>
        <p>
          After exploring the data individually, we formed our team and started
          brainstorming what kind of visualization we wanted to create. We
          decided to create a Scrollytelling visualization looking at the
          motivations behind why people decide to migrate. We ended up going
          with this because we wanted to give readers a chance to explore data
          while also providing them with some guidance so that the information
          can be more accessible.
        </p>
        <h3>Wireframes</h3>
        <p>
          Having decided on our topic for our final project, we started
          brainstorming what we wanted the visualization to actually look like.
          We took inspiration from various visualizations, from a{" "}
          <a
            href="https://benjerry.heshlindsdataviz.com/"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            data visualization
          </a>{" "}
          on Ben & Jerry's ice cream flavors to{" "}
          <a
            href="https://www.nytimes.com/interactive/2022/10/20/upshot/biden-budget-before-after-animation.html"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            NYT's analysis
          </a>{" "}
          of Biden's legislative agenda.
        </p>
        <p>
          We wanted to design the visualizations to communicate that the data is
          surveyed from individual people, each with their own stories and
          backgrounds. In order to do so, for the first two visualizations, we
          represented each surveyed response as an individual dot on the screen.
        </p>
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          title="Project Wireframes"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FdGABJoUftUrtMTv0EmFuJM%2FWireframes%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DiWP42QLp5r4VMO4a-1"
          allowFullScreen={true}
        ></iframe>
        <h3>Implementation</h3>
        <p>
          As briefly mentioned previously, the site was created using Svelte,
          and the visualizations I worked on used D3.js. The following images
          offer a look at the various parts of the site.
        </p>
        <ImageCarousel>
          <div key={1}>
            <img
              className={"carousel-image"}
              src={`${imagePath}/impl-1.png`}
              alt="First visualization"
            />
          </div>
          <div key={2}>
            <img
              className={"carousel-image"}
              src={`${imagePath}/impl-2.png`}
              alt="Second visualization"
            />
          </div>
          <div key={3}>
            <img
              className={"carousel-image"}
              src={`${imagePath}/impl-3.png`}
              alt="Interactive portion"
            />
          </div>
        </ImageCarousel>
        <p>
          Additionally, here is a look at the interactions that occur when a
          user scrolls.
        </p>
        <div>
          <video className={"video"} controls={true} title={"Scrolling Replay"}>
            <source src={`${imagePath}/impl-recording.mov`} />
          </video>
        </div>
        <h3>Learnings</h3>
        <p>
          From the project, I gained a lot more in-depth knowledge of
          scrollytelling as a means to portray data and about how to create
          interactive data visualizations that are both <i>compelling</i> and{" "}
          <i>engaging</i> for readers.
        </p>
        <p>
          I also learned a lot from my group mates, who both had somewhat
          different backgrounds from me. As someone who mostly specialized in
          the programming portion, I learned a lot about cleaning and working
          with data from my teammate who was studying Data Science at grad
          school. Both of my teammates also helped a ton on constructing the
          writing for the visualization, something that I also was less
          experienced in.
        </p>
        <p>
          Lastly, by being able to delve in-depth into real-world data, I gained
          a lot of perspective into the reasons why people living in El
          Salvador, Honduras, and Guatemala might want to migrate. And by being
          able to examine this data, talking with some professionals who
          collected and work with this data, and reading various papers
          throughout the semester on the ethics of data visualization, I learned
          a lot about the importance of presenting data in order to amplify the
          voices of those who were surveyed.
        </p>
      </article>
    </>
  );
};

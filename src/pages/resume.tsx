import { ReactElement } from "react";
import { Footer } from "../layout/footer";
import { NavBar } from "../layout/navBar";

export const ResumeItem = (props: {
  company: string;
  title: string;
  location: string;
  dates: string;
  description: ReactElement;
}) => {
  const { company, title, dates, description, location } = props;
  return (
    <div>
      <div className="resume-header">
        <div className="text-left">
          <h3 className="resume-company">{company}</h3>
          <div>{title}</div>
        </div>
        <div className="text-right">
          <i className="text-pink">{location}</i>
          <div>{dates}</div>
        </div>
      </div>
      <div className="instrument-sans-400 text-justified">{description}</div>
    </div>
  );
};

export const ResumeSectionHeader = ({ name }: { name: string }) => {
  return (
    <div className="resume-section-header">
      <span></span>

      <h2 className="text-pink">{name}</h2>
      <span></span>
    </div>
  );
};

export const Resume = () => {
  return (
    <main>
      <NavBar />
      <section>
        <div>
          <ResumeSectionHeader name="experience" />
          <ResumeItem
            company={"Uncountable"}
            title={"Full-Stack Engineer"}
            location={"San Francisco, CA"}
            dates={"Aug 2024 - Present"}
            description={
              <ul>
                <li>
                  Working on various projects on core pages of our platform
                </li>
              </ul>
            }
          />
          <ResumeItem
            company={"Hudson River Trading"}
            title={"Algorithmic Engineer Intern"}
            location={"New York, NY"}
            dates={"May 2023 - August 2023"}
            description={
              <ul>
                <li>
                  Created price viewing tool for stocks using TradingView in
                  React and Python
                </li>
                <li>
                  Implemented an internal dashboard to visualize directed
                  acyclic graphs and associated information using Plotly Dash
                  and SQLite
                </li>
              </ul>
            }
          />
          <ResumeItem
            company={"Meta"}
            title={"Software Engineering Intern, Facebook Business Growth"}
            location={"Menlo Park, CA"}
            dates={"May 2022 - Aug 2022"}
            description={
              <ul>
               <li>Created tooling to allow programmers to diagnose potential errors in a process, using Hack for back‑end and React for front‑end</li>
                <li>Proposed and drove an additional independent project after completing all base project milestones ahead of schedule</li>
              </ul>
            }
          /><ResumeItem
          company={"Hudson River Trading"}
          title={"Women in Tech and Trading Intern"}
          location={"New York, NY"}
          dates={"Jan 2022"}
          description={
            <ul>
             <li>Implemented a book builder and created trading signals, which were used in mock trading</li>
            </ul>
          }
        />
        <ResumeItem
          company={"Meta"}
          title={"Software Engineering Intern, Facebook Stories Delivery"}
          location={"Menlo Park, CA"}
          dates={"May 2021 - Aug 2021"}
          description={
            <ul>
             <li>Launched feature that caused 300k additional daily Facebook stories views</li>
<li>Worked across multiple parts of the code base, using C++, Python, and Hack</li>
<li>Completed multiple high‑impact projects and independently proposed separate projects to pursue</li>
            </ul>
          }
        />
        </div>
        <div>
          <ResumeSectionHeader name="education" />
          <ResumeItem
            company={"Massachusetts Institute of Technology"}
            title={
              "M.Eng in Computer Science & Engineering, MIT Visualization Group"
            }
            location={"Cambridge, MA"}
            dates={"Sep 2023 - May 2024"}
            description={
              <ul>
                <li>
                  Designed and created a system to improve chart and diagram
                  editing processes by combining a graphical whiteboard editor
                  (TLDraw) with principles from a data visualization library
                  (Bluefish)
                </li>
              </ul>
            }
          />
          <ResumeItem
            company={"Massachusetts Institute of Technology"}
            title={"B.S. in Computer Science / GPA: 5.0"}
            location={"Cambridge, MA"}
            dates={"Sep 2020 - May 2024"}
            description={
              <ul>
                <li>
                  <b>Computer Science Coursework:</b> Applied Cryptography and
                  Security (6.5610); Theory of Computation (18.404); AI,
                  Decision Making, and Society (6.3952); Interactive Music
                  Systems (6.4550); Software Studio (6.1040); Computer Systems
                  Engineering (6.1800); Intelligent Multimodal User Interfaces
                  (6.8510); Interactive Data Visualization and Society (6.C85)
                </li>
                <li>
                  <b>Other Relevant Coursework:</b> Linear Algebra (18.06);
                  Differential Equations (18.03); Probability and Random
                  Variables (18.600)
                </li>
                <li>
                  <b>Research Experience:</b> Performed undergraduate research
                  at the Haystack Group (2020 - 2022) and the Visualization
                  Group (2022 - 2024) in MIT CSAIL
                </li>
              </ul>
            }
          />
        </div>
        <div>
          <ResumeSectionHeader name="skills + interests" />
          <p>
            <b>Programming Languages + Frameworks:</b> Typescript, React, Svelte, Vue.js, D3.js, HTML, CSS, Python, Git, LaTeX
          </p>
          <p>
            <b>Design:</b> Adobe Illustrator, Figma, Adobe After Effects
          </p>
          <p>
            <b>World Languages:</b> English (Native), Chinese (Native)
          </p>
          <p>
            <b>Interests:</b> Full-Stack Development, Design, A Cappella
            (singing, arranging, and beatboxing), Cooking + Baking, Capoeira
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

import React from "react";
import { DownArrow } from "../components/downArrow";
import "./pages.css";
import { Positions } from "../components/positions";
import { ProjectCards } from "../components/projectCards";
import { NavBar } from "../layout/navBar";
import { Footer } from "../layout/footer";

const HomeImpl = () => {
  const ref = React.useRef<HTMLInputElement | null>(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main>
      <NavBar />
      <section className="landing-page">
        <div>
          <h1 className="name rubik-mono-one-regular">GRACE</h1>
          <h1 className="name rubik-mono-one-regular">HUANG</h1>
        </div>
        <Positions />
        <DownArrow handleClick={handleClick} />
      </section>
      <section className="about" ref={ref}>
        <div className="about-header">
          <h2 className="text-white header-md">ABOUT</h2>
        </div>
        <div className="about-content responsive-width-50 align-self-end">
          <p className="instrument-sans-500-normal text-black">
            Hello! I'm Grace, and I'm a <b>full-stack engineer</b> based in <b>San Francisco</b>. 
            I currently work at Uncountable. Before that, I graduated with a BS and MEng in 
            Computer Science and Engineering from MIT in 2024. While there, I did
            research in MIT's Visualization Group, sang a cappella, and practiced
            taekwondo. I enjoy building software (hence the existence of this
            page!), learning about UI/UX design, and thinking about human
            computer interactions, especially with regards to data visualization.
            Outside of work, you can find me baking a variety of desserts,
            making music, drawing on Procreate or in margins of notebooks, or
            exploring San Francisco!
          </p>
        </div>
      </section>
      <section className="projects section-flex">
        <div>
          <h2 className="text-pink header-lg">PROJECTS</h2>
          {/* <i>what I've worked on!</i> */}
        </div>
        <ProjectCards />
      </section>
      <Footer/>
    </main>
  );
};

export const Home = React.memo(HomeImpl);

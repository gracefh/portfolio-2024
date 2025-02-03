import React from "react";
import { DownArrow } from "../components/downArrow";
import "./pages.css";
import { Positions } from "../components/positions";
import { HomeProjectSection, ProjectCards } from "../components/projectCards";

const HomeImpl = () => {
  const ref = React.useRef<HTMLInputElement | null>(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main>
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
        <div className="about-content responsive-width-70 align-self-end">
          <p className="instrument-sans-500-normal text-black text-justified">
            Hello! I'm Grace, and I'm a <b>full-stack engineer</b> based in{" "}
            <b>San Francisco</b>. I currently work at Uncountabl, but before
            starting there in August, 2024, I graduated with a BS and MEng in
            Computer Science and Engineering from MIT. While at MIT, I
            did research in MIT's Visualization Group, sang a cappella, and
            practiced taekwondo. I enjoy building software, learning about UI/UX
            design, data visualization, and human-computer interactions. Outside
            of work, you can find me baking a variety of desserts, making music,
            drawing on Procreate or in margins of notebooks, or exploring San
            Francisco!
          </p>
        </div>
      </section>
      <HomeProjectSection />
    </main>
  );
};

export const Home = React.memo(HomeImpl);

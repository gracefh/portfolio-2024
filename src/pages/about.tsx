import React from "react";
import "./pages.css";
import { NavBar } from "../layout/navBar";
import { ThreeColumnSection } from "../layout/threeColumnSection";
import { TwoColumnSection } from "../layout/twoColumnSection";
import { Footer } from "../layout/footer";

const AboutImpl = () => {
  console.log("I'm rendering");
  return (
    <main>
      <NavBar />
      <section>
        <h2 className="text-pink header-lg">ABOUT</h2>
        <div>some fun facts about Grace!</div>
      </section>

      <TwoColumnSection>
        <div>
          <ul>
            <li>Currently based in San Francisco</li>
          </ul>
        </div>
      </TwoColumnSection>
      <Footer />

      {/* <ThreeColumnSection sectionTitle="RANDOM TESTING" additionalClass="pink-background">
          <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nihil illo veniam ut, quisquam nulla numquam aut quod aliquam explicabo totam pariatur quae! Dolorem, doloribus ea in dolor vel sed.</div>
          <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nihil illo veniam ut, quisquam nulla numquam aut quod aliquam explicabo totam pariatur quae! Dolorem, doloribus ea in dolor vel sed.</div>
          <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nihil illo veniam ut, quisquam nulla numquam aut quod aliquam explicabo totam pariatur quae! Dolorem, doloribus ea in dolor vel sed. </div>
        </ThreeColumnSection> */}
    </main>
  );
};

export const About = React.memo(AboutImpl);

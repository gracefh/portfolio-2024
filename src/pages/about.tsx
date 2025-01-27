import React from "react";
import "./pages.css";
import { TwoColumnSection } from "../layout/twoColumnSection";

const AboutImpl = () => {
  return (
    <main>
      <section>
        <div className="section-header">
          <h2 className="text-pink header-lg">ABOUT</h2>
          <div className="subtitle">some fun facts about me!</div>
        </div>
        <TwoColumnSection>
          <div></div>
          <div className="text-left">
            <ul>
              <li>Currently based in San Francisco, CA</li>
              <li>
                Working as a Full-Stack Engineer at{" "}
                <a href="https://www.uncountable.com/" className="text-link">
                  Uncountable
                </a>
              </li>
              <li>Graduated with B.S. and M.Eng from MIT, class of 2024</li>
              <li>
                Interested in exploring front-end development, data
                visualizations, and design
              </li>
              <li>
                Drawing digital art, learning Illustrator, and working on crafts{" "}
                <a
                  href="https://www.instagram.com/butter.and.boba"
                  className="text-link"
                >
                  @butter.and.boba
                </a>
              </li>
              <li>
                A cappella enthusiast -- previously part of MIT Syncopasian and
                currently arranging songs I like, casually beatboxing, and
                contemplating creating a cappella covers
              </li>
              <li>Currently training Capoeira Angola, previously Taekwondo</li>
            </ul>
          </div>
        </TwoColumnSection>
      </section>
    </main>
  );
};

export const About = React.memo(AboutImpl);

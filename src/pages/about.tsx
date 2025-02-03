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
          <div className="about-image">
            <img src="image/grace-face.jpg" alt="Grace's frace"></img>
          </div>
          <div className="text-left about-description">
            <ul>
              <li>Currently based in <span className="text-pink">San Francisco, CA</span></li>
              <li>
                Working as a Full-Stack Engineer at{" "}
                <a href="https://www.uncountable.com/" className="text-link">
                  Uncountable
                </a>
              </li>
              <li>Graduated with B.S. and M.Eng from <span className="text-pink">MIT</span>, class of 2024</li>
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
                A cappella enthusiast -- previously part of <span className="text-pink">MIT Syncopasian</span> and
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

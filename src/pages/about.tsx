import React from "react";
import "./pages.css";
import { NavBar } from "../layout/navBar";

const AboutImpl = () => {
    console.log("I'm rendering")
    return (
      <main>
        <NavBar />
        <section>
            hello
        </section>
      </main>
    );
  };
  
  export const About = React.memo(AboutImpl);
import React from "react"
import { DownArrow } from "../components/downArrow"
import "./home.css"
import { Positions } from "../components/positions";

const HomeImpl = () => {

    const ref = React.useRef<HTMLInputElement | null>(null);
        const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
        };
    return <main>
        <section className="landing-page">
            <div>
                <h1 className="name rubik-mono-one-regular">GRACE</h1>
                <h1 className="name rubik-mono-one-regular">HUANG</h1>
            </div>
            <Positions />
            <DownArrow handleClick={handleClick}/>
        </section>
        <section className="about" ref={ref}>
            <div id="about-header">
            <h2 className="text-white instrument-sans-header">ABOUT</h2>
            </div>
            <div id="about-content">
                <p className="instrument-sans-500">
                    hello! I'm Grace, a full-stack engineer at Uncountable
                </p>
            </div>
        </section>
        <section className="projects">

        </section>
    </main>
}


export const Home = React.memo(HomeImpl)
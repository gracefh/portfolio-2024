import React from "react"
import { DownArrow } from "../components/downArrow"
import "./home.css"

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
            <div>
                full-stack engineer
            </div>
            <DownArrow handleClick={handleClick}/>
        </section>
        <section className="projects" ref={ref}>
            apsdofjads
        </section>
    </main>
}


export const Home = React.memo(HomeImpl)
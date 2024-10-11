import "./projectCards.css"
export const ProjectCards = () => {
    return <div className="project-cards-wrapper">
    {[1, 2].map((_, ind) =>
        {return <div className={`project-card ${ind % 2 == 0 ? "align-self-end" : "align-self-start"}`} key={ind}>
        <div>header</div>
        <div>date</div>
        <div>Image</div>
        <div className="content">Content</div>
    </div>})}</div>
}
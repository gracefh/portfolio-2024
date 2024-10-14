import { NavLink } from "react-router-dom"
import "./navBar.css"


export const NavBarItem = ({title, link}: {title: string, link: string}) => {
    return <NavLink to={link} className={({isActive}) => `instrument-sans-500 nav-link ${isActive ? "active" : ""}`} >{title}</NavLink>
}
export const NavBar = () => {
    return <div className="nav-bar-wrapper">
        <div className="nav-bar">
        <NavBarItem title={"home"} link="/"></NavBarItem>
        <NavBarItem title={"projects"} link="/projects"></NavBarItem>
        <NavBarItem title={"about"} link="/about"></NavBarItem>
        <NavBarItem title={"resume"} link="/resume"></NavBarItem>
        </div>
    </div>
}
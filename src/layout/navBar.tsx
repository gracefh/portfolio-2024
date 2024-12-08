import { NavLink } from "react-router-dom";
import "./navBar.css";
import { ReactElement, useState } from "react";

import { motion } from "framer-motion";

export const NavBarItem = ({
  title,
  link,
  subItems,
}: {
  title: string;
  link: string;
  subItems?: ReactElement;
}) => {
  return (
    <div className="item-wrapper">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "ease" }}
        layout
      >
        <NavLink
          to={link}
          className={({ isActive }) =>
            `instrument-sans-500-spaced nav-link ${isActive ? "active" : ""}`
          }
        >
          {title}
        </NavLink>
      </motion.div>
      {/* {subItems != null && <div className="dropdown-menu">{subItems}</div>} */}
    </div>
  );
};
export const NavBar = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.div className="nav-bar-wrapper">
      <motion.div
        layout
        className="nav-bar"
        data-isHover={isHover}
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
        transition={{ type: "ease" }}
      >
        <NavBarItem title={"home"} link="/"></NavBarItem>
        <NavBarItem
          title={"projects"}
          link="/projects"
          subItems={
            <NavBarItem
              title={"actual project"}
              link="/projects"
            ></NavBarItem>
          }
        ></NavBarItem>
        <NavBarItem title={"about"} link="/about"></NavBarItem>
        <NavBarItem title={"resume"} link="/resume"></NavBarItem>
      </motion.div>
    </motion.div>
  );
};

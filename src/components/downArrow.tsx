import { useRef } from "react";
import "./downArrow.css"

export const DownArrow = ({handleClick}: {handleClick: () => void}) => {
    return <div className="down-arrow-wrapper"><div className="down-arrow" onClick={handleClick}></div></div>
}


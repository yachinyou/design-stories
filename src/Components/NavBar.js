import React from "react";
import Logo from "../Images/design_stories_logo.png";
import { Link } from "react-router-dom";

const navBar = () => {
    return (
        <div className="nav-bar">
            <Link to="/"><img src={Logo} className="float-left" alt="this is logo" /></Link>
            <div className="nav-links float-right">
                <Link to="/ux-case-study-template">UX Case Study Template</Link>
                <Link to="/design-process-visualization">Design Process Visualization</Link>
            </div>
        </div>
    )
}

export default navBar;
import React from "react";
import Logo from "../Images/design_stories_logo.png"

const navBar = () => {
    return (
        <div className="nav-bar">
            <img src={Logo} className="float-left" alt="this is logo" />
        </div>
    )
}

export default navBar;
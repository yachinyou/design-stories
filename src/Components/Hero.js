import React from "react";
import { Button } from 'reactstrap';

const hero = (props) => {
    return (
        <div className="hero">
                <h1>UX Case Study Template</h1>
                <h5>Create a story of <span className="bold">strategy</span>, <span className="bold">discovery</span> and <span className="bold">user delight</span>, fast.</h5>
                <Button className="hero-button" onClick={props.click}>Create Now</Button>
        </div>
    )
}

export default hero;
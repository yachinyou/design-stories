import React from "react";
import { Button } from 'reactstrap';

const hero = (props) => {
    return (
        <div className="hero">
            <h1>{props.header}</h1>
            <h5>{props.subheader}</h5>
        </div>
    )
}

export default hero;
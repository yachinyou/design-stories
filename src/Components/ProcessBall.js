import React, { Component } from 'react';

class ProcessBall extends Component {

    constructor(props){
        super(props);

        this.state = {
            id: props.id,
            stepName: props.stepName,
            stepDetails: props.stepDetails
        };
    }

    stepNameChangeHandler = (event) => {
        const stepName = event.target.value;
        this.setState({stepName: stepName});
    }

    stepDetailsChangeHandler = (event) => {
        const stepDetails = event.target.value;
        this.setState({stepDetails: stepDetails});
        console.log(this.state.stepDetails);
    }

    autoGrowTextArea = () => {
        const elements = [].slice.call(document.getElementsByClassName("process-step-details"));
        elements.map((element) => {
            element.style.height = "8em";
            element.style.height = (element.scrollHeight) + "px";
        });
    }

    render(){
        return(
            <div className="process-step">
                <div className="process-ball" style={{backgroundImage: "linear-gradient(to bottom, " + this.props.gradientColor1 + " 0%, " + this.props.gradientColor2 + " 100%)"}}>
                    <input className="process-ball-input" value={this.state.stepName} onChange={this.stepNameChangeHandler} />
                </div>
                <textarea className="process-step-details" value={this.state.stepDetails} onChange={this.stepDetailsChangeHandler} onKeyUp={this.autoGrowTextArea}/>
            </div>
        );
    }
}

export default ProcessBall;
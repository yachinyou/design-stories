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

    render(){
        return(
            <div className="process-step">
                <div className="process-ball" style={{backgroundImage: "linear-gradient(to bottom, " + this.props.gradientColor1 + " 0%, " + this.props.gradientColor2 + " 100%)"}}>
                    <input className="process-ball-input" value={this.state.stepName} onChange={this.stepNameChangeHandler} />
                </div>
                <textarea className="test-textarea" value={this.state.stepDetails} onChange={this.stepDetailsChangeHandler}/>
            </div>
        );
    }
}

export default ProcessBall;
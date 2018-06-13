import React, { Component } from 'react';
import ProcessBall from './ProcessBall';
import { SketchPicker } from 'react-color';
import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';

class ProcessGraphic extends Component {

    state = {
        step1DefaultDetails: "User Interviews\nCompetitive Analysis\nCard Sorting",
        step2DefaultDetails: "Personas\nPain Points\nExperience Mapping",
        step3DefaultDetails: "Storyboard\nSketches\nWireframes",
        step4DefaultDetails: "Visual Design\nPrototype\nAnimations",
        step5DefaultDetails: "Usability Testing\nA/B Testing",
        gradientColor1: "#cccccc",
        gradientColor2: "#eeeeee",
        gradientInputClicked: "none",
        displayColorPicker: false
    }

    inputClickHandler = (e) => {
        this.setState({
            displayColorPicker: !this.state.displayColorPicker,
            gradientInputClicked: e.target.id,
        });
        console.log(e.target.id + " clicked!");
    }

    closeColorPicker = () => {
        this.setState({
            displayColorPicker: false
        });
    }

    colorPickerDefaultColor = (gradientInput) => {
        if (gradientInput == "gradientInput1") {
            return this.state.gradientColor1;
        } else {
            return this.state.gradientColor2;
        }
    }

    handleChangeComplete = (color) => {

        if (this.state.gradientInputClicked == "gradientInput1") {
            this.setState({
                gradientColor1: color.hex
            });
        } else if (this.state.gradientInputClicked == "gradientInput2") {
            this.setState({
                gradientColor2: color.hex
            });
        }

        console.log(color);
    }

    downloadImage = () => {
        domtoimage.toBlob(document.getElementById('process-graphic'))
        .then(function (blob) {
            FileSaver.saveAs(blob, 'my-node.png');
        });
    }

    render(){

        const popover = {
            position: "relative",
            zIndex: "2"
        }

        const cover = {
            position: "fixed",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0"
        }

        return(
            <div>
                <div id="process-graphic">
                    <ProcessBall id='step1' className="step1" stepName="Empathize" stepDetails={this.state.step1DefaultDetails} gradientColor1={this.state.gradientColor1} gradientColor2={this.state.gradientColor2}/>
                    <ProcessBall id='step2' className="step2" stepName="Define" stepDetails={this.state.step2DefaultDetails} gradientColor1={this.state.gradientColor1} gradientColor2={this.state.gradientColor2}/>
                    <ProcessBall id='step3' className="step3" stepName="Ideate" stepDetails={this.state.step3DefaultDetails} gradientColor1={this.state.gradientColor1} gradientColor2={this.state.gradientColor2}/>
                    <ProcessBall id='step4' className="step4" stepName="Prototype" stepDetails={this.state.step4DefaultDetails} gradientColor1={this.state.gradientColor1} gradientColor2={this.state.gradientColor2}/>
                    <ProcessBall id='step5' className="step5" stepName="Test" stepDetails={this.state.step5DefaultDetails} gradientColor1={this.state.gradientColor1} gradientColor2={this.state.gradientColor2}/>
                </div>
                <div>
                    <input id="gradientInput1" onClick={((e) => {this.inputClickHandler(e)})} value={this.state.gradientColor1} />
                    <input id="gradientInput2" onClick={((e) => {this.inputClickHandler(e)})} value={this.state.gradientColor2} />
                    {this.state.displayColorPicker ? 
                        <div style={popover}>
                            <div style={cover} onClick={this.closeColorPicker} />
                                <SketchPicker onChangeComplete={this.handleChangeComplete} color={ this.colorPickerDefaultColor(this.state.gradientInputClicked) }/>
                        </div> : null    
                    }
                </div>
                <button onClick={this.downloadImage}>download</button>
            </div>
        )
    }
}

export default ProcessGraphic;
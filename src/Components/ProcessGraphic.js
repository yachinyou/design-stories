import React, { Component } from 'react';
import ProcessBall from './ProcessBall';
import { SketchPicker } from 'react-color';
import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';
import { Button } from 'reactstrap';
import ProfileImage from "../Images/yachin_profile.png";
import FeedbackModal from "../Components/FeedbackModal";

class ProcessGraphic extends Component {

    state = {
        step1DefaultDetails: "User Interviews\nCompetitive Analysis\nCard Sorting",
        step2DefaultDetails: "Personas\nPain Points\nExperience Mapping",
        step3DefaultDetails: "Storyboard\nSketches\nWireframes",
        step4DefaultDetails: "Visual Design\nPrototype\nAnimations",
        step5DefaultDetails: "Usability Testing\nA/B Testing",
        gradientColor1: "#FC6076",
        gradientColor2: "#FFB474",
        stepNameColor: "#ffffff",
        colorPickerFor: "none",
        displayColorPicker: false
    }

    inputClickHandler = (e) => {
        this.setState({
            displayColorPicker: !this.state.displayColorPicker,
            colorPickerFor: e.target.id,
        });
        console.log(e.target.id + " clicked!");
    }

    closeColorPicker = () => {
        this.setState({
            displayColorPicker: false
        });
    }

    colorPickerDefaultColor = (element) => {
        if (element == "gradientInput1") {
            return this.state.gradientColor1;
        } else if (element == "gradientInput2") {
            return this.state.gradientColor2;
        } else if (element == "stepNameColor") {
            return this.state.stepNameColor;
        } 
    }

    handleChangeComplete = (color) => {

        if (this.state.colorPickerFor == "gradientInput1") {
            this.setState({
                gradientColor1: color.hex
            });
        } else if (this.state.colorPickerFor == "gradientInput2") {
            this.setState({
                gradientColor2: color.hex
            });
        } else if (this.state.colorPickerFor == "stepNameColor") {
            this.setState({
                stepNameColor: color.hex
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

    handleDownloadClick = (e) => {

        domtoimage.toBlob(document.getElementById('process-graphic'))
        .then(function (blob) {
            FileSaver.saveAs(blob, 'my-node.png');
        });

        this.feedbackModal.toggle();
    }

    render(){

        const popover = {
            position: "relative",
            zIndex: "2",
            top: "-100%"
        }

        const cover = {
            position: "fixed",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0"
        }

        return(
            <div id="app-area">
                <div className="container">
                    <div class="row">
                        <div className="helperText col-lg-12 col-md-12 col-sm-12 col-12">
                            <p><span className="bold black">Edit text</span>, <span className="bold black">change colors</span> and <span className="bold pink">Download</span> your own UX design process graphic. <br /> Best used on desktop.</p>
                        </div>
                        <div className="panel process-graphic-panel">
                            <div className="panel-header">
                                <p>Your UX Design Process</p>
                                <Button className="download-button float-right" size="sm" onClick={this.handleDownloadClick}>DOWNLOAD</Button>
                            </div>
                            <div id="process-graphic">
                                <ProcessBall id='step1' className="step1" stepName="Empathize" stepDetails={this.state.step1DefaultDetails} gradientColor1={this.state.gradientColor1} gradientColor2={this.state.gradientColor2} stepNameColor={this.state.stepNameColor} />
                                <ProcessBall id='step2' className="step2" stepName="Define" stepDetails={this.state.step2DefaultDetails} gradientColor1={this.state.gradientColor1} gradientColor2={this.state.gradientColor2} stepNameColor={this.state.stepNameColor}/>
                                <ProcessBall id='step3' className="step3" stepName="Ideate" stepDetails={this.state.step3DefaultDetails} gradientColor1={this.state.gradientColor1} gradientColor2={this.state.gradientColor2} stepNameColor={this.state.stepNameColor}/>
                                <ProcessBall id='step4' className="step4" stepName="Prototype" stepDetails={this.state.step4DefaultDetails} gradientColor1={this.state.gradientColor1} gradientColor2={this.state.gradientColor2} stepNameColor={this.state.stepNameColor}/>
                                <ProcessBall id='step5' className="step5" stepName="Test" stepDetails={this.state.step5DefaultDetails} gradientColor1={this.state.gradientColor1} gradientColor2={this.state.gradientColor2} stepNameColor={this.state.stepNameColor}/>
                            </div>
                        </div>
                        <div className="process-graphic-control">
                            <p className="control-label float-left">Gradients</p>
                            <input id="gradientInput1" className="float-left" onClick={((e) => {this.inputClickHandler(e)})} value={this.state.gradientColor1} />
                            <p className="control-label float-left">To</p>
                            <input id="gradientInput2" className="float-left" onClick={((e) => {this.inputClickHandler(e)})} value={this.state.gradientColor2} />
                            <p className="control-label float-left">Header Color</p>
                            <input id="stepNameColor" className="float-left" onClick={((e) => {this.inputClickHandler(e)})} value={this.state.stepNameColor} />
                            {this.state.displayColorPicker ? 
                                <div style={popover}>
                                    <div style={cover} onClick={this.closeColorPicker} />
                                        <SketchPicker onChangeComplete={this.handleChangeComplete} color={ this.colorPickerDefaultColor(this.state.colorPickerFor) }/>
                                </div> : null    
                            }
                        </div>
                        <FeedbackModal ref={feedback => this.feedbackModal = feedback}/>

                    </div>
                </div>
            </div>
        )
    }
}

export default ProcessGraphic;
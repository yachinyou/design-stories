import React, { Component } from 'react';
import DownloadModal from './DownloadModal'
import { Button } from 'reactstrap';
import SampleCoverImage from "../Images/sample_cover_image.jpg"

import * as jsPDF from 'jspdf';

//import html2canvas from 'html2canvas';
//import domtoimage from 'dom-to-image';
//import * as saveAs from 'file-saver';
//import { saveAs } from 'file-saver';
//import * as rasterizeHTML from 'rasterizehtml';

import '../App.css';

import $ from "jquery";



import { Document,Page } from 'react-pdf' 


class CaseStudy extends Component {
  constructor(props) {
    super(props);
    this.state = {addClass: false}

    this.handleDownloadClick = this.handleDownloadClick.bind(this);

  }
  toggle() {
    this.setState({addClass: !this.state.addClass});
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
 }



  handleDownloadClick(e){

    this.downloadModal.toggle();
  }


  render() {
 let divStyle = { 
    backgroundColor: '#f5f5f5',
  width: '210mm',
  minHeight: '297mm',
  marginLeft: 'auto',
  marginRight: 'auto'
};

const conStyle = {
  overflow: 'unset',
  height: 'auto',
};


 let processBlocks;
    if(this.props.processBlocks){
      processBlocks = this.props.processBlocks.map((block, index) => {
        return (
          <div className="process-block">
            <p className="content-title">
              {block.contentTitle}
            </p>
            <p className="content-description">
            {block.content}
          </p>
        </div>
        )
      })
    }

    return (
      <div className="CaseStudy col-lg-6 col-md-6 col-12" id="divToPrint" >
        <div className="panel">
          <div className="panel-header">
            <p>Your Case Study Template</p>
           
            <Button className="download-button float-right" size="sm" onClick={this.handleDownloadClick}>DOWNLOAD</Button>
           
          </div>
          <div className="processBlocksContainer showContainer" id="contWrapper" >{/* style={conStyle} */}
            <img src={SampleCoverImage} alt="sample UX case study cover image" />
            <h4>My Design Case Study</h4>
            { processBlocks }
          </div>
          <DownloadModal ref={download => this.downloadModal = download}/>
        </div>
        <div id="editor"></div>
      </div>
    );
  }
}

export default CaseStudy;

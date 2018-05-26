import React, { Component } from 'react';
import DownloadModal from './DownloadModal'
import { Button } from 'reactstrap';
import SampleCoverImage from "../Images/sample_cover_image.jpg"

class CaseStudy extends Component {
  constructor(props) {
    super(props);

    this.handleDownloadClick = this.handleDownloadClick.bind(this);
  }

  handleDownloadClick(e){
    this.downloadModal.toggle();
  }

  render() {
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
      <div className="CaseStudy col-lg-6 col-md-6 col-12">
        <div className="panel">
          <div className="panel-header">
            <p>Your Case Study Template</p>
            <Button className="download-button float-right" size="sm" onClick={this.handleDownloadClick}>DOWNLOAD</Button>
          </div>
          <div className="processBlocksContainer">
            <img src={SampleCoverImage} alt="sample UX case study cover image" />
            <h4>My Design Case Study</h4>
            { processBlocks }
          </div>
          <DownloadModal ref={download => this.downloadModal = download}/>
        </div>
      </div>
    );
  }
}

export default CaseStudy;

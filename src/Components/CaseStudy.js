import React, { Component } from 'react';
import DownloadModal from './DownloadModal'
import { Button } from 'reactstrap';
import SampleCoverImage from "../Images/sample_cover_image.jpg"

import * as jsPDF from 'jspdf';

import html2canvas from 'html2canvas';

class CaseStudy extends Component {
  constructor(props) {
    super(props);
    this.handleDownloadClick = this.handleDownloadClick.bind(this);
  }



  handleDownloadClick(e){
    
    const input = document.getElementById('divToPrint');

/* 
    let mywindow = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
    mywindow.document.write('<html><head><title></title>');
    mywindow.document.write('<link rel="stylesheet" href="../src/App.css" type="text/css" media="print" />');
    mywindow.document.write('</head><body >');
    mywindow.document.write(input);
    mywindow.document.write('</body></html>');
    
    setTimeout(function(){mywindow.print();},1000);
    mywindow.close(); */
 
/* let WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
//WinPrint.document.write('<link rel="stylesheet" href="http://localhost:3000/App.css" type="text/css" media="all" />');
WinPrint.document.write(input.innerHTML);
//WinPrint.document.close();
//WinPrint.focus();
WinPrint.print();  */
//window.print();

/*     html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        window.print();
        pdf.save("download.pdf");
      }) ; 
 */
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

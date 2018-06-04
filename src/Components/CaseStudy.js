import React, { Component } from 'react';
import DownloadModal from './DownloadModal'
import { Button } from 'reactstrap';
import SampleCoverImage from "../Images/sample_cover_image.jpg"

import * as jsPDF from 'jspdf';

import html2canvas from 'html2canvas';

import domtoimage from 'dom-to-image';

import '../App.css';

import $ from "jquery";

import * as rasterizeHTML from 'rasterizehtml';

import { Document,Page } from 'react-pdf' 

//import * as saveAs from 'file-saver';
import { saveAs } from 'file-saver';

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
    
    const input = document.getElementById('divToPrint');
/* 
var doc = new jsPDF('p','pt','a4');
var specialElementHandlers = {
  '#editor': function (element, renderer) {
   return true;
}
};

var html=$(input).html();

doc.setFontSize(12)
    //doc.text(10,20,'Design Stories');

    //doc.text(20,80,'Your Case Study Template');
    doc.fromHTML($(input).get(0),10,10, {
      
        'width' : 500,
        //'height' : doc.internal.pageSize.height,
        'elementHandlers': specialElementHandlers,
        'align': 'center',
        'margin': 500,
       
    }, function(bla) {   doc.save('saveInCallback.pdf');
  }); */
   

  


  //  const node = document.getElementById('divToPrint');

  
  /*   domtoimage.toBlob(document.getElementById('divToPrint'))
    .then(function (blob) {
        window.saveAs(blob, 'my-node.png');
    });
 */

/*      domtoimage.toJpeg(document.getElementById('divToPrint'), { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    }); 
     */

/*     domtoimage.toPng(input)
    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    }); */

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

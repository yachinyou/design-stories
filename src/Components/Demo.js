import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

import * as jsPDF from 'jspdf';



class Demo extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoad = ({ numPages }) => {
    alert('hii');
    this.setState({ numPages });
  }

  render() {


/* let Url = "http://localhost:3000/?feedback=print";

if(document.location.href == Url)
{ 
  alert('hiii');

  let mywindow = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
  mywindow.document.write('<link rel="stylesheet" href="http://localhost:3000/print.css" type="text/css" media="print" />');
  setTimeout(function(){mywindow.print();},2000);
}

 */

    const { pageNumber, numPages } = this.state;
 
    return (
      <div>
        <Document
          file="download.pdf"
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}

  /* state = {
    numPages: null,
    pageNumber: 1,
  }



  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;
    let doc = new jsPDF()

    doc.text('Hello world!', 10, 10)
    doc.save('a4.pdf');
 
   

    return (
      <div>
         
        
       
      </div>
    );
  }
} */

export default Demo;
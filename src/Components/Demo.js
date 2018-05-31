import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

import * as jsPDF from 'jspdf';

class Demo extends Component {
  state = {
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
}

export default Demo;
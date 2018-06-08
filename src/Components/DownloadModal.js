import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import React, { Component } from 'react';
import ProfileImage from "../Images/yachin_profile.png";


import GithubCorner from "react-github-corner";
import MailchimpSubscribe from "react-mailchimp-subscribe"; //For saving email to mailchimp list

import { Document,Page } from 'react-pdf' //For download template
import CaseStudy from './CaseStudy';

import  '../App.js';


import $ from "jquery";


import * as jsPDF from 'jspdf';
//import html2canvas from 'html2canvas';
//import domtoimage from 'dom-to-image';
//import pdfMake from "pdfmake/build/pdfmake";
//import pdfFonts from "pdfmake/build/vfs_fonts";
//pdfMake.vfs = pdfFonts.pdfMake.vfs;


class DownloadModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      feedback:'Thank you for your feedback...'
     
    }; this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  downloadPDF() {
    document.getElementById("download-message").innerHTML = "Creating your case study template ...";
    setTimeout(function(){
  
      const input = document.getElementById('contWrapper');

      var doc = new jsPDF('p','pt','a4');

      var specialElementHandlers = {
        '#editor': function (element, renderer) {
         return true;
      }
      };
      
      var html=$(input).html();
      doc.setFont("helvetica");
      doc.setFontType("bold");
      
      doc.setFontSize(12)
        var margins = {
          top: 30,
          bottom: 60,
          left: 40,
          width: 522
      };

      var source = $(input).get(0);
     
      doc.fromHTML(
      source, // HTML string or DOM elem ref.
      margins.left, // x coord
      margins.top, { // y coord
          'width': margins.width, // max width of content on PDF
          'elementHandlers': specialElementHandlers
      }, function(bla) {   doc.save('caseStudy.pdf')},margins);
      document.getElementById("download-message").innerHTML = "Your template is downloaded!";
      }, 2000)
  }
  
  render() {
    console.log(this.props);

    let item = this.props.item;

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
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalBody className="download-modal">
          <img className="profile-image" src={ProfileImage} alt="yachin's profile image" />
          <div className="greeting">
            <h5>Howdy!</h5>
            <p>I'm Yachin, UX designer and creator of this tool.<br /> <span className="bold black">Your feedback will help me improve this tool, please let me know what you think!</span></p>
            <Button size="lg" className="modal-download-button" onClick={this.downloadPDF} >DOWNLOAD template</Button>
            <p id="download-message"></p>
          </div>  

          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdeyGBdLrVGQr7SnNssPW3SZflKGku_86koT4FZ9WSbWxJ4Yg/viewform?embedded=true" width="400" height="640" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>

        </ModalBody>
      </Modal>

    );
  }
}

export default DownloadModal;

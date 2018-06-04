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
import html2canvas from 'html2canvas';

import domtoimage from 'dom-to-image';


import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;


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


const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,     
    });

   
  return (
    <div
style={{
        borderRadius: 0,
        padding: 10,
      
      }}
    >
      {status === "sending" && (
      <div>
      <div style={{ color: "black" }}>Sending...</div>  
    
    {/*   {setTimeout(function(){ window.print() }, 3000)}   */}
   { 
     setTimeout(function(){

      
        
      const input = document.getElementById('contWrapper');

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
        });
         
      
/*       html2canvas(document.getElementById('divToPrint'))
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/jpeg');
         const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
       pdf.save("download.pdf");
      })  */
        
    
      }, 2000)
    }
     
  
       </div>
      )}

      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }} 
            dangerouslySetInnerHTML={{ __html: "Thank you for downloading the template." }} 
         
        />
      )}
     <FormGroup>
          <Input type="text" name="feedback" id="feedback" placeholder="It'd be better if..." />
    </FormGroup>
           
   <FormGroup>
      <Label for="exampleEmail" hidden>Email</Label>
        <input style={{ fontSize: "1.0em", padding: 5,borderRadius: "9px",width:"100%" }} ref={node => (email = node)} type="email" name="email" id="resources-email-signup"  placeholder="Your Email"
      />
  </FormGroup>
 <button size="lg" className="modal-download-button float-right" onClick={submit}> SUBMIT </button>

       </div>
       
  );
};


    const url =   "https://designstories.us18.list-manage.com/subscribe/post?u=000b3640f9f8a33cfa84dfc79&amp;id=2cad738744";
  

    return (
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalBody className="download-modal">
          <img className="profile-image" src={ProfileImage} alt="yachin's profile image" />
          <div className="greeting">
            <h5>Howdy!</h5>
            <p>I'm Yachin, UX designer and creator of this tool.<br /> <span className="bold black">What can be better about this tool?</span></p>
          </div>  

           <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )} /> 

          

         {/*  <Form>
            <FormGroup>
              <Input type="text" name="feedback" id="feedback" placeholder="It'd be better if..." />
            </FormGroup>
            <FormGroup>
              <Input type="email" name="email" id="email" placeholder="Your email" />
              <p className="small-print"><span className="black">I'd love to hear what you think about this tool.</span> Your email will be kept private.</p>
            </FormGroup>
            <Button size="lg" className="modal-download-button float-right" onclick="" >SUBMIT</Button>
          </Form> */}
        </ModalBody>
      </Modal>

  
    );
  }
}

export default DownloadModal;

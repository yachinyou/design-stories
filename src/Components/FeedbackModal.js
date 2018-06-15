import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import React, { Component } from 'react';
import ProfileImage from "../Images/yachin_profile.png";
import  '../App.js';


class FeedbackModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }; 
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  
  render() {

    let item = this.props.item;
   
    return (
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalBody className="download-modal">
          <img className="profile-image" src={ProfileImage} alt="yachin's profile image" />
          <div className="greeting">
            <h5>Howdy!</h5>
            <p>I'm Yachin, UX designer and creator of this tool.<br /> <span className="bold black">Your feedback will help me improve this tool, please let me know what you think!</span></p>
          </div>  

          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdeyGBdLrVGQr7SnNssPW3SZflKGku_86koT4FZ9WSbWxJ4Yg/viewform?embedded=true" width="400" height="640" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>

        </ModalBody>
      </Modal>

    );
  }
}

export default FeedbackModal;

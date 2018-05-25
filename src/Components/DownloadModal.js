import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import React, { Component } from 'react';
import ProfileImage from "../Images/yachin_profile.png";

class DownloadModal extends Component {
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
    console.log(this.props);
    let item = this.props.item;
    return (
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalBody className="download-modal">
          <img className="profile-image" src={ProfileImage} alt="yachin's profile image" />
          <div className="greeting">
            <h5>Howdy!</h5>
            <p>I'm Yachin, UX designer and creator of this tool.<br /> <span className="bold black">What can be better about this tool?</span></p>
          </div>  
          <Form>
            <FormGroup>
              <Input type="text" name="feedback" id="feedback" placeholder="It'd be better if..." />
            </FormGroup>
            <FormGroup>
              <Input type="email" name="email" id="email" placeholder="Your email" />
              <p className="small-print"><span className="black">I'd love to hear what you think about this tool.</span> Your email will be kept private.</p>
            </FormGroup>
            <Button size="lg" className="modal-download-button float-right">DOWNLOAD</Button>
          </Form>
        </ModalBody>
      </Modal>
    );
  }
}

export default DownloadModal;

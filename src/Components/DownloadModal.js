import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import React, { Component } from 'react';

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
        <ModalBody>
          <h4>Howdy! I'm Yachin, UX designer and creator of this tool.</h4>
          <h6>What can be better about this tool?</h6>
          <Form>
            <FormGroup>
              <Input type="text" name="feedback" id="feedback" placeholder="It'd be better if..." />
            </FormGroup>
            <FormGroup>
              <Input type="email" name="email" id="email" placeholder="Your email" />
            </FormGroup>
            <Button size="lg">START DOWNLOAD</Button>
          </Form>
        </ModalBody>
      </Modal>
    );
  }
}

export default DownloadModal;

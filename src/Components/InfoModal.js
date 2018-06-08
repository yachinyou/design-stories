import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { Component } from 'react';
import infoImage from "../Images/sample_cover_image.jpg";

class InfoModal extends Component {
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
   //console.log(this.props);
    let item = this.props.data;

    //console.log(this.props.data.content);
  //  this.setState({
    //  content: this.props.data.content
    //});

    return (
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalBody className="info-content">
          <img src={infoImage} />
          <p>{item.content}</p>
          <p><a href={item.exampleLink} target="_blank">{item.exampleText}</a></p>
        </ModalBody>
        <ModalFooter className="modal-footer">
          <Button className="modal-link" onClick={this.toggle}>OK, GOT IT</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default InfoModal;

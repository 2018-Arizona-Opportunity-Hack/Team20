import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signupEvent } from '../redux/actions/eventActions';


import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Form, Field } from "react-final-form";
import {
  Box,
  Button,
  // ControlFeedback,
  FormGroup,
  Input,
  Label,
  // Textarea,
  // Typography
} from "smooth-ui";
import "react-table/react-table.css";
import { withRouter } from "react-router-dom";

class SignupModal extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      phoneNumValue: '',
      nameVal: ''
    };
    console.log("im constructed");
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
      nameVal: localStorage.getItem('name'),
      phoneNumValue: localStorage.getItem('phone')
    });
  }

  handleName = e => {
    this.setState({ nameVal: e.target.value })
  };

  handlePhoneNumber = e => {
    this.setState({ phoneNumValue: e.target.value })
  };

  isPhoneNum = (inputPhoneNum) => {
    const phoneRegEx = /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/;
    if ((inputPhoneNum.match(phoneRegEx))) {
      return true;
    }
    return false;
  }

  isName = (inputName) => {
    const lettersRegex = /^[a-zA-Z\s]+$/;
    if ((inputName.match(lettersRegex))) {
      return true;
    }
    return false;
  }

  handleNamePlaceholder = () => {
    if (!localStorage.getItem('name')) {
      return "Enter full name";
    }
    return localStorage.getItem('name');
  }

  handlePhonePlaceholder = () => {
    if (!localStorage.getItem('phone')) {
      return "Enter phone number (e.g. 555-555-5555)";
    }
    return localStorage.getItem('phone');
  }

  render() {
    const onSubmit = () => {
      let values = { phone: this.state.phoneNumValue, name: this.state.nameVal }
      if (!this.isPhoneNum(values.phone)) {
        alert('Invalid phone number')

      } else if (!this.isName(values.name)) {
        alert('Invalid name')

      } else {
        localStorage.setItem('event_ID', this.props.event_ID);
        localStorage.setItem('name', values.name);
        localStorage.setItem('phone', values.phone);
        this.props.signupEvent(values.name, values.phone, this.props.event_ID);
      }

      this.setState({
        modal: !this.state.modal
      });
    };
    const { events } = this.props;
    if (!events.length) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <Button style={{ marginLeft: "10px" }} variant="success" onClick={this.toggle}>Volunteer</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} >
            <ModalHeader toggle={this.toggle}>Volunteer Form</ModalHeader>
            <ModalBody >

              <Label>Name</Label>
              <div>
                <input
                  name="name"
                  value={this.state.nameVal}
                  onChange={this.handleName}
                  className="form-control"
                />
              </div>

              <Label style={{ paddingTop: "10px" }}>Phone Number</Label>
              <div>
                <input
                  name="phone"
                  value={this.state.phoneNumValue}
                  onChange={this.handlePhoneNumber}
                  className="form-control"
                />
              </div>

              <Button
                style={{ marginTop: "10px" }}
                onClick={onSubmit}
                variant="success">Sign up</Button>

            </ModalBody>
          </Modal>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  events: state.events,
})

const mapDispatchToProps = {
  signupEvent
}


export default connect(mapStateToProps, mapDispatchToProps)(SignupModal);

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignupModal));

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signupEvent } from '../redux/actions/eventActions';


import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Form, Field } from "react-final-form";
import {
  Box,
  Button,
  ControlFeedback,
  FormGroup,
  Input,
  Label,
  Textarea,
  Typography
} from "smooth-ui";
import "react-table/react-table.css";
import { withRouter } from "react-router-dom";

class SignupModal extends Component {
  state = {
    modal: false,
    phoneNumValue: ''
  };

  toggle = () => {
    if (localStorage.getItem('name') && localStorage.getItem('phone')) {
      this.props.signupEvent(
        localStorage.getItem('name'),
        localStorage.getItem('phone'),
        this.props.event_ID,
        this.props.history);
    }

    console.log(
      'toggling'
    )

    this.setState({
      modal: !this.state.modal
    });
  }

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
    if(!localStorage.getItem('name')){
      return "Enter full name";
    }
    return localStorage.getItem('name');
  }

  handlePhonePlaceholder = () => {
    if(!localStorage.getItem('phone')){
      return "Enter phone number (e.g. 555-555-5555)";
    }
    return localStorage.getItem('phone');
  }

  render() {
    const onSubmit = async values => {
      await sleep(300);
      if (!this.isPhoneNum(values.phone)) {
        alert('Invalid phone number')
      } else if (!this.isName(values.name)) {
        alert('Invalid name')
      } else {
        localStorage.setItem('event_ID', this.props.event_ID);
        localStorage.setItem('name', values.name);
        localStorage.setItem('phone', values.phone);
        this.props.signupEvent(values.name, values.phone, this.props.event_ID, this.props.history);
      }

      this.setState({
        modal: !this.state.modal
      });
    };

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const adapt = Component => ({
      input,
      meta: { valid },
      ...rest
    }) => <Component {...input} {...rest} />;
    const AdaptedInput = adapt(Input);

    const Error = ({ name }) => (
      <Field name={name} subscription={{ error: true, touched: true }}>
        {({ meta: { touched, error } }) =>
          touched && error ? (
            <ControlFeedback valid={!error}>{error}</ControlFeedback>
          ) : null
        }
      </Field>
    );
    const required = value => (value ? null : "Required");
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
              <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                  <form onSubmit={handleSubmit}>
                    <FormGroup>
                      <Label>Name</Label>
                      <Field
                        name="name"
                        type="text"
                        component={AdaptedInput}
                        placeholder={this.handleNamePlaceholder()}
                        control
                      />
                      <Error name="name" />
                    </FormGroup>
                    <FormGroup>
                      <Label>Phone Number</Label>
                      <Field
                        name="phone"
                        component={AdaptedInput}
                        placeholder={this.handlePhonePlaceholder()}
                        control
                      />
                      <Error name="phone" />
                    </FormGroup>

                    <Box justifyContent="">
                      <Button
                        type="submit"
                        disabled={submitting || pristine}
                        variant="primary"
                      >
                        Submit
                         </Button>
                    </Box>
                  </form>
                )}
              />
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupModal));

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignupModal));

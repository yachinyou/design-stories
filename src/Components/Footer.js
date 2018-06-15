import React from "react";
import { Col, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';
import { Button } from 'reactstrap';
import FacebookIcon from "../Images/facebook-icon.png";
import TwitterIcon from "../Images/twitter-icon.png";
import MediumIcon from "../Images/medium-icon.png";
import DribbbleIcon from "../Images/dribbble-icon.png";

import ReactGoogleSheetConnector from "react-google-sheet-connector"; //for save data in google sheet

import GithubCorner from "react-github-corner";
import MailchimpSubscribe from "react-mailchimp-subscribe"

const inputStyle = {
    width: "100%",
}

const buttonStyle = {
    width: "100%",
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
      <div style={{
          borderRadius: 0,
          padding: 10,}}>

        {status === "sending" && <div style={{ color: "white" }}>Sending...</div>}
        {status === "error" && (
          <div style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}/>
        )}
        {status === "success" && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      <Col className="email-signup-form-col" style={{display : 'inline-block'}}  sm={8}>
        <FormGroup>
        <Label for="exampleEmail" hidden>Email</Label>

        <input style={{ fontSize: "1.0em", padding: 5,borderRadius: "9px",width:"100%" }} ref={node => (email = node)} type="email" name="email" id="resources-email-signup"  placeholder="Your Email"
        />
        </FormGroup>
        </Col>
        <Col className="email-signup-form-col"  sm={2}>
        <Button style={{ fontSize: "", padding: 5,width:"100%",height:"37px"}} onClick={submit}> SIGN UP </Button>
        </Col>
      
      </div>
    );
  };
  




const footer = ({ status, message, onValidated }) => {

    let email;
    const submit = () =>
      email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
      });
      const url ="https://designstories.us18.list-manage.com/subscribe/post?u=000b3640f9f8a33cfa84dfc79&amp;id=88485a5b69";
  
  return (
    <div className="footer">
      <div className="row">
        <div className="col-3"></div>
        <div className="email-signup-section col-lg-6 col-md-6 col-sm-12 col-12">
          <p>Hello! I can email you when new tools are built</p>
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}/>)} />
            {/* <div className="social-media-link"><a href="#"><img src={FacebookIcon} alt="facebook icon"/></a></div>
            <div className="social-media-link"><a href="#"><img src={TwitterIcon} alt="twitter icon"/></a></div>
            <div className="social-media-link"><a href="#"><img src={MediumIcon} alt="medium icon"/></a></div>
            <div className="social-media-link"><a href="#"><img src={DribbbleIcon} alt="dribbble icon"/></a></div> */}
          </div>
          <div className="col-3"></div>
        </div>    
      </div>
    )
}

export default footer;
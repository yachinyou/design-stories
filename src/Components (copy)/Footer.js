import React from "react";
import { Col, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';
import { Button } from 'reactstrap';
import FacebookIcon from "../Images/facebook-icon.png";
import TwitterIcon from "../Images/twitter-icon.png";
import MediumIcon from "../Images/medium-icon.png";
import DribbbleIcon from "../Images/dribbble-icon.png";

// const style = {
//     margin: "0 auto"
// }

const inputStyle = {
    width: "100%",
}

const buttonStyle = {
    width: "100%",
}

const footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-3"></div>
                <div className="email-signup-section col-6">
                    <p>Get UX resources that help you in the trenches</p>
                    <Form inline className="email-signup-form-col">
                        <Col className="email-signup-form-col" sm={8}>
                        <FormGroup>
                            <Label for="exampleEmail" hidden>Email</Label>
                            <Input type="email" name="email" id="resources-email-signup" placeholder="Your email" style={inputStyle} bsSize="lg"/>
                         </FormGroup>
                         </Col>
                         <Col className="email-signup-form-col" sm={4}>
                            <Button style={buttonStyle}>sign up</Button>
                         </Col>
                     </Form>
                     <div className="social-media-link"><a href="#"><img src={FacebookIcon} alt="facebook icon"/></a></div>
                     <div className="social-media-link"><a href="#"><img src={TwitterIcon} alt="twitter icon"/></a></div>
                     <div className="social-media-link"><a href="#"><img src={MediumIcon} alt="medium icon"/></a></div>
                     <div className="social-media-link"><a href="#"><img src={DribbbleIcon} alt="dribbble icon"/></a></div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}

export default footer;
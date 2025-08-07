import React from "react";
import MetaTags from "./components/MetaTags";
import { AppBarThree } from "./components/AppBar";
import { Container, Row, Col } from "react-bootstrap";
import { PiMapPinSimpleAreaBold } from "react-icons/pi";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Mark from "./components/Mark";
const ContactUs = () => {
  return (
    <div className="overflow-hidden">
      <MetaTags
        title="Contact Us - Mayil Vel ackers - Whole sale Crackers"
        type="website"
        siteName="mayilvelcrackers.com"
        url="https://mayilvelcrackers.com/contactus"
        keywords="Contact Us | Mayil Vel Crackers  "
        description="Contact for wholesale Crackers and Retail Crackers"
        revisitAfter="10 Days"
      />
      <AppBarThree />
      <img
        src={require("../assets/images/banner_three.jpg")}
        className="img-fluid w-100"
        alt="product name"
      />
      <Container className="padding">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className="py-3">
            <h1 className="bold black text-center"> Contact Us</h1>
          </Col>
          <Col lg="4" md="12" className="py-3">
            <div className="box">
              <div className="box-icon">
                <PiMapPinSimpleAreaBold size={40} color={"#000"} />
              </div>
              <div className="regular">
                Mayil Vel Crackers,
                <br />
                Sivakasi
              </div>
            </div>
          </Col>
          <Col lg="4" className="py-3">
            <div className="box">
              <div className="box-icon">
                <BiPhoneCall size={40} color={"#000"} />
              </div>
              <div>
                <li>+91 8940655143</li>
                <li>+91 7094665313</li>
              </div>
            </div>
          </Col>
          <Col lg="4" className="py-3">
            <div className="box">
              <div className="box-icon">
                <MdOutlineAlternateEmail size={40} color={"#000"} />
              </div>
              <div className="pb-4">
                <div>mayilvelcrackers@gmail.com</div>
              </div>
            </div>
          </Col>

          <Col lg="12" md="12" xs="12" className="py-5">
            <>
             
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152994.93624473503!2d77.87656639892235!3d9.399712511860576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cb02dff48209%3A0x8057afc51d5827fa!2sMayil%20vel%20crackers!5e1!3m2!1sen!2sin!4v1748870961910!5m2!1sen!2sin"                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                title="Google Maps Embed of Mayil Vel Crackers, Tamil Nadu"></iframe>
            </>
          </Col>
        </Row>
      </Container>

      <>
        <Mark />
      </>
    </div>
  );
};

export default ContactUs;

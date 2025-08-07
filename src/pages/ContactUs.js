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
        title="Contact Us - Solai crackers - Whole sale Crackers"
        type="website"
        siteName="mayilvelcrackers.com"
        url="https://mayilvelcrackers.com/contactus"
        keywords="Contact Us | Solai Crackers  "
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
                2/409/ EA3,road,Mettamali, Kumaralingapuram, Sattur, Tamil Nadu
                626203
              </div>
            </div>
          </Col>
          <Col lg="4" className="py-3">
            <div className="box">
              <div className="box-icon">
                <BiPhoneCall size={40} color={"#000"} />
              </div>
              <div>
                <li>+91 6380258837</li>
                <li>+91 9842131905</li>
              </div>
            </div>
          </Col>
          <Col lg="4" className="py-3">
            <div className="box">
              <div className="box-icon">
                <MdOutlineAlternateEmail size={40} color={"#000"} />
              </div>
              <div className="pb-4">
                <div>solaicrackers@gmail.com</div>
              </div>
            </div>
          </Col>

          <Col lg="12" md="12" xs="12" className="py-5">
            <>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.4627551715266!2d77.89733609999999!3d9.401735399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cb75ede13b7b%3A0x9d9c498646dcd81e!2sSolai%20Crackers%20shop!5e1!3m2!1sen!2sin!4v1754566077086!5m2!1sen!2sin"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                title="Google Maps Embed of Solai Crackers, Tamil Nadu"
              ></iframe>
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

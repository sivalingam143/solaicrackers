import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import WhatsAppButton from "./Whatsapp";
import { useNavigate } from "react-router-dom";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaSquarePhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handlenavigate = () => {
    navigate("/");
  };
  return (
    <>
      {location.pathname !== "/" && (
        <div className="fixed point2 blink" onClick={handlenavigate}>
          <img
            src={require("../../assets/images/pricetag.png")}
            className="img-fluid priceicn2 float-right"
            alt="special price"
          />
        </div>
      )}
      <div className="fixed point">
        <WhatsAppButton
          name="Hi Mayil Vel Crackers"
          phoneNumber="+91 8940655143"
        />
      </div>
      <a href="https://maps.app.goo.gl/TZijmYn74uZK3VBn8">
        <div className="fixed point3" style={{ cursor: "pointer" }}>
          <img
            src={require("../../assets/images/googlelocation.png")}
            className="img-fluid priceicn float-left"
            alt="special price"
          />
        </div>
      </a>
      <a href="tel:+91 8940655143">
        <div className="fixed point4" style={{ cursor: "pointer" }}>
          <img
            src={require("../../assets/images/callicon.webp")}
            className="img-fluid priceicn float-left"
            alt="product name"
          />
        </div>
      </a>

      {/* <a href="https://www.instagram.com/amaranramesh1122000?igsh=aGE2dnJoZnU1M2g=">
        <div className="fixed point4" style={{ cursor: 'pointer' }}>
          <img src={require('../../assets/images/inst.png')} className='img-fluid priceicn float-left' alt='special price' />
        </div>
      </a> 
      <a href="https://www.facebook.com/profile.php?id=61556757217479&mibextid=ZbWKwL">
        <div className="fixed point5" style={{ cursor: 'pointer' }}>
          <img src={require('../../assets/images/fb.png')} className='img-fluid priceicn float-left' alt='special price' />
        </div>
      </a> 
      <a href="https://youtube.com/@rkamaran...6617?si=-oU5tWwgPmQbLxIn">
        <div className="fixed point6" style={{ cursor: 'pointer' }}>
          <img src={require('../../assets/images/you.jpg')} className='img-fluid priceicn float-left' alt='special price' />
        </div>
      </a> */}
      <>
        <div className="footer-bg foot-pad ">
          <Container className="con">
            <Row>
              <Col
                className="c1 align-self-center d-sm-block"
                lg={3}
                md={12}
                xs={12}
              >
                <div>
                  <img
                    src={require("../../assets/images/logosm.png")}
                    alt="com-logo"
                    style={{ maxWidth: "200px", maxHeight: "200px" }}
                  />
                  <h5 className="ms-3">
                    Best Quality Crackers <br />@ Whole Sale Price
                  </h5>
                </div>
              </Col>

              <Col
                className="c2 align-self-center d-sm-block"
                lg={3}
                md={12}
                xs={12}
              >
                <div>
                  <span className="span">
                    Address:
                    <br />
                  </span>
                  <span>15/235/16, Sattur Rd, indhira colony, mayiladuthurai, Sivakasi, Tamil Nadu 626189</span>
                </div>
                <div>
                  <span className="span">
                    Phone:
                    <br />
                  </span>
                  <span>
                    89406 55143
                    <br />
                    70946 65313
                  </span>
                </div>
                <div>
                  <span className="span">
                    Whatsapp:
                    <br />
                  </span>
                  <span>
                    89406 55143
                    <br />
                    7094665313
                  </span>
                </div>
                <div>
                  <span className="span">
                    Email:
                    <br />
                  </span>
                  <span>mayilvelcrackers@gmail.com</span>
                </div>
              </Col>

              <Col
                className="co3 align-self-center d-sm-block"
                lg={3}
                md={12}
                xs={12}
              >
                <div>
                  <span className="span">Scan to Pay</span>
                  <br />
                  <img
                    src={require("../../assets/images/gpay.jpeg")}
                    alt="gpay-scanner"
                    style={{ maxWidth: "200px", maxHeight: "200px" }}
                  />
                </div>
              </Col>

              <Col
                className="co4 align-self-center d-sm-block "
                lg={3}
                md={12}
                xs={12}
              >
                <div>
                  <span className="span">Scan to Pay</span>
                  <br />
                  <img
                    src={require("../../assets/images/phonepae.jpeg")}
                    alt="phonepay-scanner"
                    style={{ maxWidth: "200px", maxHeight: "200px" }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <>
          <div className="mark-bg-ft">
            <Container>
              <Row>
                <Col lg="12" className="py-3">
                  <div className="text-center regular blue">
                    {" "}
                    Copyright © 2024, Mayil Vel Crackers. All rights reserved{" "}
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </>
      </>
    </>
  );
};

export default Footer;

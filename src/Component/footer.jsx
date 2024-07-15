import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram , FaLinkedin } from 'react-icons/fa';
import imges from '../images/logoCons.png'
import footerimage from '../images/About.png'
import imgfoter from '../images/web1.png'


const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="custom-section">
          <Row className="align-items-center">
            <Col md={8} className="text-white">
              <h2>Do you have ideas? We are here to help you!</h2>
              <p>Building a house and interior design is not a problem for our employees!</p>
            </Col>
            <Col md={4} className="text-md-right" >
              <Button variant="primary" className="custom-button" id='btn'>Contact us</Button>
            </Col>
          </Row>
        </div>
        <Row className='rowmakes'>
          <Col md={4} className="footer-logo">
            <div>
              <Image src={imges} alt="Logo" />
              <p>Duis aute irure dolor in reprehenderit on voluptate velit esse cillum dolore eu nulla pariatur. Excepteur sint occaecat</p>
              <div className="social-icons">
                <a href="https://www.facebook.com/"><FaFacebook /></a>
                <a href="https://x.com/i/flow/login"><FaTwitter /></a>
                <a href="https://www.instagram.com/accounts/login/?hl=en"><FaInstagram  /></a>
                <a href="#"><FaLinkedin /></a>
              </div>
            </div>
          </Col>
          <Col md={2} className="footer-column" id='services'>
            <h5>Our Services</h5>
            <ul>
              <li><a href="About">About Company</a></li>
              <li><a href="Services">Company Services</a></li>
              <li><a href="New">Company News</a></li>
              <li><a href="Store">Company Project</a></li>
              <li><a href="#">Our Case Study</a></li>
            </ul>
          </Col>
          <Col md={2} className="footer-column" id='sizeExplore'>
            <h5>Our Explore</h5>
            <ul>
              <li><a href="#">Project Planning</a></li>
              <li><a href="#">Cost Calculator</a></li>
              <li><a href="#">Our Testimonials</a></li>
              <li><a href="#">Mining Sector</a></li>
              <li><a href="#">Closure & Reform</a></li>
            </ul>
          </Col>
          <Col md={4} className="footer-column">
            <h5>Featured Posts</h5>
            <div className="featured-post">
              <Image src={imgfoter}thumbnail />
              <div>
                <a href="#">Although Many People May Overlook The Need</a>
                <p>12 June 2022</p>
              </div>
            </div>
            <div className="featured-post">
              <Image src={footerimage} thumbnail />
              <div>
                <a href="#">Veterans In Business Network National Conference</a>
                <p>12 June 2022</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col md={6}>
            <p>Copyright Kasmaal Constraction Company ©2024. All rights reserved to <span>company</span></p>
          </Col>
          <Col md={6} className="text-md-right">
            <a href="#">Terms & Condition</a>
            <a href="#">Services</a>
            <a href="#">Careers</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

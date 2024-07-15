import React from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';


const Contact = () => {
  return (
    <Container fluid className="contact-container">
      <Row>
        <Col md={6} className="contact-info">
          <h3 className='minetitle'>Welcome Kasmaal Constraction</h3>
          <div className="info-item">
            <p><i className="fas fa-map-marker-alt"></i> Banaadir-Somalia'  Mogdishu-Somalia '</p>
            <p><i className="fas fa-phone-alt"></i> Tell : +252 617243579' 675543</p>
            <p><i className="fas fa-envelope"></i>   KasmaalGeneral.info.com </p>
          </div>
          <div className="info-item">
          </div>
          <div className="info-item">
          </div>
        </Col>
        <Col md={6} className="contact-form">
          <h2>Contact Us</h2>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name *</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email *</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" />
            </Form.Group>
            <Form.Group controlId="formSubject">
              <Form.Label>Subject *</Form.Label>
              <Form.Control type="text" placeholder="Enter the subject" required />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message *</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your message" required />
            </Form.Group>
            <Button variant="dark" type="submit">Send</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;

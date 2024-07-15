// ProfileCard.jsx
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import {  FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


const ProfileCard = ({ image, name, title }) => {
  return (
    <Col md={3} className="profile-card-col">
      <Card className="profile-card">
        <Card.Img variant="top" src={image} alt={name} className="profile-card-img" />
        <Card.Body className="profile-card-body">
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProfileCard;

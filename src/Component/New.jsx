import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { FaRegCalendarAlt, FaRegCommentDots, FaShareAlt } from 'react-icons/fa';
import imgservices from '../images/Apartment.jpg';
import imgservices2 from '../images/construction3.jpg';
import imgservices3 from '../images/desing.jpg';
import imgservices4 from '../images/hero1.jfif';
import imgservices5 from '../images/desing2.jpg';
import imgservices6 from '../images/manhero.jfif';


const ArticleCard = () => {
  return (
    <Container fluid className="article-card-container">
      <Row>
        <Col md={4}>
          <Card className="article-card">
            <Card.Img variant="top" src={imgservices}/>
            <Card.Body>
              <Button variant="warning" className="category-btn">Architecture</Button>
              <Card.Text>
                All preparatory steps should be performed in a certain order. Before sta...
              </Card.Text>
              <a href="#" className="learn-more">Learn More →</a>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="article-card">
            <Card.Img variant="top" src={imgservices2} />
            <Card.Body>
              <Button variant="warning" className="category-btn">Architecture</Button>
              <Card.Text>
                Everything is also in trend, the atmosphere remains homely, cozy and...
              </Card.Text>
              <a href="#" className="learn-more">Learn More →</a>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="article-card">
            <Card.Img variant="top" src={imgservices3}/>
            <Card.Body>
              <Button variant="warning" className="category-btn">Facade</Button>
              <Card.Text>
                If you would like to receive a professionally prepared interior design...
              </Card.Text>
              <a href="#" className="learn-more">Learn More →</a>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="article-card">
            <Card.Img variant="top" src={imgservices4}/>
            <Card.Body>
              <Button variant="warning" className="category-btn">Facade</Button>
              <Card.Text>
                If you would like to receive a professionally prepared interior design...
              </Card.Text>
              <a href="#" className="learn-more">Learn More →</a>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="article-card">
            <Card.Img variant="top" src={imgservices5}/>
            <Card.Body>
              <Button variant="warning" className="category-btn">Facade</Button>
              <Card.Text>
                If you would like to receive a professionally prepared interior design...
              </Card.Text>
              <a href="#" className="learn-more">Learn More →</a>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="article-card">
            <Card.Img variant="top" src={imgservices6}/>
            <Card.Body>
              <Button variant="warning" className="category-btn">Facade</Button>
              <Card.Text>
                If you would like to receive a professionally prepared interior design...
              </Card.Text>
              <a href="#" className="learn-more">Learn More →</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleCard;

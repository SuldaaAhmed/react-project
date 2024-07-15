// AppAbout.jsx
import React from 'react';
import { Container, Row, Col, Image, ProgressBar, Carousel } from 'react-bootstrap';
import ProfileCard from './ProductCard'; 
import img1 from '../images/mancons.jfif';
import img0 from '../images/shariifG.jpeg';
import img2 from '../images/Abdulkafi.jpeg';
import img3 from '../images/abdulqadir.jpeg';



const profiles = [
  { image: img0, name: 'shariif A/rahmaan', title: 'Developer' },
  { image: img2, name: 'Abdulkaafi', title: 'Engineer' },
  { image: img3, name: 'Abdulqadir Farax', title: 'Designer' },
];

function AppAbout() {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;

  return (
    <div>
      <Carousel slide={false} className="images_home">
        <Carousel.Item className="Header_Image">
          <h1 className="header12">About Us</h1>
          <Carousel.Caption className="title"></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <section id="about" className="block about-block">
        <Container fluid>
          <div className="title-holder">
            <h2>About Us</h2>
            <div className="subtitle">Learn more about us</div>
          </div>
          <Row>
            <Col sm={6}>
              <Image className="img-holder" src={img1} />
            </Col>
            <Col sm={6} className="title-holder">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit dicta veritatis sint quidem asperiores magni eaque
                praesentium temporibus, magnam, eveniet consequatur possimus
                nihil? Nemo deserunt repudianda soluta neque doloribus, quo! Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Vitae alias
                ex error Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit dicta veritatis sint quidem asperiores magni eaque
                praesentium temporibus, magnam, eveniet consequatur possimus
                nihil? Nemo deserunt repudianda soluta neque doloribus, quo!
              </p>
              <div className="progress-block">
                <h4>HTML / CSS / Javascript</h4>
                <ProgressBar now={html} label={`${html}%`} />
              </div>
              <div className="progress-block">
                <h4>Responsive Design</h4>
                <ProgressBar now={responsive} label={`${responsive}%`} />
              </div>
              <div className="progress-block">
                <h4>Photoshop</h4>
                <ProgressBar now={photoshop} label={`${photoshop}%`} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Container>
        <Row className='imgSize'>
          {profiles.map((profile, index) => (
            <ProfileCard
              key={index}
              image={profile.image}
              name={profile.name}
              title={profile.title}
            />
          ))}
        </Row>
      </Container>

      
    </div>
  );
}

export default AppAbout;

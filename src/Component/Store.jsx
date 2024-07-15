import React from 'react';
import { Container, Row, Col, Button , Carousel ,Image} from 'react-bootstrap';
import { FaClone, FaSnowflake, FaPlug, FaDesktop, FaTrophy, FaAtom  } from "react-icons/fa";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FaFacebook, FaTwitter, FaPinterest, FaLinkedin } from 'react-icons/fa';


const iconMap = {
  'fas fa-clone': FaClone,
  'fas fa-snowflake': FaSnowflake,
  'fas fa-plug': FaPlug,
  'fas fa-desktop': FaDesktop,
  'fas fa-trophy': FaTrophy,
  'fas fa-life-ring': FaAtom ,
};

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-clone',
    title: 'Responsive Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
  },
  {
    id: 2,
    icon: 'fas fa-snowflake',
    title: 'Creative Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
  },
  {
    id: 3,
    icon: 'fas fa-plug',
    title: 'SEO Optimized',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
  },
  {
    id: 4,
    icon: 'fas fa-desktop',
    title: 'Retina Ready',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
  },
  {
    id: 5,
    icon: 'fas fa-trophy',
    title: 'Browser Compatibility',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
  },
  {
    id: 6,
    icon: 'fas fa-life-ring',
    title: 'Customer Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
  }
];

function AppServices() {
  return (
    <div>
      <Carousel slide={false} className='images_home'>
        <Carousel.Item className='Header_Image'>
          <h1 className='heder12'>Services</h1>
          <Carousel.Caption className='title'></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <section id="services" className="block services-block">
        <Container fluid>
          <div className="title-holder">
            <h2>Our services</h2>
            <div className="subtitle">services we provide</div>
          </div>
          <Row className='point'>
            {
              servicesData.map(service => {
                const IconComponent = iconMap[service.icon];
                return (
                  <Col sm={4} className='holdered' key={service.id}>
                    <div className="icon">
                      <IconComponent />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </Col>
                );
              })
            }
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default AppServices;

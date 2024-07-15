import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useSales, SalesProvider } from './SalesContext';
import wood from '../images/wood.jpg';
import Hardscrabble from '../images/Hardscrabble.jpg';
import manCon from '../images/Concrete.jpg';
import Trabal from '../images/Trabalhadores.jpg';
import Premium from '../images/Premium.jpg';
import JCB  from '../images/car.jpg';
import Vector   from '../images/Vector.jpg';
import design   from '../images/design.jpg';

const initialProducts = [
  {
    id: 1,
    image: wood,
    title: 'Building the houset',
    priceRange: '$1,100',
    rating: 3
  },
  {
    id: 2,
    image: Hardscrabble ,
    title: 'Hardscrabble Supply,conveniently located',
    priceRange: '$2,395.99',
    rating: 4
  },
  {
    id: 3,
    image: manCon,
    title: 'Concrete Block',
    priceRange: '$800',
    rating: 3.5
  },
  {
    id: 4,
    image: Trabal,
    title: 'Baixe estas Foto premium sobre',
    priceRange: '$560',
    rating: 4
  },
  {
    id: 5,
    image: Premium,
    title: 'civil engineering building construction project',
    priceRange: '$1,000',
    rating: 5
  },
  {
    id: 6,
    image: JCB ,
    title: 'new construction equipment machine',
    priceRange: '$1,000',
    rating: 5
  },
  {
    id: 7,
    label: 'car',
    image: Vector ,
    title: 'new construction equipment machine',
    priceRange: '$1,000',
    rating: 5
  },
  {
    id: 8,
    label: 'design',
    image: design ,
    title: 'new construction equipment machine',
    priceRange: '$1,000',
    rating: 5
  }

];

const ProductCard = ({ product }) => {
  const { addSale } = useSales();

  return (
    <Col>
      <Card className="product-card">
        {product.label && (
          <Card.Header className={`text-center label-${product.label.toLowerCase()}`}>
            {product.label}
          </Card.Header>
        )}
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title className="text-center">{product.title}</Card.Title>
          <div className="text-center">
            {'☆'.repeat(5 - product.rating)}
            {'⭐'.repeat(product.rating)}
          </div>
          <Card.Text className="text-center">{product.priceRange}</Card.Text>
          <Button variant="primary" onClick={() => addSale(product)}>Buy Now</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

const TrendingProducts = () => {
  const [products, setProducts] = useState(initialProducts);
  const { totalSales, totalMoney } = useSales();

  useEffect(() => {
    // Simulate a fetch from an API
    setTimeout(() => {
      // Here you could fetch data from an API and update the products state
      setProducts(initialProducts); // Update with fetched data
    }, 1000);
  }, []);

  return (
    <Container>
      <h2 className="text-center my-4">Our Services <span className="text-danger">Products</span></h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Row>
      {/* <div className="text-center my-4">
        <h4>Total Sales: {totalSales}</h4>
        <h4>Total Money: ${totalMoney}</h4>
      </div> */}
    </Container>
  );
};

const App = () => (
  <SalesProvider>
    <TrendingProducts />
  </SalesProvider>
);

export default App;

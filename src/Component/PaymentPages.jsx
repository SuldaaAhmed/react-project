import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { useSales } from './SalesContext';

const PaymentPage = () => {
  const location = useLocation();
  const { product, quantity: initialQuantity } = location.state;
  const [quantity, setQuantity] = useState(initialQuantity);
  const [email, setEmail] = useState('');
  const { addSale } = useSales();

  const handleSubmit = (event) => {
    event.preventDefault();
    addSale(product, quantity);
    alert(`Payment submitted successfully!
    \nYou bought ${quantity} ${product.title}(s) for a total of $${(quantity * parseFloat(product.priceRange.replace('$', '').split(' - ')[0])).toFixed(2)}`);
  };

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  return (
    <Container>
      <h2 className="text-center my-4">Payment for {product.title}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="productAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            required
          />
        </Form.Group>
        <Form.Group controlId="productPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" defaultValue={product.priceRange} readOnly required />
        </Form.Group>
        <Form.Group controlId="userEmail" className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-4">
          Submit Payment
        </Button>
      </Form>
    </Container>
  );
};

export default PaymentPage;

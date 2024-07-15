import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { UserProvider } from './Component/useContact';
import CustomNavbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';
import Store from './Component/Store';
import New from './Component/New';
import SingUp from './Component/SingUp';
import Footer from './Component/footer';
import Contact from './Component/Contact';
// import Carousel from './Component/Carousel'; // Ensure this path is correct
import { SalesProvider } from './Component/SalesContext';
import PaymentPage from './Component/PaymentPages';




function App() {
  const location = useLocation();

  return (
    <SalesProvider>
      <UserProvider>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/New" element={<New />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/SingUp" element={<SingUp />} />
          <Route path="/payment" element={<PaymentPage />} />
          {/* <Route path="/Carousel" element={<Carousel />} /> */}
          {/* <Route path="/trending-products" element={<TrendingProducts />} /> */}
        </Routes>
        {location.pathname !== '/' && <Footer />}
        {/* {location.pathname != '/' && <Carousel />} */}
      </UserProvider>
    </SalesProvider>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;

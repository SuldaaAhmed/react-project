import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SalesContext = createContext();

export const useSales = () => useContext(SalesContext);

export const SalesProvider = ({ children }) => {
  const [sales, setSales] = useState([]);
  const navigate = useNavigate();

  const addSale = (product, quantity) => {
    const existingSale = sales.find(sale => sale.product.id === product.id);
    if (existingSale) {
      existingSale.quantity += quantity;
      setSales([...sales]);
    } else {
      setSales([...sales, { product, quantity }]);
    }
    navigate('/payment', { state: { product, quantity } });
  };

  const totalSales = sales.reduce((total, sale) => total + sale.quantity, 0);
  const totalMoney = sales.reduce((total, sale) => 
    total + sale.quantity * parseFloat(sale.product.priceRange.replace('$', '').split(' - ')[0]), 0);

  return (
    <SalesContext.Provider value={{ sales, addSale, totalSales, totalMoney }}>
      {children}
    </SalesContext.Provider>
  );
};

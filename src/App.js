import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import IceCreamPage from './IceCreamPage';
import ReviewOrderPage from './ReviewOrderPage';
import './App.css';

const App = () => {
  const [orderItems, setOrderItems] = useState([]);

  const handleAddToOrder = (iceCream, quantity) => {
    const item = {
      name: iceCream.name,
      price: iceCream.price,
      quantity: quantity,
    };
    setOrderItems([...orderItems, item]);
  };

  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul>
            <li>
              <Link to="/icecream">Ice Cream</Link>
            </li>
            <li>
              <Link to="/review-order">Review Order</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/icecream" element={<IceCreamPage handleAddToOrder={handleAddToOrder} />} />
          <Route path="/review-order" element={<ReviewOrderPage orderItems={orderItems} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


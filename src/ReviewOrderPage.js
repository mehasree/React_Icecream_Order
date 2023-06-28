import React from 'react';
import { Link } from 'react-router-dom';

const ReviewOrderPage = ({ orderItems }) => {
  const calculateTotalCost = () => {
    let totalCost = 0;
    orderItems.forEach((item) => {
      const price = parseFloat(item.price.replace('Rs.', ''));
      totalCost += price * item.quantity;
    });
    return totalCost.toFixed(2);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/icecream">Ice Cream</Link>
          </li>
        </ul>
      </nav>
      <h1>Review Order Page</h1>
      <div className="review-order-container">
        {orderItems.map((item, index) => (
          <div className="review-item" key={index}>
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: {item.price}</p>
          </div>
        ))}
      </div>
      <h2 className="total-cost">Total Cost: Rs. {calculateTotalCost()}</h2>
    </div>
  );
};

export default ReviewOrderPage;

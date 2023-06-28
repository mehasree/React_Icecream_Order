import React, { useState } from 'react';

const QuantitySelector = ({ iceCream, handleAddToOrder }) => {
  const [quantity, setQuantity] = useState(1);

  const handleChangeQuantity = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleClickAddToOrder = () => {
    handleAddToOrder(iceCream, quantity);
  };

  return (
    <div>
      <label>Quantity:</label>
      <select value={quantity} onChange={handleChangeQuantity}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
      <button onClick={handleClickAddToOrder}>Add to Order</button>
    </div>
  );
};

export default QuantitySelector;


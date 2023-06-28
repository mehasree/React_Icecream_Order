import React from 'react';
import { Link } from 'react-router-dom';
import QuantitySelector from './QuantitySelector';

const IceCreamPage = ({ handleAddToOrder }) => {
  const iceCreams = [
    {
      name: 'Blueberry',
      price: 'Rs.160',
      image: 'https://img.freepik.com/premium-photo/bowl-blueberry-ice-cream-with-blueberries-side_877015-1048.jpg',
    },
    {
      name: 'ButterScotch',
      price: 'Rs.130',
      image: 'https://www.sharmispassions.com/wp-content/uploads/2017/05/ButterscotchIcecream5-475x500.jpg',
    },
    {
      name: 'Chocolate',
      price: 'Rs.120',
      image: 'https://media.istockphoto.com/id/936205772/photo/chocolate-ice-cream-in-a-glass-cup.jpg?s=612x612&w=0&k=20&c=xBDPxGzIgWcE8tFZ4azKm1P_OoxP8H22XkyHguZlVhw=',
    },
    {
      name: 'Mango',
      price: 'Rs.90',
      image: 'https://spicecravings.com/wp-content/uploads/2021/06/Mango-Ice-Cream-9-360x360.jpg',
    },
    {
      name: 'pista',
      price: 'Rs.150',
      image: 'https://img.freepik.com/premium-photo/tasty-pistachio-ice-cream-wooden-bowl_779468-878.jpg',
    },
    {
      name: 'Raspberry',
      price: 'Rs.190',
      image: 'https://img.freepik.com/premium-photo/bowl-raspberry-ice-cream-with-bowl-raspberry-ice-cream-black-background_759095-8184.jpg',
    },
    {
      name: 'Strawberry',
      price: 'Rs.120',
      image: 'https://t4.ftcdn.net/jpg/06/05/06/31/360_F_605063124_CboJtBEgvojLWA2uvdw8mt41BxrUj6hU.jpg',
    },
    {
      name: 'Vanilla',
      price: 'Rs.100',
      image:
        'https://media.istockphoto.com/id/673534856/photo/bowl-of-vanilla-ice-cream.jpg?s=612x612&w=0&k=20&c=dWKY0Tl1D5Im8wFmQGyQ_kZ0faDRDXEj90dnuW9Lqh8=',
    },
  ];

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/review-order">Review Order</Link>
          </li>
        </ul>
      </nav>
      <h1>Ice Cream Page</h1>
      <div className="ice-cream-container">
        {iceCreams.map((iceCream, index) => (
          <div className="ice-cream-item" key={index}>
            <div className="img-container">
              <img src={iceCream.image} alt={iceCream.name} />
            </div>
            <h3>{iceCream.name}</h3>
            <p>{iceCream.price}</p>
            <QuantitySelector iceCream={iceCream} handleAddToOrder={handleAddToOrder} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IceCreamPage;


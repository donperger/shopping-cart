import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import '../styles/ShoppingCart.css';

const ShoppingCart = (props) => {
  ShoppingCart.propTypes = {
    cart: propTypes.array
  };

  const [numOfItems, setNumOfItems] = useState(0);

  useEffect(() => {
    const countItems = () => {
      props.cart.forEach((item) => {
        setNumOfItems(numOfItems + item.amount);
      });
    };

    countItems();
  }, [props.cart]);

  return (
    <div className="shopping-cart">
      <div className="item-num">You have items {numOfItems} in your cart</div>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};
export default ShoppingCart;

import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ShoppingCart.css';

const ShoppingCart = (props) => {
  ShoppingCart.propTypes = {
    cart: propTypes.array
  };

  const [numOfItems, setNumOfItems] = useState(0);
  const [displayList, setDisplayList] = useState(false);
  const [cartValue, setCartValue] = useState(0);

  useEffect(() => {
    const countItems = () => {
      let pieceCounter = 0;
      let valueCounter = 0;
      props.cart.forEach((item) => {
        pieceCounter += item.amount;
        valueCounter += item.amount * item.price;
      });
      setNumOfItems(pieceCounter);
      setCartValue(valueCounter);
    };

    const updateCartInLocalStorage = () => {
      if (props.cart.length !== 0) localStorage.setItem('shoppingCart', JSON.stringify(props.cart));
    };

    updateCartInLocalStorage();
    countItems();
  }, [props.cart]);

  const showList = () => {
    setDisplayList(true);
  };

  const hideList = () => {
    setDisplayList(false);
  };

  let navigate = useNavigate();
  const proceedToHome = () => {
    alert(
      `Thank you for choosing Super Random Super Store, this is just a fake store because of this you won't be cahrged with any fees. Have a nice day!`
    );
    localStorage.setItem('shoppingCart', '[]');
    navigate('.../home');
  };

  return (
    <div className="shopping-cart">
      <div className="item-num">You have items {numOfItems} in your cart</div>
      {!displayList && (
        <button className="checkout-btn" onClick={showList}>
          Checkout
        </button>
      )}
      {displayList && (
        <div className="checkout-list">
          <ul>
            {props.cart.map((item, index) => {
              return (
                <li key={index}>
                  {item.amount} x {item.name}, {item.price}$ = {item.amount * item.price}$
                </li>
              );
            })}
            <li className="total-value">Total: {cartValue}$</li>
          </ul>
          <button className="proceed-btn" onClick={proceedToHome}>
            Proceed To Payment Options
          </button>
          <button className="go-back-btn" onClick={hideList}>
            Go Back To Shopping
          </button>
        </div>
      )}
    </div>
  );
};
export default ShoppingCart;

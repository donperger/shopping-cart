import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ShoppingCart.css';
import Button from 'react-bootstrap/Button';

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
      setCartValue(Number.parseFloat(valueCounter).toFixed(2));
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
      {!displayList && (
        <>
          <div className="item-num">You have items {numOfItems} in your cart</div>
          <Button variant="outline-dark checkout-btn" onClick={showList}>
            Checkout
          </Button>
        </>
      )}
      {displayList && (
        <div className="checkout-list-cont">
          <ul className="checkout-list">
            {props.cart.map((item, index) => {
              return (
                <li key={index}>
                  {item.amount} x {item.name}, {item.price}$ = {item.amount * item.price}$
                </li>
              );
            })}
            <li className="total-value">Total: {cartValue}$</li>
          </ul>

          <Button variant="outline-success" className="proceed-btn" onClick={proceedToHome}>
            Proceed To Payment Options
          </Button>
          <Button variant="outline-secondary" className="go-back-btn" onClick={hideList}>
            Go Back To Shopping
          </Button>
        </div>
      )}
    </div>
  );
};
export default ShoppingCart;

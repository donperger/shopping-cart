import propTypes from 'prop-types';

const ShoppingCart = (props) => {
  ShoppingCart.propTypes = {
    numOfItems: propTypes.number
  };

  return (
    <div className="shopping-cart">
      <div className="item-num">You have {props.numOfItems} in your cart</div>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};
export default ShoppingCart;

import '../styles/ItemCards.css';
import propTypes from 'prop-types';
import { useState } from 'react';

const ItemCrads = (props) => {
  ItemCrads.propTypes = {
    title: propTypes.string,
    image: propTypes.string,
    price: propTypes.number,
    addItemToCart: propTypes.func
  };

  const [amountOfItem, setAmountOfItem] = useState(1);

  const onInputChange = (e) => {
    setAmountOfItem(e.target.value);
  };

  const addToCart = () => {
    props.addItemToCart(props.title, props.price, Number(amountOfItem));
  };

  return (
    <div className="item-card">
      <div className="title">{props.title}</div>
      <img className="product-img" src={props.image} alt="Product image" />
      <div className="price">{props.price} $</div>
      <input type="number" name="amountOfItem" value={amountOfItem} onChange={onInputChange} />
      <button className="add-to-cart-btn" onClick={addToCart}>
        Add To Cart
      </button>
    </div>
  );
};

export default ItemCrads;

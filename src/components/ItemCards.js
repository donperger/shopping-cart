import '../styles/ItemCards.css';
import propTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
    setAmountOfItem(1);
  };

  return (
    <div className="item-card">
      <div className="title">{props.title}</div>
      <img className="product-img" src={props.image} alt="Product image" />
      <div className="price">{props.price} $</div>
      <div className="purchase-actions">
        <Form>
          <Form.Control
            id="quantity-input"
            type="number"
            value={amountOfItem}
            onChange={onInputChange}
          />
        </Form>
        <Button variant="success" className="add-to-cart-btn" onClick={addToCart}>
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ItemCrads;

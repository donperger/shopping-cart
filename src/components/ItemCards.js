import '../styles/ItemCards.css';
import propTypes from 'prop-types';

const ItemCrads = (props) => {
  ItemCrads.propTypes = {
    title: propTypes.string,
    image: propTypes.string,
    price: propTypes.number
  };

  return (
    <div className="item-card">
      <div className="title">{props.title}</div>
      <img className="product-img" src={props.image} alt="Product image" />
      <div className="price">{props.price} $</div>
      <input type="number" name="numberOfPurchase" />
      <button className="add-to-cart-btn">Add To Cart</button>
    </div>
  );
};

export default ItemCrads;

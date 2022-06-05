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
    </div>
  );
};

export default ItemCrads;

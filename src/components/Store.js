import { useState, useEffect } from 'react';
import ItemCrads from './ItemCards';
import '../styles/Store.css';
import ShoppingCart from './ShoppingCart';
import Spinner from 'react-bootstrap/Spinner';

const Store = () => {
  const [products, setProdutcs] = useState([]);
  const [cart, setCart] = useState([]);
  const [isDataReady, setIsDataReady] = useState(false);

  useEffect(() => {
    const getCartInfo = () => {
      const cartInfo = localStorage.getItem('shoppingCart');
      setCart(JSON.parse(cartInfo));
    };

    getCartInfo();

    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        setProdutcs(products.concat(json));
        setIsDataReady(true);
      });
  }, []);

  const addItemToCart = (itemName, itemPrice, amountOfItem) => {
    const itemObj = { name: itemName, price: itemPrice, amount: amountOfItem };

    const itemInCart = cart.filter((item) => item.name === itemObj.name);

    if (itemInCart.length === 0) {
      setCart(cart.concat(itemObj));
    } else {
      const updatedCart = cart.map((item) => {
        if (item.name === itemObj.name) {
          itemObj.amount = itemObj.amount + item.amount;
          return itemObj;
        } else {
          return item;
        }
      });
      setCart(updatedCart);
    }
  };

  return (
    <div className="store-comp">
      {isDataReady && <ShoppingCart cart={cart} />}
      {!isDataReady && (
        <div className="spinner-cont">
          <Spinner animation="border" variant="secondary" size="xl" />
        </div>
      )}
      <div className="products-cont">
        {products.map((product) => {
          return (
            <ItemCrads
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              addItemToCart={addItemToCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Store;

import { useState, useEffect } from 'react';
import ItemCrads from './ItemCards';
import '../styles/Store.css';
import ShoppingCart from './ShoppingCart';

const Store = () => {
  const [products, setProdutcs] = useState([]);
  const [cart, setCart] = useState([]);

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
        console.log('Data is ready');
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
      <ShoppingCart cart={cart} />
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

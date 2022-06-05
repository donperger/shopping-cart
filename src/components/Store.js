import { useState, useEffect } from 'react';
import ItemCrads from './ItemCards';

const Store = () => {
  const [products, setProdutcs] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        setProdutcs(products.concat(json));
        console.log('Data loaded');
      });
  }, []);

  const onClick = () => {
    console.log('Clicked!');
    console.log(products);
  };

  return (
    <div className="store-comp">
      <button onClick={onClick}>Click Me</button>
      <div className="products-cont">
        {products.map((product) => {
          return (
            <ItemCrads
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Store;

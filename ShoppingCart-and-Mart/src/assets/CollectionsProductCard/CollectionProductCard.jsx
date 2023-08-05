import React, { useState, useEffect } from "react";
import styles from './CollectionProductCard.module.css'

function ProductItem() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch('https://fakestoreapi.com/products/category/men%27s%20clothing'),
      fetch('https://fakestoreapi.com/products/category/women%27s%20clothing'),
      fetch('https://fakestoreapi.com/products/category/jewelery')
    ])
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((data) => setProducts(data.flat()));
  }, []);

  return (
    <>
      {products.map(({ id, title, price, image }) => (
        <div key={id} className={styles.productCard}>
          <img src={image} alt={title} className={styles.productImage} />
            <div className={styles.productTitle}>{title}</div>
            <div className={styles.productPrice}>${price}</div>
        </div>
      ))}
    </>
  );
}

export default ProductItem;

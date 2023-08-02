import React, { useState, useEffect } from "react";
import styles from './ProductCard.module.css'

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((data) => setProducts(data));
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

export default ProductList;

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
    <div className={styles.carousel}>
      {products.map(({ id, title, price, image }) => (
        <div key={id} className={styles.productCard}>
          <img src={image} alt={title} className={styles.productImage} />
          <div className={styles.titleWrapper}>
            <h2 className={styles.productTitle}>{title}</h2>
            <p className={styles.productPrice}>${price}</p>
          </div>
          <button className={styles.addtoCart}> Add to Cart </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

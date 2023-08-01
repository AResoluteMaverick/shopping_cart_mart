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
      {products.map(({ id, title, price, description, image }) => (
        <div key={id} className={styles.productCard}>
          <img src={image} alt={title} className={styles.productImage} />
          <h2 className="productTitle">{title}</h2>
          <p className="productPrice">${price}</p>
          <p className="productDescription">{description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

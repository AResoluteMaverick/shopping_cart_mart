import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"; 
import styles from './ProductItem.module.css';
import { Link } from 'react-router-dom';


function ProductItem({ category = "All" }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    let urls = [];
    
    // Construct URLs based on category prop
    if (category === "All" || category === "Men") {
      urls.push('https://fakestoreapi.com/products/category/men%27s%20clothing');
    }
    if (category === "All" || category === "Women") {
      urls.push('https://fakestoreapi.com/products/category/women%27s%20clothing');
    }
    if (category === "All" || category === "Jewelry") {
      urls.push('https://fakestoreapi.com/products/category/jewelery');
    }
    

    Promise.all(urls.map(url => fetch(url)))
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((data) => setProducts(data.flat()))
      .catch(() => setError(true));
      
  }, [category]);

  if (error) {
    return <div>Error getting products, please refresh the page</div>;
  }

  return (
    <>
      {products.map(({ id, title, price, image, description }) => (
        <Link to={`/product/${title}-${id}`} key={id} className={styles.productCard} 
        state={
          {id: id, 
          title: title, 
          price: price, 
          image: image, 
          description: description}}>
            
          <div key={id} className={styles.wrapper}>
            <img src={image} alt={title} className={styles.productImage} />
              <div className={styles.productTitle}>{title}</div>
              <div className={styles.productPrice}>${price}</div>
          </div>
        </Link>
      ))}
    </>
  );
}

ProductItem.propTypes = {
  category: PropTypes.oneOf(["All", "Men", "Women", "Jewelry"])
};

export default ProductItem;

import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import styles from './ProductPage.module.css';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Store/cartSlice.js';
import addCartIcon from '../../assets/icons/shopping-cart-16-svgrepo-com.svg';

export default function ProductPage () {
    const location = useLocation()
    const { id, title, price, image, description } = location.state
    const productItem = {id, price, title, image};
    const dispatch = useDispatch();

    const handleAddToCart = (productItem) => {
      dispatch(addToCart(productItem));
    };

    return(
        <>
        <Header />
        <div className={styles.productPageContainer}>
            <div className={styles.displayProductPhoto}>
                <img src={image} alt={title} className={styles.productImage}/>
            </div>
            <div className={styles.displayProductInformation}>
                <h1 className={styles.displayProductTitle}>{title}</h1>
                <p className={styles.displayProductDescription}>{description}</p>
                <div className={styles.addToCartWrapper}>
                    <div className={styles.productPrice}>${price}</div>
                    <div></div>
                    <button onClick={() => handleAddToCart(productItem)} className={styles.addtoCart}>Add to Cart
                    <img src={addCartIcon} alt ="Add to cart" className={styles.icon} />
                    </button>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}
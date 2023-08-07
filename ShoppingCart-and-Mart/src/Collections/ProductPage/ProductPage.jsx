import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import styles from './ProductPage.module.css'
import { useLocation } from 'react-router-dom' 


export default function ProductPage () {
    const location = useLocation()
    const { id, title, price, image, description } = location.state
    const productItem = {id, price, title, image, description};

    const handleAddToCart = (productItem) => {

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
                    <div className={styles.productPrice}>{price}</div>
                    <div>input</div>
                    <button onClick={() => handleAddToCart(productItem)}>Add to Cart</button>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}
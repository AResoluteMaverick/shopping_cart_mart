import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useSelector, useDispatch } from 'react-redux';
import styles from './CartPage.module.css';
import { removeFromCart, updateQuantity } from './cartSlice';
import checkoutIcon from '../assets/icons/shopping-cart-21-svgrepo-com.svg';

function getTotal(cartItems) {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
}

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const orderTotal = getTotal(cartItems);

  return (
    <>
      <Header />
      <div className={styles.cartContainer}>
        {cartItems.length === 0 ? (
          <p className={styles.emptyCart}>Your cart is empty.</p>
        ) : (
          <>
          <div className={styles.cartItemsContainer}>
           {cartItems.map((item, index) => (
              <div key={index} className={styles.cartItem}>
                  <div className={styles.productImage}>
                    <img src={item.image} alt={item.title} className={styles.imagesrc}/>
                  </div>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemPrice}>${item.price}</p>
                  <div className={styles.quantityWrapper}>
                      <button className={styles.buttonQuantity} onClick={() => dispatch(updateQuantity({ index, quantity: item.quantity + 1 }))}>+</button>
                      <p className={styles.itemQuantity}>{item.quantity}</p>
                      <button className={styles.buttonQuantity} onClick={() => dispatch(updateQuantity({ index, quantity: item.quantity - 1 }))} disabled={item.quantity <= 1}>
                        -
                      </button>
                  </div>
                  <button className={styles.deleteButton} onClick={() => dispatch(removeFromCart(index))}>x</button>
              </div>
          ))}
          </div>
          <div className={styles.itemCalculationContainer}>
              <h2 className={styles.orderTotal}>Order Total: ${orderTotal}</h2>
              <button className={styles.checkOut}>Check Out
              <img src={checkoutIcon} alt ="Checkout" className={styles.checkoutIcon} />
              </button>
          </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
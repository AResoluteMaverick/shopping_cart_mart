import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useSelector } from 'react-redux';
import styles from './CartPage.module.css';
import { removeFromCart } from './cartSlice';
import { useDispatch } from 'react-redux';


function getTotal(cartItems) {
  return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
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
             <h3>{item.title}</h3>
             <p>Price: {item.price}</p>
             <button onClick={() => dispatch(removeFromCart(index))}>Delete Item</button>
           </div>
          ))}
          </div>
            <div className={styles.itemCalculationContainer}>
              <h2 className={styles.orderTotal}>Order Total: ${orderTotal}</h2>
              <button className={styles.checkOut}>Check Out</button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
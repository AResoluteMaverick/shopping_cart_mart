import { useSelector } from 'react-redux'

export default function CartPage () {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>Price: {item.price}</p>
            {/* Add other item details as needed */}
          </div>
        ))
      )}
    </div>
  );
}

import { useSelector } from 'react-redux'

export default function AddToCart () {
  const cart = useSelector((state) => state.cart);

  console.log(cart);
}

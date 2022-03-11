import { useCart } from "../../providers/cart";

const Cart = () => {
  const { cart } = useCart();
  console.log(cart);
  return <div>Cart</div>;
};

export default Cart;

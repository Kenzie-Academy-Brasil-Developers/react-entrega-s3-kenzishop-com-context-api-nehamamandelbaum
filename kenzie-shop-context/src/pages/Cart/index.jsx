import { useCart } from "../../providers/cart";

import { Link } from "react-router-dom";
import { HeaderContainer, SummaryContainer } from "./styles";

import CartProductCard from "../../components/CartProductCard";
import CartSummary from "../../components/CartSummary";

const Cart = () => {
  const { cart } = useCart();
  return (
    <>
      <HeaderContainer>
        <h1>Kenzie Book Shop 📚</h1>
        <Link to="/">Voltar para Home</Link>
      </HeaderContainer>
      <SummaryContainer>
        <CartSummary />
      </SummaryContainer>

      <ul>
        {cart.map((product) => (
          <li>
            <CartProductCard product={product} key={product.id} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cart;

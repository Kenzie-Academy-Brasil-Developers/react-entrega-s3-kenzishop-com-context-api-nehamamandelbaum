import { Container } from "./styles";
import { useCart } from "../../providers/cart";

const CartSummary = () => {
  const { cart } = useCart();

  const cartQuantity = cart.length;

  const cartTotal = cart.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price;
  }, 0);

  const formattedTotal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(cartTotal);

  return (
    <Container>
      <h3>Resumo do carrinho: </h3>
      <div>
        <span>Total dos Produtos: </span>
        <span>{formattedTotal}</span>
      </div>
      <div>
        <span>Quantidade: </span>
        <span>{cartQuantity}</span>
      </div>
    </Container>
  );
};
export default CartSummary;

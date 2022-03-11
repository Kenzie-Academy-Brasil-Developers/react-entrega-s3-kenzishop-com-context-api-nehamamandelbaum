import { Container } from "./styles";
import { useCart } from "../../providers/cart";

const CartProductCard = ({ product }) => {
  const { removeFromCart } = useCart();

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price);
  return (
    <Container>
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <div>
        <span>{formattedPrice}</span>
        <button onClick={() => removeFromCart(product)}>
          Remover do carrinho
        </button>
      </div>
    </Container>
  );
};

export default CartProductCard;

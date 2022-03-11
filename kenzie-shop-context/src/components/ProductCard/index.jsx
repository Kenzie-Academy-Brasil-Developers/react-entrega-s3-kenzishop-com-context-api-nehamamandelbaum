import { Container, ContentContainer } from "./styles";
import { useCart } from "../../providers/cart";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price);

  return (
    <Container>
      <img src={product.img} alt={product.name} />
      <ContentContainer>
        <h3>{product.name}</h3>
        <span>{formattedPrice}</span>
        <button onClick={() => addToCart(product)}>
          Adicionar ao Carrinho
        </button>
      </ContentContainer>
    </Container>
  );
};

export default ProductCard;

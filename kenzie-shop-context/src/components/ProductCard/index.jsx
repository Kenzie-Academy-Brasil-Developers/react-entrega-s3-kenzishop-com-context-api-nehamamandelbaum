import { Container, ContentContainer } from "./styles";

const ProductCard = ({ product }) => {
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
        <button>Adicionar ao Carrinho</button>
      </ContentContainer>
    </Container>
  );
};

export default ProductCard;

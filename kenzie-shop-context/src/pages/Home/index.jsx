import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import { useBooks } from "../../providers/products";
import { useCart } from "../../providers/cart";

import CartSummary from "../../components/CartSummary";
import { HeaderContainer, Container, CardContainer } from "./styles";

const Home = () => {
  const { books } = useBooks();
  const { cart } = useCart();
  console.log(cart);

  return (
    <>
      <HeaderContainer>
        <h1>Kenzie Book Shop 📚</h1>
        <Link to="/cart">Ir para o carrinho</Link>
      </HeaderContainer>

      <Container>
        <CardContainer>
          {books.map((book) => (
            <ProductCard product={book} key={book.id} />
          ))}
        </CardContainer>
        <CartSummary />
      </Container>
    </>
  );
};

export default Home;

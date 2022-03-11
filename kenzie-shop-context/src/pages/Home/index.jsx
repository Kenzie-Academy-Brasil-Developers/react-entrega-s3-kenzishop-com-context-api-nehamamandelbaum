import { useBooks } from "../../providers/products";

const Home = () => {
  const { books } = useBooks();
  console.log(books);
  return (
    <ul>
      <div>Teste</div>
      <div>Teste</div>
    </ul>
  );
};

export default Home;

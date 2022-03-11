import { BooksProvider } from "./products";
import { CartProvider } from "./cart";

const Providers = ({ children }) => {
  return (
    <BooksProvider>
      <CartProvider>{children}</CartProvider>
    </BooksProvider>
  );
};

export default Providers;

import { BooksProvider } from "./products";

const Providers = ({ children }) => {
  return <BooksProvider>{children}</BooksProvider>;
};

export default Providers;

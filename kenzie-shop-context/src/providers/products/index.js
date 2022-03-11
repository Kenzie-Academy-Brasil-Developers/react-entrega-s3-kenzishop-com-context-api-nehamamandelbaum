import { createContext, useContext, useState } from "react";

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books] = useState([
    {
      id: 1,
      name: "Como fazer amigos e influenciar pessoas",
      img: "https://i.ibb.co/TKNm1H7/Captura-de-Tela-2022-03-08-a-s-13-34-50.png",
      price: 26.91,
    },
    {
      id: 2,
      name: "Mindset - a nova psicologia do sucesso",
      img: "https://i.ibb.co/1r2ykHK/Captura-de-Tela-2022-03-08-a-s-13-55-35.png",
      price: 29.9,
    },
    {
      id: 3,
      name: "Essencialismo - a disciplinada busca por menos",
      img: "https://i.ibb.co/6tngSdX/Captura-de-Tela-2022-03-08-a-s-13-58-10.png",
      price: 28.99,
    },
    {
      id: 4,
      name: "Os segredos da mente milionária",
      img: "https://i.ibb.co/wpzCkjf/Captura-de-Tela-2022-03-08-a-s-13-59-40.png",
      price: 28.99,
    },
    {
      id: 5,
      name: "Pai rico, pai pobre",
      img: "https://i.ibb.co/Dbd3DRf/Captura-de-Tela-2022-03-08-a-s-14-03-17.png",
      price: 24.16,
    },
    {
      id: 6,
      name: "O jeito Harvard de ser feliz",
      img: "https://i.ibb.co/PjxWYyY/Captura-de-Tela-2022-03-08-a-s-14-05-29.png",
      price: 19.9,
    },
    {
      id: 7,
      name: "Atenção plena",
      img: "https://i.ibb.co/MBM0XHw/Captura-de-Tela-2022-03-08-a-s-14-05-01.png",
      price: 25.9,
    },
    {
      id: 8,
      name: "As armas da persuasão",
      img: "https://i.ibb.co/FYX9RQ8/Captura-de-Tela-2022-03-08-a-s-14-04-00.png",
      price: 31.92,
    },
    {
      id: 9,
      name: "O poder do hábito",
      img: "https://i.ibb.co/t3n2Nvy/Captura-de-Tela-2022-03-08-a-s-14-03-32.png",
      price: 35.91,
    },
  ]);

  return (
    <BooksContext.Provider value={{ books }}>{children}</BooksContext.Provider>
  );
};

export const useBooks = () => useContext(BooksContext);

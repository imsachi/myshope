import { createContext, useEffect, useState } from "react";
export const StoreData = createContext();

export const Store = ({ children }) => {
  const [storeProducts, setStoreProducts] = useState([]);
  const [storeCategories, setStoreCategories] = useState([]);
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems((prevCartItems) => prevCartItems + 1);
  };
  useEffect(() => {
    const getData = async () => {
      const Products = await fetch("https://fakestoreapi.com/products").then(
        (responce) => responce.json()
      );
      const Categories = await fetch(
        "https://fakestoreapi.com/products/categories"
      ).then((responce) => responce.json());
      setStoreProducts(Products);
      setStoreCategories(Categories);
    };
    getData();
  }, []);

  return (
    <StoreData.Provider
      value={{ storeProducts, storeCategories, cartItems, addToCart }}
    >
      {children}
    </StoreData.Provider>
  );
};

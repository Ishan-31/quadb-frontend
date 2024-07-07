import React, { createContext, useContext, useState, useEffect } from 'react';
import { useCart } from 'react-use-cart';

const CountContext = createContext();

export const useCount = () => {
  return useContext(CountContext);
};

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [cartData, setCartItems] = useState([]);
  const { items } = useCart();
  async function updateCount(){
    // const items = await getCartItems();
    setCartItems(items);
    setCount(items.length)
  }
  useEffect(() => {
     updateCount();
  }, []);

  return (
    <CountContext.Provider value={{ count, updateCount }}>
      {children}
    </CountContext.Provider>
  );
};

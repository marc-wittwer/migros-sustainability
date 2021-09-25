import React, {useState} from 'react';
import {createContext} from 'react';

export const AppContext = createContext();

import {products} from '../data/products';

const AppContextProvider = props => {
  const [cachedProducts, setCachedProducts] = useState(products);
  const [basket, setBasket] = useState(products);

  return (
    <AppContext.Provider
      value={{
        basket: basket,
        cachedProducts: cachedProducts,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

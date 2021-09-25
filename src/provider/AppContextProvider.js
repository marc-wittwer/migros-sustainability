import React, {useState} from 'react';
import { createContext } from 'react';

export const AppContext = createContext();

const AppContextProvider = props => {
  const [user, setUser] = useState({
    name: 'harry potter',
  });
  return (
    <AppContext.Provider
      value={{
        user: user,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

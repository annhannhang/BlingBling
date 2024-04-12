import React, {createContext, useState} from 'react';

export const AppContext = createContext();

export const AppContextProvider = props => {
  const {children} = props;
  const [Cart, setCart] = useState([]);
  return (
    <AppContext.Provider value={{
      Cart: Cart,
      setCart: setCart,
    }}>
        {children}
    </AppContext.Provider>
  );
};

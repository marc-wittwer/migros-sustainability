/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'; 
import Routes from './src/Routes';
import AppContextProvider from './src/provider/AppContextProvider';

const App = () => {
  return (
    <AppContextProvider>
      <Routes/>
    </AppContextProvider>
  );
};

export default App;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Basket from '../screens/Basket';
import Scanning from '../screens/Scanning';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="Scanning">
      <Stack.Screen name="Scanning" component={Scanning} />
      <Stack.Screen name="Basket" component={Basket} />
    </Stack.Navigator>
  );
};

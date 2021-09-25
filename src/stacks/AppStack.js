import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Basket from '../screens/Basket';
import Scanning from '../screens/Scanning';
import BarcodeDisplay from '../screens/BarcodeDisplay';
import PointsSummary from '../screens/PointsSummary';
import AnimalReveal from '../screens/AnimalReveal';

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
      <Stack.Screen name="BarcodeDisplay" component={BarcodeDisplay} />
      <Stack.Screen name="PointsSummary" component={PointsSummary} />
      <Stack.Screen name="AnimalReveal" component={AnimalReveal} />
    </Stack.Navigator>
  );
};

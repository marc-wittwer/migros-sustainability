import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Basket from '../screens/Basket';
import Scanning from '../screens/Scanning';
import BarcodeDisplay from '../screens/BarcodeDisplay';
import PointsSummary from '../screens/PointsSummary';
import AnimalReveal from '../screens/AnimalReveal';
import Zoo from '../screens/Zoo';
import Questions from '../screens/Questions';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="Questions">
      <Stack.Screen name="Questions" component={Questions} />
      <Stack.Screen name="Scanning" component={Scanning} />
      <Stack.Screen name="Basket" component={Basket} />
      <Stack.Screen name="BarcodeDisplay" component={BarcodeDisplay} />
      <Stack.Screen name="PointsSummary" component={PointsSummary} />
      <Stack.Screen name="AnimalReveal" component={AnimalReveal} />
      <Stack.Screen name="Zoo" component={Zoo} />
    </Stack.Navigator>
  );
};

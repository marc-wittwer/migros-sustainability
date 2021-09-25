import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="Login">
      <Stack.Screen
        options={{
          headerTitle: 'Sign In',
        }}
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  );
};

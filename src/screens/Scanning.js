import React from 'react';
import {Button, Text, View} from 'react-native';

const Scanning = ({navigation}) => {
  const handleBasketClick = () => {
    navigation.navigate('Basket');
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Text>Scanning</Text>
      <Button title="Basket" onPress={handleBasketClick} />
    </View>
  );
};

export default Scanning;

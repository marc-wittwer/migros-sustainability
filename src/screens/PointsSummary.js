import React from 'react';
import {Button, Image, Text, View} from 'react-native';

const PointsSummary = ({navigation}) => {
  const handleAnimalRevealClick = () => {
    navigation.navigate('AnimalReveal');
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Text>PointsSummary</Text>
      <Text>Congrats</Text>
      <Text>+9 Points</Text>
      <View style={{width: 300, height: 10, backgroundColor: 'green'}}></View>
      <Text>3 points to get the next animal</Text>
      <Button title="AnimalReveal" onPress={handleAnimalRevealClick} />
    </View>
  );
};

export default PointsSummary;

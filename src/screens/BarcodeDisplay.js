import React from 'react';
import {Button, Image, Text, View} from 'react-native';

const BarcodeDisplay = ({navigation}) => {
  const handleClaimPointsClick = () => {
    navigation.navigate('PointsSummary');
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Text>BarcodeDisplay</Text>
      <Image
        style={{height: 200, width: 300}}
        source={require('../assets/barcode.png')}
      />
      <Button title="Claim points" onPress={handleClaimPointsClick} />
    </View>
  );
};

export default BarcodeDisplay;

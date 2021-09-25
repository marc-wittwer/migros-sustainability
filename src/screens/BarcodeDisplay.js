import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {textStyles} from '../styles/text';
import {AnswerButton} from './Questions';

const BarcodeDisplay = ({navigation}) => {
  const handleClaimPointsClick = () => {
    navigation.navigate('PointsSummary');
  };

  return (
    <>
      <Image
        style={{position: 'absolute', width: 400, height: 900}}
        source={require('../assets/background3.png')}
      />
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <View
          style={{
            padding: 10,
            alignItems: 'center',
            margin: 20,
          }}>
          <Text style={{...textStyles.boldTitle, textAlign: 'center'}}>
            Scan Code at {'\n'}
            Self-Checkout
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{height: 290, width: 300, marginBottom: 30}}
            source={require('../assets/barcode.png')}
          />

          <AnswerButton
            title="Verify payment"
            onPress={handleClaimPointsClick}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default BarcodeDisplay;

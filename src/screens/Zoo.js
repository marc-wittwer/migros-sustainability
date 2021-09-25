import React, {useContext} from 'react';
import {Image, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {formattedPriceString} from '../helpers';
import {AppContext} from '../provider/AppContextProvider';
import {textStyles} from '../styles/text';
import {Button} from 'react-native';
import {AnswerButton, MigrosMImage, TextLabel} from './Questions';

const Zoo = ({navigation}) => {
  const {basket} = useContext(AppContext);

  const handleBackClick = () => {
    navigation.navigate('Scanning');
  };

  return (
    <>
      <Image
        style={{position: 'absolute', width: 400, height: 900}}
        source={require('../assets/background4.png')}
      />

      <MigrosMImage />

      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <View
          style={{
            // flex: 1,
            padding: 10,
            alignItems: 'center',
            // justifyContent: 'center',
          }}>
          <TextLabel text="Eat more consciously and discover more animals next time." />
          <Image
            style={{
              width: 400,
              height: 310,
              marginTop: 70,
              marginBottom: 30,
            }}
            source={require('../assets/LowPolyZoo.png')}
          />
          <TextLabel text="You have already 6 out of 300 animals." />

          <AnswerButton title="Scan" onPress={handleBackClick} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Zoo;

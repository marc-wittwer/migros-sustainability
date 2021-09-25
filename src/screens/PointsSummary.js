import React from 'react';
import {Button, Image, SafeAreaView, Text, View} from 'react-native';
import {AnswerButton, MigrosMImage, TextLabel} from './Questions';

const PointsSummary = ({navigation}) => {
  const handleAnimalRevealClick = () => {
    navigation.navigate('AnimalReveal');
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
            flex: 1,
            alignItems: 'center',
          }}>
          <TextLabel text="Congrats" />

          <Image
            style={{width: 300, height: 300}}
            source={require('../assets/nineEggs.png')}
          />

          <TextLabel text="You get 1 animal!" />

          <View
            style={{
              width: 300,
              height: 15,
              backgroundColor: 'green',
              marginBottom: 20,
            }}></View>

          <AnswerButton title="Next" onPress={handleAnimalRevealClick} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default PointsSummary;

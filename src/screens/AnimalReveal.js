import React from 'react';
import {Button, Image, SafeAreaView, Text, View} from 'react-native';
import {useState} from 'react/cjs/react.development';
import {AnswerButton, MigrosMImage, TextLabel} from './Questions';

const AnimalReveal = ({navigation}) => {
  const [isAnimalRevealed, setIsAnimalRevealed] = useState(false);

  const handleShowZooClick = () => {
    navigation.navigate('Zoo');
  };

  const handleShowAnimalClick = () => {
    setIsAnimalRevealed(true);
  };

  return (
    <>
      <Image
        style={{position: 'absolute', width: 400, height: 900}}
        source={require('../assets/background4.png')}
      />
      {isAnimalRevealed ? (
        <Image
          style={{
            position: 'absolute',
            left: 30,
            top: 120,
            width: 344,
            height: 409,
          }}
          source={require('../assets/oval.png')}
        />
      ) : (
        <Image
          style={{
            position: 'absolute',
            left: 30,
            top: 120,
            width: 447,
            height: 728,
          }}
          source={require('../assets/flashlight.png')}
        />
      )}

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
          {isAnimalRevealed ? (
            <>
              <TextLabel text="Congrats." />

              <Image
                style={{
                  marginTop: 100,
                  marginBottom: 80,
                  height: 300,
                  width: 300,
                }}
                source={require('../assets/elefant.png')}
              />
              <TextLabel text="You unlocked the legendary elephant!" />
              <AnswerButton title="Go to zoo" onPress={handleShowZooClick} />
            </>
          ) : (
            <>
              <TextLabel text="Let's see what we can find here:" />
              <Image
                style={{
                  width: 183,
                  height: 240,
                  marginTop: 100,
                  marginBottom: 120,
                }}
                source={require('../assets/eggQuestionmark.png')}
              />
              <AnswerButton
                title="Show Animal"
                onPress={handleShowAnimalClick}
              />
              {/* <Button title="Show Animal" onPress={handleShowAnimalClick} /> */}
            </>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

export default AnimalReveal;

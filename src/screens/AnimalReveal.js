import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import {useState} from 'react/cjs/react.development';

const AnimalReveal = ({navigation}) => {
  const [isAnimalRevealed, setIsAnimalRevealed] = useState(false);

  const handleShowZooClick = () => {
    navigation.navigate('Zoo');
  };

  const handleShowAnimalClick = () => {
    setIsAnimalRevealed(true);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      {isAnimalRevealed ? (
        <>
          <Text>Concrats</Text>
          <Image
            style={{height: 300, width: 300}}
            source={require('../assets/elefant.png')}
          />
          <Text>You unlocked the legendary elefant.</Text>
          <Button title="Show Zoo" onPress={handleShowZooClick} />
        </>
      ) : (
        <>
          <Text>Animal Reveal</Text>
          <Text>Let's see what we can find here:</Text>
          <Text>EGG</Text>
          <Button title="Show Animal" onPress={handleShowAnimalClick} />
        </>
      )}
    </View>
  );
};

export default AnimalReveal;

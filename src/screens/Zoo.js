import React, {useContext} from 'react';
import {Image, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {formattedPriceString} from '../helpers';
import {AppContext} from '../provider/AppContextProvider';
import {textStyles} from '../styles/text';
import {Button} from 'react-native';

const Zoo = ({navigation}) => {
  const {basket} = useContext(AppContext);

  const handleBackClick = () => {
    navigation.navigate('Scanning');
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          // flex: 1,
          padding: 10,
          // alignItems: 'center',
          // justifyContent: 'center',
          backgroundColor: 'red',
        }}>
        <Text style={textStyles.boldTitle}>
          Eat more consciously and discover more animals next time.
        </Text>
      </View>
      <Image
        style={{height: 300, width: 300}}
        source={require('../assets/zoo.png')}
      />
      <View
        style={{
          // flex: 1,
          padding: 10,
          // alignItems: 'center',
          // justifyContent: 'center',
          backgroundColor: 'red',
        }}>
        <Text style={textStyles.boldTitle}>You have 4 out of 300 animals.</Text>
      </View>

      <Button title="Scanning" onPress={handleBackClick} />
    </SafeAreaView>
  );
};

export default Zoo;

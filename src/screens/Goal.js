import React, {useContext} from 'react';
import {Image, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {formattedPriceString} from '../helpers';
import {AppContext} from '../provider/AppContextProvider';
import {textStyles} from '../styles/text';
import {Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AnswerButton, MigrosMImage, TextLabel} from './Questions';

const Goal = ({navigation}) => {
  const {basket} = useContext(AppContext);

  const handleScanningClick = () => {
    navigation.navigate('Scanning');
  };

  return (
    <>
      <Image
        style={{position: 'absolute', width: 400, height: 900}}
        source={require('../assets/background1.png')}
      />
      <MigrosMImage />

      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <View style={{height: 150}}></View>
        <TextLabel text="We try to recommend you alternative products that match your goal." />
        <View style={{height: 250}}></View>

        <AnswerButton title="Start scanning" onPress={handleScanningClick} />
      </SafeAreaView>
    </>
  );
};

export default Goal;

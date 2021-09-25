import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {textStyles} from '../styles/text';

const Questions = ({navigation}) => {
  const handleStartScanningClick = () => {
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
        <TextLabel text="We would like to get to know you better" />
        <TextLabel text="How many animals do you want to save?" />
        <TextLabel text="How many days do you want to spend plant-based?" />
        <TextLabel text="How many meals do you want to spend plant based?" />

        <View style={{flex: 1}}>
          <AnswerButton title="abc" onPress={handleStartScanningClick} />
          <AnswerButton title="abc" onPress={handleStartScanningClick} />
          <AnswerButton title="abc" onPress={handleStartScanningClick} />
          <AnswerButton title="abc" onPress={handleStartScanningClick} />
          <AnswerButton title="abc" onPress={handleStartScanningClick} />
        </View>
      </SafeAreaView>
    </>
  );
};

const AnswerButton = props => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#ee6f2d',
        borderRadius: 50,
      }}
      onPress={props.onPress}>
      <Text style={textStyles.bodyText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const TextLabel = props => {
  return (
    <Text
      style={{
        ...textStyles.bodyText,
        ...props.style,
        padding: 15,
        textAlign: 'center',
      }}>
      {/* <Text style={{...textStyles.bodyText, padding: 15}}> */}
      {props.text}
    </Text>
  );
};

export const MigrosMImage = props => {
  return (
    <View
      style={{
        position: 'absolute',
        flex: 1,
        bottom: 10,
        right: 0,
        left: 0,
        padding: 20,
        alignItems: 'center',
      }}>
      <Image
        style={{
          width: 60,
          height: 60,
        }}
        source={require('../assets/M.png')}
      />
    </View>
  );
};

export default Questions;

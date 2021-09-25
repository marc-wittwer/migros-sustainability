import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {formattedPriceString} from '../helpers';
import {AppContext} from '../provider/AppContextProvider';
import {textStyles} from '../styles/text';
import {Button} from 'react-native';

const Basket = ({navigation}) => {
  const {basket} = useContext(AppContext);

  const handleCheckoutClick = () => {
    navigation.navigate('BarcodeDisplay');
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'white',
      }}>
      <View
        style={{
          // flex: 1,
          padding: 10,
          // alignItems: 'center',
          // justifyContent: 'center',
          backgroundColor: 'red',
        }}>
        <Text style={textStyles.boldTitle}>Basket</Text>
      </View>
      {basket.map(product => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
          }}>
          <Text>{product.name}</Text>
          <Text>
            {formattedPriceString(parseFloat(product.price.item.price))}
          </Text>
        </View>
      ))}
      <Button title="Checkout" onPress={handleCheckoutClick} />
    </SafeAreaView>
  );
};

export default Basket;

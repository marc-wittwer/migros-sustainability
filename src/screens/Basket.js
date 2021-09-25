import React, {useContext} from 'react';
import {Image, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {formattedPriceString} from '../helpers';
import {AppContext} from '../provider/AppContextProvider';
import {textStyles} from '../styles/text';
import {Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AnswerButton} from './Questions';

const Basket = ({navigation}) => {
  const {basket} = useContext(AppContext);

  const handleCheckoutClick = () => {
    navigation.navigate('BarcodeDisplay');
  };

  const getTotalPrice = () => {
    let total = 0;
    for (const product of basket) {
      total += product.price.item.price;
    }
    return formattedPriceString(parseFloat(total));
  };

  return (
    <>
      <Image
        style={{position: 'absolute', width: 400, height: 900}}
        source={require('../assets/background2.png')}
      />
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <View
          style={{
            padding: 10,
            alignItems: 'center',
          }}>
          <Text style={textStyles.boldTitle}>Basket</Text>
        </View>

        <View style={{borderRadius: 10, backgroundColor: 'white', margin: 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 10,
            }}>
            <Text style={{fontWeight: 'bold'}}>Description</Text>
            <Text style={{fontWeight: 'bold'}}>Preis</Text>
          </View>
          {basket.map(product => (
            <View
              key={product.name}
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
          <View
            style={{
              alignItems: 'center',
              flex: 1,
              height: 1,
              padding: 1,
              marginTop: 8,
              margin: 5,
              backgroundColor: '#dddddd',
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 10,
              marginTop: 8,
            }}>
            <Text style={{fontWeight: 'bold'}}>Total</Text>
            <Text>{getTotalPrice()}</Text>
          </View>
        </View>

        <AnswerButton title="Checkout" onPress={handleCheckoutClick} />
      </SafeAreaView>
    </>
  );
};

export default Basket;

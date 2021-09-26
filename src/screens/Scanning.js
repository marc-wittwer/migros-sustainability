import React, {useState, useEffect} from 'react';
import {Button, Text, View, Image, TouchableOpacity} from 'react-native';
// import SvgUri from 'react-native-svg-uri';
import {
  BarcodeCapture,
  BarcodeCaptureOverlay,
  BarcodeCaptureSettings,
  Symbology,
  SymbologyDescription,
} from 'scandit-react-native-datacapture-barcode';
import {
  Brush,
  Color,
  Camera,
  CameraSettings,
  DataCaptureContext,
  DataCaptureView,
  FrameSourceState,
  RectangularViewfinder,
  RectangularViewfinderStyle,
  RectangularViewfinderLineStyle,
  VideoResolution,
} from 'scandit-react-native-datacapture-core';
import {products} from '../data/products';
import {AnswerButton} from './Questions';

const Scanning = ({navigation}) => {
  const handleBasketClick = () => {
    navigation.navigate('Basket');
  };
  const handleCloseButtonClicked = () => {
    setInfoBoxCollapsed(state => !state);
  };

  // alternative: 7617027586580
  // chocolate: 7616500010031
  const [code, setCode] = useState('123');
  const [product, setProduct] = useState({});
  const [infoBoxCollapsed, setInfoBoxCollapsed] = useState(true);
  const context = DataCaptureContext.forLicenseKey(
    'AZ2gvQ7bLmoGCmYswh1QrzEMQWGoPfhnwl55J/dfIjuwKrmaX3rno4Jgn498QlEgZhzXEHZKJGA/dVGRbmEKYrxbeCjyayKvLWZKKaAtsWNYZmN993AKEr9hp5hAVvDfPEMMxLZDds/YNblOiGoMY95USjYbO2bg/U9N7wFmTBWEeDKVFV7AivpTun8FA9phYHvk2TQ7Y4dvHNfLq3+5oAAXwz9nOItzVVgx9qg7VD0eSJZ4qSta6sV0UV9qYvme+lU1m69jAAPXSkINJ3XwDelb2SIjaiELWmPMLtd+sRxMR1gLSET8Uv9Bl3M2fg2f6WEP4ThewRlcYQQblGq/wi4kf/G5MeyLFkb7jb9KMXWcRfT/2TTa/PlAXgzhB3yJvXJ8JN9zskPqJkAnF0XxyJRQfFAdZYqLkl8i+ItgezUjek83PlOZADt2dnFeQitSD1Ybl64yoqagUD0vJHDsrB18BnTWBCBdF0Bz4IRwJ8w2Dmrv50aZm31pzPDUejdf8EAEZFFNyESCYLxg7jo60klosI1EYoZ3G03E2+hw32ZEMyTQXWxCubm3XqWYfppE2MH+h0UzJ/ayXqLtrfNRFhFFIG3GO5Z9fjQIUo14TxDIrPNDv48yCT+50sR16PI0gkzvwSXUtqRM0mtO1W5E7YiPHy/oAkuvmJbGGcg5ycU0g5HCeOvxvLb2Zwjr/pBPjZkJTSTaELwTriIAA9w00ubXAlSFqDmxMhvjZ4u5Eh6LzHhDSvNQyzK3lF/keB/zw2goAoca2tlAbpBR47dxWjEauc/1c7wHhxaOp3yF4glD4dIj84OhHaaFOJ9CZnyboB4p6r4AEPGikWSKEIH7zuSsvoGZqeX5BQybxgEEBbb64j7Y1Zd8dA0wAqmxhHj7F9TCFsaBNawMlV+4lX1APZh1TvtG0sjo/g7jtoJIK5vyrGODMXeXaypIghsYRaHBQejY7IU90wzG7ksGwb/wl/MMATHvJsOuyOR5WMoM7GuWlvvWCDKXCDBKxLRJ4/tDABgkHYUWx37I+WVs7kB52yKtriXsjxvEM6Hgh7xGt8GDTiHep3eXk+igmvubLkhvj0juj7LwRAFE92PTg+ru1v5Fzk1nlyvVqztTW2Rn9fGhg9rtnz5MAL2XJc4KJbji91h12ag5N8oW7IPmj1hlHjNx/1MivzQJxJ7RylK6dhYw8lvcdwo9mfQjKNdB0+gmYAKOWZZ1Sx3vO8vs8jZkKO0i0C4=',
  );

  useEffect(() => {
    fetch('https://hackzurich21-migros.herokuapp.com/scan?gtin=' + code)
      .then(res => {
        if (res.ok) {
          barcodeCapture.isEnabled = true;
          return res.json();
        }
        throw res;
      })
      .then(data => {
        const {name} = data;
        if (name) {
          console.log(name);
          setInfoBoxCollapsed(false);
        }
        setProduct(data);
      });
  }, [code]);

  const viewRef = React.createRef();

  const settings = new BarcodeCaptureSettings();
  settings.enableSymbologies([
    Symbology.Code128,
    Symbology.Code39,
    Symbology.QR,
    Symbology.EAN8,
    Symbology.UPCE,
    Symbology.EAN13UPCA,
  ]);

  const barcodeCapture = BarcodeCapture.forContext(context, settings);

  const cameraSettings = BarcodeCapture.recommendedCameraSettings;

  const camera = Camera.default;

  if (camera) {
    camera.applySettings(cameraSettings);
  }

  context.setFrameSource(camera);

  camera.switchToDesiredState(FrameSourceState.On);

  const listener = {
    didScan: (_, session) => {
      const barcode = session.newlyRecognizedBarcodes[0];
      if (barcode.data !== code) {
        setCode(barcode.data);
      }
    },
  };
  barcodeCapture.addListener(listener);

  const overlay = BarcodeCaptureOverlay.withBarcodeCaptureForView(
    barcodeCapture,
    viewRef.current,
  );
  overlay.viewfinder = new RectangularViewfinder(
    RectangularViewfinderStyle.Square,
    RectangularViewfinderLineStyle.Light,
  );

  // Adjust the overlay's barcode highlighting to match the new viewfinder styles and improve the visibility of
  // feedback. With 6.10 we will introduce this visual treatment as a new style for the overlay.
  overlay.brush = new Brush(
    Color.fromRGBA(0, 0, 0, 0),
    Color.fromHex('FFFF'),
    3,
  );

  const getClimateRatingSource = mcheck => {
    console.log(mcheck);
    if (!mcheck) return require('../assets/C0.png');
    const rating = parseInt(
      mcheck.carbon_footprint.ground_and_sea_cargo.rating,
    );

    console.log('Rating is:', rating);
    if (!rating) return require('../assets/C3.png');
    if (rating === 0) {
      return require('../assets/C0.png');
    } else if (rating === 1) {
      return require('../assets/C1.png');
    } else if (rating === 2) {
      return require('../assets/C2.png');
    } else if (rating === 3) {
      return require('../assets/C3.png');
    } else if (rating === 4) {
      return require('../assets/C4.png');
    } else {
      return require('../assets/C5.png');
    }
  };

  return (
    <>
      <DataCaptureView
        style={{flex: 1, width: '100%', position: 'absolute', height: '100%'}}
        context={context}
        ref={viewRef}
      />

      <View
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          borderRadius: 20,
          padding: 20,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 5,
          flex: 1,
          height: 250,
          bottom: infoBoxCollapsed ? -20 : 170,
          left: 0,
          right: 0,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.6,
          shadowRadius: 7,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            color: '#123123',
            fontSize: 22,
            marginBottom: 5,
          }}>
          {product.name}{' '}
        </Text>

        {product?.name !== undefined ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 30,
            }}>
            {product.image && (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  borderRadius: 15,
                  width: 80,
                  height: 80,
                  marginTop: 10,
                  padding: 10,
                }}>
                <Image
                  style={{
                    width: 80,
                    height: 80,
                    marginTop: 10,
                    resizeMode: 'contain',
                  }}
                  source={{
                    uri: product.image,
                  }}
                />
              </View>
            )}
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                // backgroundColor: 'white',
                borderRadius: 15,
                width: 80,
                height: 80,
                marginTop: 10,
                padding: 10,
              }}>
              <Image
                style={{
                  width: 100,
                  height: 90,
                  marginTop: 10,
                  resizeMode: 'contain',
                }}
                source={getClimateRatingSource(product?.mcheck)}
              />
            </View>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
                width: 80,
                height: 80,
                marginTop: 10,
                padding: 10,
              }}>
              <Image
                style={{
                  width: 120,
                  height: 90,
                  marginTop: 10,
                  resizeMode: 'contain',
                }}
                source={require('../assets/zeroEgg.png')}
              />
            </View>
          </View>
        ) : (
          <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 23}}>
            Ready to scan...
          </Text>
        )}
      </View>

      <View
        style={{
          position: 'absolute',
          backgroundColor: '#d8f0ab',
          borderRadius: 20,
          padding: 20,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 5,
          flex: 1,
          height: 250,
          bottom: infoBoxCollapsed ? -180 : 0,
          left: 0,
          right: 0,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.6,
          shadowRadius: 7,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            color: '#297b01',
            fontSize: 22,
            marginBottom: 5,
          }}>
          Sustainable Alternative:
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            color: '#123123',
            fontSize: 22,
            marginBottom: 5,
          }}>
          {product?.alternative?.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          {product?.alternative?.image && (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                borderRadius: 15,
                width: 80,
                height: 80,
                marginTop: 10,
                padding: 10,
              }}>
              <Image
                style={{
                  width: 80,
                  height: 80,
                  marginTop: 10,
                  resizeMode: 'contain',
                }}
                source={{
                  uri: product?.alternative?.image,
                }}
              />
            </View>
          )}
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              // backgroundColor: 'white',
              borderRadius: 15,
              width: 80,
              height: 80,
              marginTop: 10,
              padding: 10,
            }}>
            <Image
              style={{
                width: 100,
                height: 90,
                marginTop: 10,
                resizeMode: 'contain',
              }}
              source={getClimateRatingSource(product?.alternative?.mcheck)}
            />
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              // backgroundColor: 'white',
              borderRadius: 15,
              width: 80,
              height: 80,
              marginTop: 10,
              padding: 10,
            }}>
            <Image
              style={{
                width: 120,
                height: 90,
                marginTop: 10,
                resizeMode: 'contain',
              }}
              source={require('../assets/threeEgg.png')}
            />
          </View>
        </View>

        <AnswerButton title="Take this instead" onPress={handleBasketClick} />
        {/* svg url product.mcheck.carbon_footprint.image.original */}
      </View>

      <TouchableOpacity
        onPress={handleCloseButtonClicked}
        style={{
          position: 'absolute',
          // backgroundColor: 'lightgray',
          borderRadius: 50,
          padding: 20,
          bottom: infoBoxCollapsed ? 195 : 385,
          left: 300,
          right: 0,
          width: 50,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* <Text style={{fontWeight: 'bold'}}>X</Text> */}
        <Image
          style={{
            width: 40,
            height: 40,
            marginTop: 10,
            resizeMode: 'contain',
          }}
          source={require('../assets/arrow_down.png')}
        />
      </TouchableOpacity>
    </>
  );
};

export default Scanning;

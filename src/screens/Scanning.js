import React, {useState, useEffect} from 'react';
import {Button, Text, View, Image} from 'react-native';
import SvgUri from 'react-native-svg-uri';
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

const Scanning = ({navigation}) => {
  const handleBasketClick = () => {
    navigation.navigate('Login');
  };
  const [code, setCode] = useState('123');
  const [product, setProduct] = useState({});
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
      .then(data => setProduct(data));
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
          marginBottom: 80,
          flex: 1,
          height: 200,
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        {product.name && <Text>{product.name}</Text>}

        {product.image && (
          <Image
            style={{
              width: 50,
              height: 80,
              marginTop: 10,
              resizeMode: 'contain',
            }}
            source={{
              uri: product.image,
            }}
          />
        )}
        {product.mcheck && product.mcheck.carbon_footprint && (
          <SvgUri
            width="80"
            height="80"
            source={{
              uri: product.mcheck.carbon_footprint.image.original,
            }}
          />
        )}
        <Button title="Basket" onPress={handleBasketClick} />
      </View>
    </>
  );
};

export default Scanning;

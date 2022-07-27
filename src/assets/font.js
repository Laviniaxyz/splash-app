import * as ExpoFont from 'expo-font';

const OpenSans = 'OpenSans';

export const prepareFonts = async () => {
  await ExpoFont.loadAsync({
    [OpenSans]: require('../../assets/OpenSans-Regular.ttf'),
  });
};


export default OpenSans;

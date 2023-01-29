import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import MainStack from './src/navigation/index';

import GlobalFont from 'react-native-global-font';
export default function App() {
  useEffect(() => {
    let fontName = 'Satoshi-Regular';
    GlobalFont.applyGlobal(fontName);
  }, []);

  return (
    <View style={{flex: 1}}>
      <MainStack />
    </View>
  );
}

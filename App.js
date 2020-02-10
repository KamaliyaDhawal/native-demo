import React from 'react';
import { View } from 'react-native';

import Navigation from './navigation/Drawer';
import { globleStyle } from './assets/styles/global';

const styles = globleStyle;

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
        <Navigation />
    </View>
  );
}

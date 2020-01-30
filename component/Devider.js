import React from 'react';
import { View } from 'react-native';

import { globleStyle } from '../assets/styles/global';

const styles = globleStyle;

export default function Slider({navigation, data, horizontal}) {
    const styles = globleStyle;
    return(
        <View style={styles.deviderContainer}>
            <View style={styles.devider}></View>
            {/* <View style={styles.devider}></View> */}
        </View>
    )
}

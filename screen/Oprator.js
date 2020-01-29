import React from 'react';
import { View, Text } from 'react-native';

import Tabs from '../component/Tabs';
import Header from '../component/Header';
import { globleStyle } from '../assets/styles/global';

export default function Oprator({navigation}) {
    const styles = globleStyle;
    return(
        <View style={styles.container}>
            <Header title="Oprators" navigation={navigation} />
            <View style={styles.textContainer}>
                <Text>
                    Oprator Screen
                </Text>
            </View>
            <Tabs navigation={ navigation } id={2}/>
        </View>
    )
}

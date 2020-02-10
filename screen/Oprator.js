import React from 'react';
import { View, Text } from 'react-native';

import Tabs from '../component/Tabs';
import Header from '../component/Header';
import { globleStyle } from '../assets/styles/global';
import Slider from '../component/Slider';
import { oprators } from '../source/oprators/data';

export default function Category({navigation}) {
    const styles = globleStyle;
    function search(string) {
        alert(string);
    }
    return(
        <View style={styles.container}>
            <Header title="Categories" navigation={navigation} searchFn={search} />
            <View style={styles.textContainer}>
                <Slider
                    data={oprators}
                    horizontal={false}
                    page = 'category'
                />
            </View>
            <Tabs navigation={ navigation } id={2}/>
        </View>
    )
}

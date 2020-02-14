import React from 'react';
import { View, Text } from 'react-native';

import Tabs from '../component/Tabs';
import Header from '../component/Header';
import { globleStyle } from '../assets/styles/global';
import Slider from '../component/Slider';
import { categories } from '../source/categories/data';

export default function Category({navigation}) {
    const styles = globleStyle;
    return(
        <View style={styles.container}>
            <Header title="Categories" navigation={navigation} />
            <View style={styles.textContainer}>
                <Slider
                    data={categories}
                    horizontal={false}
                    page = 'category'
                    sliderName = 'categories'
                    navigation={navigation}
                />
            </View>
        </View>
    )
}

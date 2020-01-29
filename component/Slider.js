import React from 'react';
import { View, FlatList, Text, Image } from 'react-native';

import { globleStyle } from '../assets/styles/global';

export default function Slider({navigation, data, horizontal}) {
    const styles = globleStyle;
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <FlatList
                    data={data}
                    renderItem = {({item}) => {
                        const { name, image } = item;
                        return (
                            <View>
                                <Image
                                    source={image}
                                    style={styles.sliderImage}
                                />
                                <Text style={styles.sliderText}>{name}</Text>
                            </View>
                          );
                    }}
                    horizontal = {horizontal}
                />
            </View>
        </View>
    )
}

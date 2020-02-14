import React from 'react';
import { View, Text, Image } from 'react-native';

import Tabs from '../component/Tabs';
import Header from '../component/Header';
import { globleStyle } from '../assets/styles/global';

export default function Favorite({navigation}) {
    const styles = globleStyle;
    return(
        <View style={styles.container}>
            <Header title="Favorites" navigation={navigation} />
            <View style={styles.textContainer}>
                <Text>
                    <Image
                        source={require('../assets/images/not-found.png')}
                        style={styles.favoritePageImage}
                    />
                </Text>
            </View>
            {/* <Tabs navigation={ navigation } id={4}/> */}
        </View>
    )
}

import React from 'react';
import { View, Text, ImageBackground, Button } from 'react-native';
import Header from '../component/Header';
import { globleStyle } from '../assets/styles/global';

export default function Favorite({navigation}) {
    const styles = globleStyle;
    return(
        <View style={styles.container}>
            <Header title="Favorites" navigation={navigation} />
            <View style={styles.textContainer}>
                    <ImageBackground style={styles.modelBackgroundImage} source={require('../assets/images/not-found.png')}>
                    </ImageBackground>
                </View>
            {/* <Tabs navigation={ navigation } id={4}/> */}
        </View>
    )
}

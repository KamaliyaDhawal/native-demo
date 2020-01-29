import React, { useState } from 'react';
import { View } from 'react-native';
import { FontAwesome, Octicons } from '@expo/vector-icons';
import { globleStyle } from '../assets/styles/global';

export default function Tabs({ navigation, id=1 }) {
    const styles = globleStyle;
    const ref = React.createRef();
    const [activeScreen, changeActiveScreen] = useState(1);
    const defaultIconColor = 'darkgray';
    const activeIconColor = '#fff';
    return(
        <View style={styles.tabsContainer}>
            <Octicons
                name = "radio-tower"
                color = {id===2? activeIconColor:defaultIconColor}
                size = {id===2? 40:30}
                style = {styles.tabsIcon}
                onPress = { () => {
                    navigation.navigate('Oprator');
                }}
            />
            <FontAwesome
                name = "list-ul"
                color = {id===3? activeIconColor:defaultIconColor}
                size = {id===3? 40:30}
                style = {styles.tabsIcon}
                onPress = { () => {
                    navigation.navigate('Category');
                }}
            />
            <FontAwesome
                name = "home"
                color = {id===1? activeIconColor:defaultIconColor}
                size = {id===1? 40:30}
                style = {styles.tabsIcon}
                onPress = { () => {
                    navigation.navigate('Home');
                }}
            />
            <FontAwesome
                name = "heart"
                color = {id===4? 'red':defaultIconColor}
                size = {id===4? 40:30}
                style = {styles.tabsIcon}
                onPress = { () => {
                    navigation.navigate('Favorite');
                }}
            />
            <FontAwesome
                    name = "filter"
                    color = 'gray'
                    size = {30}
                    style = {styles.tabsIcon}
                    onPress = { () => {
                        alert('test');
                    }}
                />
        </View>
    )
}

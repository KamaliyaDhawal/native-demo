import React from 'react';
import { View, Text, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { globleStyle } from '../assets/styles/global';

export default function Header({ navigation, title }) {
    const styles = globleStyle;
    return(
        <View style={styles.headerContainer}>
                <View></View>
                <View>
                    <Text style={styles.headerText}>
                        {title}
                    </Text>
                </View>
                <View>
                    <FontAwesome
                        name = "ellipsis-v"
                        color = '#fff'
                        size = {28}
                        style = {styles.headerIcon}
                        onPress={()=>{
                            Alert.alert('Test', 'Hello');
                        }}
                    />
                </View>
        </View>
    )
}

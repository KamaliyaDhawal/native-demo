import React from 'react';
import { View, Text, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { globleStyle } from '../assets/styles/global';

export default function Header({ navigation, title, subpage=false }) {
    const styles = globleStyle;
    return(
        <View style={styles.headerContainer}>
                <View>
                    <AntDesign
                        name = "bars"
                        color = '#fff'
                        size = {26}
                        style = {styles.headerIcon}
                        onPress={()=>{
                            if(subpage) {
                                navigation.goBack(null);
                            } else {
                                navigation.openDrawer();
                            }
                        }}
                    />
                </View>
                <View>
                    <Text style={styles.headerText}>
                        {title}
                    </Text>
                </View>
                <View>
                    <AntDesign
                        name = "filter"
                        color = 'gray'
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

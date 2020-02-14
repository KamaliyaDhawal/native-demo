import React, { useState } from 'react';
import { View, Text, Alert, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { globleStyle } from '../assets/styles/global';

export default function Header({ navigation, title, searchFn, subpage=false, icon }) {
    const styles = globleStyle;
    const [searchText, changeSearchText] = useState('');
    
    return(
        <View>
            {/* <View style={styles.headerContainer}>
                    <View>
                        <FontAwesome
                            name = {icon? icon:"bars"}
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
                        <FontAwesome
                            name = "filter"
                            color = '#fff'
                            size = {32}
                            style = {styles.headerIcon}
                            onPress={()=>{
                                Alert.alert('Test', 'Hello');
                            }}
                        />
                    </View>
            </View> */}
            <View style={styles.searchContainer}>
                <View style={styles.searchSection}>
                    <TextInput
                        placeholder = 'Search Channel name or'
                        style = {styles.searchInput}
                        onChangeText = {(stringData) => {
                            changeSearchText(stringData);
                        }}
                        underlineColorAndroid = "transparent"
                    />
                    <FontAwesome
                        name = "search"
                        color = 'gray'
                        size = {24}
                        style={styles.searchIcon}
                        onPress = {
                            () => {
                                if(searchText === '') {
                                    Alert.alert(
                                        'Search Error',
                                        'Please insert name or number for search'
                                    )
                                } else {
                                    navigation.navigate('ChannelList', { click: true, searchText });
                                }
                            }
                        }
                    />
                </View>
            </View>
        </View>
    )
}

import React from 'react';
import { View, Text, Alert, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { globleStyle } from '../assets/styles/global';

export default function Header({ navigation, title, searchFn, subpage=false }) {
    const styles = globleStyle;
    return(
        <View>
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
                            size = {32}
                            style = {styles.headerIcon}
                            onPress={()=>{
                                Alert.alert('Test', 'Hello');
                            }}
                        />
                    </View>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchSection}>
                    <TextInput
                        placeholder='Search Channel name or number'
                        style={styles.searchInput}
                        onChangeText={(string) => {searchFn(string)}}
                        underlineColorAndroid="transparent"
                    />
                    <AntDesign
                        name = "search1"
                        color = 'gray'
                        size = {24}
                        style={styles.searchIcon}
                        onPress={()=>{
                            Alert.alert('Test', 'Hello');
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

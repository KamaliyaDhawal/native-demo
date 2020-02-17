import React from 'react';
import { View } from 'react-native';
import Favorite from '../../screen/Favorite';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';

const screen={
    Favorite: {
        screen: Favorite,
        navigationOptions: {
            title: 'Favorites',
        },
    }
}

export default createStackNavigator(screen, {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
        headerStyle: { 
            backgroundColor: 'black',
        },
        headerTitleStyle: {
            color: '#fff',
            fontSize: 28,
            fontWeight: '600'
        },
        headerRight: (
            <View style={{
                marginRight: 20
            }}>
                <FontAwesome
                    name="filter"
                    size={28}
                    color='#fff'
                />
            </View>
        ),
        headerTintColor: 'white',
    },
});
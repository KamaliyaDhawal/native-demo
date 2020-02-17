import React from 'react';
import { View } from 'react-native';
import Home from '../../screen/Home';
import ChannelList from '../../screen/ChannelList';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesome } from '@expo/vector-icons';

const screen={
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Channel Finder',
        },
    },
    ChannelList: {
        screen: ChannelList,
        navigationOptions: {
            title: 'Channel List',
        }
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
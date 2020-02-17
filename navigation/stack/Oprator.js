import React from 'react';
import { View } from 'react-native';
import Oprator from '../../screen/Oprator';
import { FontAwesome } from '@expo/vector-icons';
import ChannelList from '../../screen/ChannelList';
import { createStackNavigator } from 'react-navigation-stack';

const screen={
    Oprator: {
        screen: Oprator,
        navigationOptions: {
            title: 'Oprators',
        },
    },
    ChannelList: {
        screen: ChannelList,
        navigationOptions: {
            title: 'Channel List',
        }
    }
}

export default createStackNavigator(screen, 
    {
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
    }
);
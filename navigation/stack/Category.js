import React from 'react';
import { View } from 'react-native';
import Category from '../../screen/Category';
import ChannelList from '../../screen/ChannelList';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesome } from '@expo/vector-icons';
import { FilterModal } from '../../modal/Filter';

const screen={
    Category: {
        screen: Category,
        navigationOptions: {
            title: 'Categories',
            headerLeft: (
                <View style={{
                    marginLeft: 25
                }}>
                    <FontAwesome
                        name="user-circle-o"
                        size={28}
                        color='#fff'
                    />
                </View>
            ),
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
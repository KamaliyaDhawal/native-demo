import React from 'react';
import Home from './stack/Home';
import Oprator from './stack/Oprator';
import Favorite from './stack/Favorite';
import Category from './stack/Category';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const screen = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
            tabBarIcon: ({focused}) => (
                focused ? <MaterialCommunityIcons name='home' size={26} color='white' /> : 
                <MaterialCommunityIcons name='home' size={24} color='gray' /> ),
            tabBarOptions: {
                activeTintColor: 'white',
                inactiveTintColor: 'gray',
                style: {
                    backgroundColor: 'black',
                    borderTopWidth: 1,
                    borderTopColor: '#111'
                },
            },
        }
    },
    Oprator: {
        screen: Oprator,
        navigationOptions: {
            title: 'Oprators',
            tabBarIcon: ({focused}) => (
                focused ? <MaterialCommunityIcons name='tower-beach' size={26} color='white' /> : 
                <MaterialCommunityIcons name='tower-beach' size={24} color='gray' /> ),
            tabBarOptions: {
                activeTintColor: 'white',
                inactiveTintColor: 'gray',
                style: {
                    backgroundColor: 'black',
                    borderTopWidth: 1,
                    borderTopColor: '#111'
                },
            },
        }
    },
    Category: {
        screen: Category,
        navigationOptions: {
            title: 'Categories',
            tabBarIcon: ({focused}) => (
                focused ? <MaterialCommunityIcons name='view-grid' size={26} color='white' /> : 
                <MaterialCommunityIcons name='view-grid' size={24} color='gray' /> ),
            tabBarOptions: {
                activeTintColor: 'white',
                inactiveTintColor: 'gray',
                style: {
                    backgroundColor: 'black',
                    borderTopWidth: 1,
                    borderTopColor: '#111'
                },
            },
        }
    },
    Favorite: {
        screen: Favorite,
        navigationOptions: {
            title: 'Favorites',
            tabBarIcon: ({focused}) => (
                focused ? <MaterialCommunityIcons name='heart' size={26} color='white' /> : 
                <MaterialCommunityIcons name='heart' size={24} color='gray' /> ),
            tabBarOptions: {
                activeTintColor: 'white',
                inactiveTintColor: 'gray',
                style: {
                    backgroundColor: 'black',
                    borderTopWidth: 1,
                    borderTopColor: '#111'
                },
            },
        }
    },
}

export default createAppContainer(createBottomTabNavigator(screen, {
    initialRouteName: 'Home',
}));
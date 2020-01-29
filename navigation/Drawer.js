import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from './stack/Home';
import Oprator from './stack/Oprator';
import Category from './stack/Category';
import Favorite from './stack/Favorite';

const screen = {
    Home: {
        screen: Home
    },
    Oprator: {
        screen: Oprator
    },
    Category: {
        screen: Category
    },
    Favorite: {
        screen: Favorite
    },
}

export default createAppContainer(createDrawerNavigator(screen));
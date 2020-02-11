import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screen/Home';
import Oprator from '../screen/Oprator';
import Category from '../screen/Category';
import Favorite from '../screen/Favorite';
import ChannelList from '../screen/ChannelList';

const screen={
    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false,
        }
    },
    Oprator: {
        screen: Oprator
    },
    Category: {
        screen: Category,
    },
    Favorite: {
        screen: Favorite,
    },
    ChannelList: {
        screen: ChannelList,
    }
}

const headerStyle = {
    backgroundColor: '#333'
}

export default createAppContainer(createStackNavigator(screen, {
    defaultNavigationOptions: {
        headerStyle,
        headerTintColor: 'white',
    },
}));
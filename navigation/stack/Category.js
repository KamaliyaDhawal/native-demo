import Category from '../../screen/Category';
import ChannelList from '../../screen/ChannelList';
import { createStackNavigator } from 'react-navigation-stack';

const screen={
    Category: {
        screen: Category,
        navigationOptions: {
            headerShown: false,
        }
    },
    ChannelList: {
        screen: ChannelList,
        navigationOptions: {
            headerShown: false,
        }
    }
}

export default createStackNavigator(screen);
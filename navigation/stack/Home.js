import Home from '../../screen/Home';
import ChannelList from '../../screen/ChannelList';
import { createStackNavigator } from 'react-navigation-stack';

const screen={
    Home: {
        screen: Home,
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
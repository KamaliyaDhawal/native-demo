import { createStackNavigator } from 'react-navigation-stack';
import ChannelList from '../../screen/ChannelList';

const screen={
    ChannelList: {
        screen: ChannelList,
        navigationOptions: {
            headerShown: false,
        }
    }
}

export default createStackNavigator(screen);
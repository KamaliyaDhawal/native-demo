import Oprator from '../../screen/Oprator';
import ChannelList from '../../screen/ChannelList';
import { createStackNavigator } from 'react-navigation-stack';

const screen={
    Oprator: {
        screen: Oprator,
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
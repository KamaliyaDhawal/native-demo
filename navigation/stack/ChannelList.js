import { createStackNavigator } from 'react-navigation-stack';
import ChannelList from '../../screen/ChannelList';

const screen={
    ChannelList: {
        screen: ChannelList,
    }
}

export default createStackNavigator(screen);
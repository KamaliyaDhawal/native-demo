import Favorite from '../../screen/Favorite';
import { createStackNavigator } from 'react-navigation-stack';

const screen={
    Favorite: {
        screen: Favorite,
        navigationOptions: {
            headerShown: false,
        }
    }
}

export default createStackNavigator(screen);
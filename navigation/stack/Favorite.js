import { createStackNavigator } from 'react-navigation-stack';
import Favorite from '../../screen/Favorite';

const screen={
    Favorite: {
        screen: Favorite,
        navigationOptions: {
            headerShown: false,
        }
    }
}

export default createStackNavigator(screen);
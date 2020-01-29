import { createStackNavigator } from 'react-navigation-stack';
import Home from '../../screen/Home';

const screen={
    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false,
        }
    }
}

export default createStackNavigator(screen);
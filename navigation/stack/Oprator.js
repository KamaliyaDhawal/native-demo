import { createStackNavigator } from 'react-navigation-stack';
import Oprator from '../../screen/Oprator';

const screen={
    Oprator: {
        screen: Oprator,
        navigationOptions: {
            headerShown: false,
        }
    }
}

export default createStackNavigator(screen);
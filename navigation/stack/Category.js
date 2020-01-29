import { createStackNavigator } from 'react-navigation-stack';
import Category from '../../screen/Category';

const screen={
    Category: {
        screen: Category,
        navigationOptions: {
            headerShown: false,
        }
    }
}

export default createStackNavigator(screen);
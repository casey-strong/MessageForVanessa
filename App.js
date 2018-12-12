import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import FirstScreen from './app/screens/firstScreen'


const AppNavigator = createStackNavigator({
  First: {screen: FirstScreen}
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

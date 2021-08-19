import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ScanScreen from './Screens/ScanScreen';

export default class App extends React.Component{
  render(){
    return(
        <AppContainer />

    )
  }
}

const tabNavigator = createBottomTabNavigator ({

ScanScreen: {screen: ScanScreen}
  
})

const AppContainer = createAppContainer (tabNavigator)
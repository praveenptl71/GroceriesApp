/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import 'react-native-gesture-handler';
 import React, { Component } from 'react';
 import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './src/navigation/StackNavigator';
import { StatusBar } from 'react-native';

 export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide()
  }

  render(){
    return (
      <NavigationContainer>
        <StatusBar animated={true} backgroundColor='#FFFFFF' barStyle='dark-content' />
        <MainStackNavigator />
      </NavigationContainer>
    )
  }
}
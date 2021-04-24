import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import {Shop} from "../screens/shop";
// import {Account} from "../screens/account";
import { Welcome } from "../screens/welcome";
import { SignUp } from "../screens/signup";
import { Login } from "../screens/login";
import { GetStarted } from "../screens/getStarted";
import BottomTabNavigator from './TabNavigator'

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
  };

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="welcome">
      <Stack.Screen options={{headerShown:false}} name="welcome" component={Welcome} />
      <Stack.Screen options={{headerShown:false}} name="get-started" component={GetStarted} />
      <Stack.Screen options={{headerShown:false}} name="signup" component={SignUp} />
      <Stack.Screen options={{headerShown:false}} name="login" component={Login} />
      <Stack.Screen options={{headerShown:false}} name="homeTab" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

// const ContactStackNavigator = () => {
//     return (
//       <Stack.Navigator screenOptions={screenOptionStyle}>
//         <Stack.Screen name="Contact" component={Contact} />
//       </Stack.Navigator>
//     );
//   }

export { MainStackNavigator };
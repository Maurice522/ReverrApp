import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';
import UserSelectcreen from '../Screens/UserSelectcreen';
import ForgotPassword from '../Screens/ForgotPasswordScreens/ForgotPassword';
import OtpScreen from '../Screens/ForgotPasswordScreens/OtpScreen';
import ResetPassword from '../Screens/ForgotPasswordScreens/ResetPassword';
import emailVerify from '../Screens/emailVerify';
import AppNav from './AppNav';

const StackNavigation = createNativeStackNavigator();

const StackNav = () => {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator>
        <StackNavigation.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <StackNavigation.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <StackNavigation.Screen
          name="UserType"
          component={UserSelectcreen}
          options={{headerShown: false}}
        />
        <StackNavigation.Screen
          name="Signup"
          component={SignupScreen}
          options={{headerShown: false}}
        />
        <StackNavigation.Screen
          name="Forgotp"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <StackNavigation.Screen
          name="Otp"
          component={OtpScreen}
          options={{headerShown: false}}
        />
        <StackNavigation.Screen
          name="emailVerify"
          component={emailVerify}
          options={{headerShown: false}}
        />
        <StackNavigation.Screen
          name="Reset"
          component={ResetPassword}
          options={{headerShown: false}}
        />
        <StackNavigation.Screen
          name="home"
          component={AppNav}
          options={{headerShown: false}}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;

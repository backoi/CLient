import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailScreen, ForgetPassScreen, LoginScreen, OnBoardingScreen, OTPScreen, ResetPassScreen, SignUpScreen, WelcomeScreen } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from '../assets/types/NavigationType';
const Stack = createNativeStackNavigator<RootStackParamList>();
const AuthNavigator = () => {
  return (
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="OnBoarding" component={OnBoardingScreen} /> 
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Forget" component={ForgetPassScreen} />
        <Stack.Screen name="Otp" component={OTPScreen} />
        <Stack.Screen name="ResetPass" component={ResetPassScreen} />
        

      </Stack.Navigator>
  )
}

export default AuthNavigator
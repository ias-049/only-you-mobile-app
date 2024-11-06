import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AuthStackParamList } from './interface';
import { RegisterScreen } from '../screens/Register';
import { VerifyOTPScreen } from '../screens/VerifyOTP';
import { LoginScreen } from '../screens/Login';
import { OnboardingScreen } from '../screens/Onboarding';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="VerifyOTP" component={VerifyOTPScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;

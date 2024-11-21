import {createNativeStackNavigator} from '@react-navigation/native-stack';;
import React from 'react';
import { AuthStackParamList } from './interface';
import { RegisterScreen } from '../screens/Register';
import { VerifyOTPScreen } from '../screens/VerifyOTP';
import { LoginScreen } from '../screens/Login';
import { OnboardingScreen } from '../screens/Onboarding';
import BottomTabStack from './BottomTabStack';
import DashStack from './DashStack';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      animation: 'slide_from_right',
      animationTypeForReplace: 'push',
      animationDuration: 200,
    }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{}} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="VerifyOTP" component={VerifyOTPScreen} />
      <Stack.Screen name="Tab" component={DashStack} />
    </Stack.Navigator>
  );
};

export default AuthStack;

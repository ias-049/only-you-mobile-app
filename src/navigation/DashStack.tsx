import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { DashStackParamList } from './interface';
import BottomTabStack from './BottomTabStack';
import { UserProfileScreen } from '../screens/UserProfile';

interface DashProps { }

const Stack = createStackNavigator<DashStackParamList>();

const DashStack: React.FC<DashProps> = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tab" component={BottomTabStack} />
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
    </Stack.Navigator>
  );
};

export default DashStack;

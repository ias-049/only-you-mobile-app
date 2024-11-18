import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { DashStackParamList } from './interface';
import BottomTabStack from './BottomTabStack';
import { UserProfileScreen } from '../screens/UserProfile';
import { ConnectionsScreen } from '../screens/Connections';

interface DashProps { }

const Stack = createStackNavigator<DashStackParamList>();

const DashStack: React.FC<DashProps> = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tab" component={BottomTabStack} />
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      <Stack.Screen name="Connections" component={ConnectionsScreen} />
    </Stack.Navigator>
  );
};

export default DashStack;

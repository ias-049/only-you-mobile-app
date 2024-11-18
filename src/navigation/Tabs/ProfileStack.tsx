import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { MenuScreen } from '../../screens/Menu';
import { ProfileScreen } from '../../screens/Profile';
import { ProfileDetailScreen } from '../../screens/ProfileDetail';

interface ProfileStackProps { }

const Stack = createStackNavigator();

const ProfileStack: React.FC<ProfileStackProps> = props => {
  const { } = props;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="MenuScreen" component={MenuScreen} />
      <Stack.Screen name="ProfileDetailScreen" component={ProfileDetailScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;

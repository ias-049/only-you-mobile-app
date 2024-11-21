import {createNativeStackNavigator} from '@react-navigation/native-stack';;
import React from 'react';
import { HomeScreen } from '../../screens/Home';
import { SearchScreen } from '../../screens/Search';
import { FavouritesScreen } from '../../screens/Favourites';
import { NotificationScreen } from '../../screens/Notifications';

interface HomeStackProps { }

const Stack = createNativeStackNavigator();

export const HomeStack: React.FC<HomeStackProps> = props => {
  const { } = props;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="FavouritesScreen" component={FavouritesScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
    </Stack.Navigator>
  );
};

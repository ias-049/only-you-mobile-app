import {createNativeStackNavigator} from '@react-navigation/native-stack';;
import React from 'react';
import { AddContentScreen } from '../../screens/AddContent';

interface OrderStackProps { }

const Stack = createNativeStackNavigator();

const AddContentStack: React.FC<OrderStackProps> = props => {
  const { } = props;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AddContentScreen" component={AddContentScreen} />
    </Stack.Navigator>
  );
};

export default AddContentStack;

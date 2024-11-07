import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AddContentScreen } from '../../screens/AddContent';

interface OrderStackProps { }

const Stack = createStackNavigator();

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

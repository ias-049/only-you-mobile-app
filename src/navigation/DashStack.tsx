import { createNativeStackNavigator } from '@react-navigation/native-stack';;
import React from 'react';
import { DashStackParamList } from './interface';
import BottomTabStack from './BottomTabStack';
import { UserProfileScreen } from '../screens/UserProfile';
import { ConnectionsScreen } from '../screens/Connections';
import { SubscriptionsScreen } from '../screens/Subscriptions';
import { PaymentScreen } from '../screens/Payment';
import { ChatScreen } from '../screens/Chats';
import { InboxScreen } from '../screens/Inbox';

interface DashProps { }

const Stack = createNativeStackNavigator<DashStackParamList>();

const DashStack: React.FC<DashProps> = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tab" component={BottomTabStack} />
      <Stack.Screen name="Inbox" component={InboxScreen} />
      <Stack.Screen name="Chats" component={ChatScreen} />
      <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      <Stack.Screen name="Connections" component={ConnectionsScreen} />
      <Stack.Screen name="SubscriptionScreen" component={SubscriptionsScreen} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
    </Stack.Navigator>
  );
};

export default DashStack;

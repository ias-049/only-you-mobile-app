/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { TextSmall } from '../components/common/Texts';
import { COLORS } from '../utils/theme';
import { TabList, TabStackParamList } from './interface';
import AddContentStack from './Tabs/AddContentStack';
import { HomeStack } from './Tabs/HomeStack';
import ProfileStack from './Tabs/ProfileStack';
import HomeSVG from '../assets/images/home.svg'
import AddContentSVG from '../assets/images/addcontent.svg'
import ProfileSVG from '../assets/images/profile.svg'
import { vs } from 'react-native-size-matters';
import { Platform, View } from 'react-native';

const Tab = createBottomTabNavigator<TabStackParamList>();

const TABS: TabList[] = [
  {
    id: 1,
    label: 'Home',
    icon: (props: any) => <HomeSVG {...props} />,
    component: HomeStack,
  },
  {
    id: 2,
    label: 'AddContent',
    icon: (props: any) => <AddContentSVG {...props} />,
    component: AddContentStack,
  },
  {
    id: 1,
    label: 'Profile',
    component: ProfileStack,
    icon: (props: any) => <ProfileSVG {...props} />,
  },
];

const BottomTabStack: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.primary,
          borderTopColor: '#DCDBCD',
          height: vs(60),
          paddingTop: Platform.select({ ios: vs(10) })
        },
      }}>
      {TABS.map(tab => (
        <Tab.Screen
          key={tab.id}
          name={tab.label}
          component={tab.component}
          options={{
            tabBarIcon: ({ focused, color, size }) =>
            (<View style={
              {
                shadowColor: COLORS.white,
                // shadowOpacity: 3,
                // shadowOffset: { height: 10, width: 1 },
                // elevation: 2,
                // shadowRadius: 3
              }
            }>
              {tab.icon({ color: focused ? COLORS.secondary : COLORS.white })}
            </View>),
            // tabBarLabel: ({ children, focused, position }) => (
            //   <TextSmall
            //     bold={focused}
            //     color={focused ? COLORS.primary : COLORS.grey}>
            //     {children}
            //   </TextSmall>
            // ),
            tabBarShowLabel: false
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabStack;

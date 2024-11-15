import { StackScreenProps } from '@react-navigation/stack';

export type AuthStackParamList = {
  Login: undefined;
  UserInfo: undefined;
  Register: undefined;
  SubmitDocument: undefined;
  Onboarding: undefined;
  VerifyOTP: undefined;
};

export type TabStackParamList = {
  Home: undefined
  AddContent: undefined
  Profile: undefined
};

export type DashStackParamList = {
  Tab: undefined
  UserProfile: undefined
};

export type DashStackProps<Screen extends keyof DashStackParamList> =
  StackScreenProps<DashStackParamList, Screen>;

export type AuthStackProps<Screen extends keyof AuthStackParamList> =
  StackScreenProps<AuthStackParamList, Screen>;

export type TabStackProps<Screen extends keyof TabStackParamList> =
  StackScreenProps<TabStackParamList, Screen>;

export interface TabList {
  id: number;
  label: "Home" | "AddContent" | "Profile";
  icon: any;
  component: React.FC<any>;
}

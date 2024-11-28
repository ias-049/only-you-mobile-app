import { NativeStackScreenProps } from "@react-navigation/native-stack";


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
  Chats: undefined
  Inbox: undefined
  UserProfile: undefined
  Connections: undefined
  SubscriptionScreen: undefined
  PaymentScreen: undefined
};

export type DashStackProps<Screen extends keyof DashStackParamList> =
  NativeStackScreenProps<DashStackParamList, Screen>;

export type AuthStackProps<Screen extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, Screen>;

export type TabStackProps<Screen extends keyof TabStackParamList> =
  NativeStackScreenProps<TabStackParamList, Screen>;

export interface TabList {
  id: number;
  label: "Home" | "AddContent" | "Profile";
  icon: any;
  component: React.FC<any>;
}

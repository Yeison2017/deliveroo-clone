import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
  Home: undefined;
  Restaurant: undefined;
  Basket: undefined;
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;

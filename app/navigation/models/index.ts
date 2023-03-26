import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IRestaurants } from "../../interfaces";

export type propsNavigationStack = {
  Home: undefined;
  Restaurant: IRestaurants;
  Basket: undefined;
  PreparingOrder: undefined;
  Delivery: undefined;
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;

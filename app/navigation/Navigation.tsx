import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BasketScreen, HomeScreen, RestaurantScreen } from "../screens";
import { propsNavigationStack } from "./models";

const Stack = createNativeStackNavigator<propsNavigationStack>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen
          name="Basket"
          component={BasketScreen}
          options={{ presentation: "modal", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

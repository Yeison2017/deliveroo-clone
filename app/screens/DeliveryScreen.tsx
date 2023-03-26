import { View, Text, TouchableOpacity, Image } from "react-native";
import { XMarkIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";

import { SafeAreaLayout } from "../components";
import { useAppSelector } from "../hooks";
import { useNavigationStack } from "../hooks/useNavigationStack";
import { selectRestaurant } from "../store";

const DeliveryScreen = () => {
  const { navigation } = useNavigationStack();
  const restaurant = useAppSelector(selectRestaurant);
  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaLayout className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-3xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              className="h-20 w-20"
            />
          </View>

          <Progress.Bar color="#00CCBB" indeterminate={true} />

          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.name} is being prepared
          </Text>
        </View>
      </SafeAreaLayout>
    </View>
  );
};

export default DeliveryScreen;

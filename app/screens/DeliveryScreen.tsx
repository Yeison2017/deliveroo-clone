import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { XMarkIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

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

      <MapView
        initialRegion={{
          latitude: restaurant.lat || 0,
          longitude: restaurant.long || 0,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat || 0,
            longitude: restaurant.long || 0,
          }}
          title={restaurant.short_description}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>

      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />

        <View className="flex-1">
          <Text className="text-lg">Sonny Sangha</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>

        <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;

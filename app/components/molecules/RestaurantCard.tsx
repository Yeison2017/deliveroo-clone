import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { urlFor } from "../../service/sanity";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export interface IRestaurantCard {
  id: string;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: Array<string> | null;
  long: number;
  lat: number;
}

const RestaurantCard = ({
  id = "",
  imgUrl = "",
  title = "",
  rating = 0,
  genre = "",
  address = "",
  short_description = "",
  dishes = [],
  long = 0,
  lat = 0,
}: IRestaurantCard) => {
  const navigation: NavigationProp<any> = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        } as IRestaurantCard)
      }
      className={"bg-white mr-3"}
    >
      {imgUrl && (
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className="h-36 w-64 rounded-sm"
        />
      )}

      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>

        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> · {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nearby · {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

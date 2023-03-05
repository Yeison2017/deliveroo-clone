import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { urlFor } from "../../service/sanity";
import { useNavigation } from "@react-navigation/native";
import { IRestaurants } from "../../interfaces";
import { propsStack } from "../../navigation/models";

const RestaurantCard = ({
  _id = "",
  name = "",
  short_description = "",
  image,
  lat = 0,
  long = 0,
  address = "",
  rating = 0,
  type = null,
  dishes = [],
}: IRestaurants) => {
  const navigation = useNavigation<propsStack>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Restaurant", {
          _id,
          name,
          short_description,
          image,
          lat,
          long,
          address,
          rating,
          type,
          dishes,
        })
      }
      className={"bg-white mr-3"}
    >
      {image && (
        <Image
          source={{
            uri: urlFor(image).url(),
          }}
          className="h-36 w-64 rounded-sm"
        />
      )}

      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{name}</Text>

        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> ·{" "}
            {type === null ? type : ""}
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

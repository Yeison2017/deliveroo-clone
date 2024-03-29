import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import type { RouteProp } from "@react-navigation/native";

import { urlFor } from "../service/sanity";
import { colors } from "../theme";
import { BasketIcon, DishRow } from "../components";
import { IDish } from "../interfaces";
import { propsNavigationStack, propsStack } from "../navigation/models";
import { useAppDispatch } from "../hooks/useStore";
import { setRestaurant } from "../store";

type RestaurantScreenRouteProp = RouteProp<propsNavigationStack, "Restaurant">;

const RestaurantScreen = () => {
  const navigation = useNavigation<propsStack>();
  const dispatch = useAppDispatch();

  const {
    params: {
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
    },
  } = useRoute<RestaurantScreenRouteProp>();

  useEffect(() => {
    dispatch(
      setRestaurant({
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
    );
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          {image && (
            <Image
              source={{
                uri: urlFor(image).url(),
              }}
              className="w-full h-56 bg-gray-300 p-4"
            />
          )}
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon size={20} color={colors.primary[500]} />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{name}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon size={22} color={colors.green[500]} opacity={0.5} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> ·{" "}
                  {type == null ? null : ""}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <MapPinIcon size={22} color="grey" opacity={0.4} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-gray-500">Nearby · {address}</Text>
                </Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>

          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy?
            </Text>
            <ChevronRightIcon color={colors.primary[500]} />
          </TouchableOpacity>
        </View>

        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

          {dishes.map((dish: IDish) => (
            <DishRow
              key={dish._id}
              _id={dish._id}
              name={dish.name}
              short_description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;

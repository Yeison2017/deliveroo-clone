import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { XCircleIcon } from "react-native-heroicons/solid";
import Currency from "react-currency-formatter";

import { useAppDispatch, useAppSelector } from "../hooks";
import {
  BasketState,
  removeFromBasket,
  selectBasketItems,
  selectRestaurant,
} from "../store";
import { IDish } from "../interfaces";
import { propsStack } from "../navigation/models";
import { colors } from "../theme";
import { urlFor } from "../service/sanity";
import { selectBasketTotal } from '../store/slices/basketSlice';

const BasketScreen = () => {
  const [groupedItemsInBasket, setGroupedItemsInBasket] =
    useState<Array<IDish[]>>();

  const insets = useSafeAreaInsets();
  const navigation = useNavigation<propsStack>();
  const restaurant = useAppSelector(selectRestaurant);
  const items = useAppSelector(selectBasketItems);
  const basketTotal = useAppSelector(selectBasketTotal);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results: any, item) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);
  }, [items]);
  return (
    <View style={{ marginTop: insets.top }} className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className={`p-5 border-b border-[#00ccbb] bg-white shadow-xl`}>
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">{restaurant.name}</Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon color={colors.primary[500]} height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-4 bg-white my-5">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver ion 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {groupedItemsInBasket &&
            Object.entries(groupedItemsInBasket).map(([key, items]) => (
              <View
                key={key}
                className="flex-row items-center space-x-3 bg-white py-2 px-5"
              >
                <Text className="text-[#00CCBB]">{items.length} x</Text>
                <Image
                  source={{ uri: urlFor(items[0]?.image).url() }}
                  className="h-12 w-12 rounded-full"
                />
                <Text className="flex-1">{items[0]?.name}</Text>
                <Text className="text-gray-600">
                  <Currency quantity={items[0]?.price} currency="GBP" />
                </Text>

                <TouchableOpacity>
                  <Text
                    className="text-[#00CCBB] text-xs"
                    onPress={() => dispatch(removeFromBasket({ _id: key }))}
                  >
                    Remove
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              <Currency quantity={basketTotal} currency="GBP" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">
              <Currency quantity={5.99} currency="GBP" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text>Order Total</Text>
            <Text className="font-extrabold">
              <Currency quantity={basketTotal + 5.99} currency="GBP" />
            </Text>
          </View>

          <TouchableOpacity 
            onPress={() => navigation.navigate('PreparingOrder')}
            className="rounded-lg bg-[#00CCBB] p-4">
            <Text className="text-center text-white text-lg font-bold">
              Place Order
            </Text>
            
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BasketScreen;

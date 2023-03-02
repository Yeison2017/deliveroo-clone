import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";

import { useSelector } from "react-redux";
import { useAppSelector } from "../../hooks";
import { propsStack } from "../../navigation/models";
import {
  selectBasketItems,
  selectBasketTotal,
} from "../../store/slices/basketSlice";

const BasketIcon = () => {
  const items = useAppSelector(selectBasketItems);
  const navigation = useNavigation<propsStack>();
  const basketTotal = useSelector(selectBasketTotal);

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1"
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={basketTotal} currency="GBP" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;

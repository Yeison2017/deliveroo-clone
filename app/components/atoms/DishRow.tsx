import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import Currency from "react-currency-formatter";
import { urlFor } from "../../service/sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { colors } from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../../store/slices/basketSlice";
import { IDish } from "../../interfaces";

import { useAppSelector, useAppDispatch } from "../../hooks";

const DishRow = ({ id, name, description, price, image }: IDish) => {
  const [isPressed, setIsPressed] = useState(false);
  // const items = useSelector(selectBasketItems);
  // const items = useAppSelector((state) => state.basket.items);
  const items = useAppSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useAppDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
              <Currency quantity={price} currency="GBP" />
            </Text>
          </View>

          <View>
            {image && (
              <Image
                style={{
                  borderWidth: 1,
                  borderColor: "#F3F3F4",
                }}
                source={{ uri: urlFor(image).url() }}
                className="h-20 w-20 bg-gray-300 p-4"
              />
            )}
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity>
              <MinusCircleIcon color={colors.primary[600]} size={40} />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon color={colors.primary[600]} size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;

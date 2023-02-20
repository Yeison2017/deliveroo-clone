import React from "react";
import { View, TextInput } from "react-native";
import {
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { colors } from "../../theme";

const Search = () => {
  return (
    <View className="flex-row items-center space-x-2 pb-2 mx-4">
      <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
        <MagnifyingGlassIcon color={colors.grey[500]} size={20} />
        <TextInput
          placeholder="Restaurants and cuisines"
          keyboardType="default"
        />
      </View>
      <AdjustmentsVerticalIcon color={colors.primary[500]} />
    </View>
  );
};

export default Search;

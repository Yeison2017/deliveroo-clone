import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import {
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { IColors } from "../../interfaces";
import { colors } from "../../theme";

const styles = (colors?: IColors) =>
  StyleSheet.create({
    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingBottom: 4,
      marginHorizontal: 8,
      paddingHorizontal: 8,
    },
    searchInput: {
      flexDirection: "row",
      flex: 1,
      backgroundColor: colors?.grey[50],
      paddingVertical: 6,
      paddingHorizontal: 12,
      alignItems: "center",
      marginRight: 4,
      marginBottom: 8,
    },
  });

const Search = () => {
  return (
    <View style={styles().searchContainer}>
      <View style={styles(colors).searchInput}>
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

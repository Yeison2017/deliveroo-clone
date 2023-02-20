import { View, Text, Image, StyleSheet } from "react-native";
import { UserIcon, ChevronDownIcon } from "react-native-heroicons/outline";

import { colors } from "../../theme/stylesGlobal";
import { IColors } from "../../interfaces";

const styles = (colors?: IColors) =>
  StyleSheet.create({
    headerContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "white",
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    image: {
      height: 36,
      width: 36,
      backgroundColor: colors?.grey[100],
      borderRadius: 50,
    },
    textContainer: {
      flex: 1,
      marginLeft: 8,
    },
    deliverNowText: {
      fontWeight: "bold",
      color: colors?.grey[300],

      fontSize: 10,
    },
    containerTitle: {
      flexDirection: "row",
      alignItems: "center",
    },
    locationText: {
      fontWeight: "bold",
      fontSize: 20,
      marginRight: 4,
    },
  });

const Header = () => {
  return (
    // <View style={styles().headerContainer}>
    <View className="flex-row pb-3 items-center mx-4 space-x-2">
      <Image
        source={{
          uri: "http://links.papareact.com/wru",
        }}
        // style={styles(colors).image}
        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
      />

      <View
        // style={styles().textContainer}
        className="flex-1"
      >
        <Text
          // style={styles(colors).deliverNowText}
          className="font-bold text-gray-400 text-xs"
        >
          Deliver Now!
        </Text>
        <Text
          // style={styles().locationText}
          className="font-bold text-xl"
        >
          Current Location
          <ChevronDownIcon size={20} color={colors.primary[500]} />
        </Text>

        {/* <View style={styles().containerTitle}>
          <Text
            // style={styles().locationText}
            className="font-bold text-xl"
          >
            Current Location
          </Text>
          <ChevronDownIcon size={20} color={colors.primary[500]} />
        </View> */}
      </View>

      <UserIcon size={30} color={colors.primary[500]} />
    </View>
  );
};

export default Header;

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
    <View style={styles().headerContainer}>
      <Image
        source={{
          uri: "http://links.papareact.com/wru",
        }}
        style={styles(colors).image}
      />

      <View style={styles().textContainer}>
        <Text style={styles(colors).deliverNowText}>Deliver Now!</Text>
        <View style={styles().containerTitle}>
          <Text style={styles().locationText}>Current Location</Text>
          <ChevronDownIcon size={20} color={colors.primary[500]} />
        </View>
      </View>

      <UserIcon size={30} color={colors.primary[500]} />
    </View>
  );
};

export default Header;

import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { StarIcon } from "react-native-heroicons/solid";
import {
  ArrowLeftOnRectangleIcon,
  MapPinIcon,
} from "react-native-heroicons/outline";
import { colors, text } from "../../theme";
import { IColors } from "../../interfaces";

interface IRestaurantCard {
  id: number;
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
}: IRestaurantCard) => {
  return (
    <TouchableOpacity style={styles().container}>
      <Image
        source={{
          uri: imgUrl,
        }}
        style={styles().image}
      />
      <View style={styles().containerTitle}>
        <Text style={styles().title}>{title}</Text>

        <View style={styles().containerStar}>
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text style={styles(colors).containerRating}>
            <Text style={styles(colors).rating}>{rating}</Text> · {genre}
          </Text>
        </View>

        <View style={styles().containerAddress}>
          <MapPinIcon color={colors.grey[500]} opacity={0.4} size={22} />
          <Text style={styles(colors).address}>Nearby · {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = (colors?: IColors) =>
  StyleSheet.create({
    container: {
      backgroundColor: "white",
      marginRight: 6,
    },
    image: {
      height: 200,
      width: 260,
      borderRadius: 2,
    },
    containerTitle: {
      paddingHorizontal: 6,
      paddingBottom: 8,
    },
    title: {
      fontWeight: "bold",
      fontSize: text.lg,
      paddingTop: 4,
    },
    containerStar: {
      flexDirection: "row",
      alignItems: "center",
    },
    containerRating: {
      fontSize: text.xs,
      color: colors?.grey[500],
    },
    rating: {
      color: colors?.green[400],
    },
    containerAddress: {
      flexDirection: "row",
      alignItems: "center",
    },
    address: {
      fontSize: text.xs,
      color: colors?.grey[500],
    },
  });

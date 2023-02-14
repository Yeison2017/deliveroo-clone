import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import {
  ParamListBase,
  useRoute,
  useNavigation,
} from "@react-navigation/native";
import { IRestaurantCard } from "../components/molecules/RestaurantCard";
import { IColors } from "../interfaces";
import { urlFor } from "../service/sanity";
import { colors } from "../theme";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

const RestaurantScreen = () => {
  const navigation = useNavigation();

  const {
    params: {
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
    },
  } = useRoute<any>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      <View style={styles().containerImage}>
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          style={styles(colors).image}
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          style={styles(colors).iconBack}
        >
          <ArrowLeftIcon size={20} color={colors.primary[500]} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;

const styles = (colors?: IColors) =>
  StyleSheet.create({
    containerImage: {
      position: "relative",
    },
    image: {
      width: "100%",
      height: 260,
      backgroundColor: colors?.grey[300],
      padding: 8,
    },
    iconBack: {
      position: "absolute",
      top: 28,
      left: 10,
      padding: 12,
      backgroundColor: colors?.grey[50],
      borderRadius: 50,
    },
  });

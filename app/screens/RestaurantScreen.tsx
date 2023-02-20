import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ParamListBase,
  useRoute,
  useNavigation,
} from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";

import { IRestaurantCard } from "../components/molecules/RestaurantCard";
import { IColors } from "../interfaces";
import { urlFor } from "../service/sanity";
import { colors, text } from "../theme";
import { DishRow } from "../components";

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
      <View className="relative">
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          // style={styles(colors).image}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          // style={styles(colors).iconBack}
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
        >
          <ArrowLeftIcon size={20} color={colors.primary[500]} />
        </TouchableOpacity>
      </View>

      <View
        // style={styles().containerTitle}
        className="bg-white"
      >
        <View className="px-4 pt-4">
          <Text
            // style={styles().title}
            className="text-3xl font-bold"
          >
            {title}
          </Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
              <StarIcon size={22} color={colors.green[500]} opacity={0.5} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text> · {genre}
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

      <View>
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

        {dishes.map((dish: any) => (
          <DishRow
            key={dishes._id}
            id={dish._id}
            name={dish.name}
            description={dish.short_description}
            price={dish.price}
            image={dish.image}
          />
        ))}
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
    containerTitle: {
      backgroundColor: "white",
    },
    title: {
      fontSize: text.xl3,
      fontWeight: "bold",
    },
    safeAreaView: {
      marginTop: StatusBar.currentHeight,
    },
  });

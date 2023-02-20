import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { colors, text } from "../../theme";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "../molecules/RestaurantCard";
import sanityClient from "../../service/sanity";
import { IRestaurants } from "../../interfaces";

interface IFeatureRow {
  id: string;
  title: string;
  description: string;
}

const FeaturedRow = ({ id, title, description }: IFeatureRow) => {
  const [restaurants, setRestaurants] = useState<IRestaurants[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "featured" && _id == $id] {
          ...,
          restaurants[]->{
            ...,
            dishes[]->,
            type-> {
              name
            }
          },
        }[0]
      `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, [id]);

  return (
    <View>
      <View
        // style={styles.containerTitle}
        className="mt-4 flex-row items-center justify-between px-4"
      >
        <Text
          // style={styles.title}
          className="font-bold text-lg"
        >
          {title}
        </Text>
        <ArrowRightIcon color={colors.primary[500]} />
      </View>

      <Text
        // style={styles.subtitle}
        className="text-xs text-gray-500 px-4"
      >
        {description}
      </Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        // style={styles.body}
        className="pt-4"
      >
        {restaurants &&
          restaurants?.map((restaurant: IRestaurants) => (
            <RestaurantCard
              key={restaurant._id}
              id={restaurant._id}
              imgUrl={restaurant?.image?.asset?._ref}
              title={restaurant.name}
              dishes={restaurant.dishes}
              rating={restaurant.rating}
              address={restaurant.address}
              short_description={restaurant.short_description}
              genre={restaurant.type?.name}
              long={restaurant.long}
              lat={restaurant.lat}
            />
          ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({
  containerTitle: {
    flexDirection: "row",
    marginTop: 8,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: text.xl,
  },
  subtitle: {
    fontSize: text.xs,
    color: colors.grey[500],
    paddingHorizontal: 16,
  },
  body: {
    paddingTop: 8,
  },
});

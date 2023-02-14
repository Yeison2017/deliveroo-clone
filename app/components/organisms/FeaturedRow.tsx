import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { colors, text } from "../../theme";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "../molecules/RestaurantCard";

interface IFeatureRow {
  title: string;
  description: string;
}

const FeaturedRow = ({ title, description }: IFeatureRow) => {
  return (
    <View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{title}</Text>
        <ArrowRightIcon color={colors.primary[500]} />
      </View>

      <Text style={styles.subtitle}>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        style={styles.body}
      >
        <RestaurantCard
          id={123}
          imgUrl="https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/e949ef01-344c-492e-979d-5d7d31e7c871"
          title="Yo! Suchi"
          rating={4.5}
          genre="Japonese"
          address="123 Min St"
          short_description="This is a Test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/840fa59e-2b43-4ed0-8ebe-ba5f12b44a79"
          title="Yo! Suchi"
          rating={4.5}
          genre="Japonese"
          address="123 Min St"
          short_description="This is a Test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/59aa054d-e933-4fee-907b-d7a895d6bf90"
          title="Yo! Suchi"
          rating={4.5}
          genre="Japonese"
          address="123 Min St"
          short_description="This is a Test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/ed7ec87c-d4a6-4441-831d-689a075c8093"
          title="Yo! Suchi"
          rating={4.5}
          genre="Japonese"
          address="123 Min St"
          short_description="This is a Test description"
          dishes={[]}
          long={20}
          lat={0}
        />
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
    paddingHorizontal: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: text.xl,
  },
  subtitle: {
    fontSize: text.xs,
    color: colors.grey[500],
    paddingHorizontal: 8,
  },
  body: {
    paddingTop: 8,
  },
});

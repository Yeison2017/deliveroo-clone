import { StyleSheet, ScrollView, StatusBar } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import sanityClient from "../service/sanity";

import { IFeatured } from "../interfaces";
import { FeaturedRow, HeaderHome } from "../components";
import Categories from "../components/organisms/Categories";

const styles = StyleSheet.create({
  // safeAreaView: {
  //   paddingTop: 50,
  //   paddingBottom: 8,
  //   backgroundColor: "white",
  //   flex: 1,
  // },
  safeAreaView: {
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "#f2f2f2",
  },
});

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState<IFeatured[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured"]{
        ...,
        restaurants[]->{
          ...,
          dished[]->
        }
      }
    `
      )
      .then((data: any) => setFeaturedCategories(data));
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <HeaderHome />

      <ScrollView
        // style={styles.scrollView}
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Categories />

        {featuredCategories.map((category: IFeatured) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

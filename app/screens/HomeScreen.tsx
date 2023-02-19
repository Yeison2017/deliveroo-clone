import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import sanityClient from "../service/sanity";

import { IFeatured } from "../interfaces";
import { FeaturedRow, Header, HeaderHome } from "../components";
import Categories from "../components/organisms/Categories";
import Search from "../components/molecules/Search";

const styles = StyleSheet.create({
  safeAreaView: {
    paddingTop: 50,
    paddingBottom: 8,
    backgroundColor: "white",
    flex: 1,
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
    <SafeAreaView style={styles.safeAreaView}>
      <HeaderHome />

      <ScrollView
        style={styles.scrollView}
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

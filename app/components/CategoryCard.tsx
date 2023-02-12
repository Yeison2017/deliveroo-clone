import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";

interface ICategoryCard {
  imgUrl: string;
  title: string;
}

const CategoryCard = ({ imgUrl, title }: ICategoryCard) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{
          uri: imgUrl,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginRight: 4,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 4,
  },
  title: {
    position: "absolute",
    bottom: 2,
    left: 2,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

interface ICategoryCard {
  imgUrl: string;
  title: string;
}

const CategoryCard = ({ imgUrl, title }: ICategoryCard) => {
  return (
    <TouchableOpacity
      // style={styles.container}
      className="relative mr-2"
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        // style={styles.image}
        className="h-20 w-20 rounded"
      />
      <Text
        // style={styles.title}
        className="absolute bottom-1 left-1 text-white font-bold"
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginRight: 8,
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

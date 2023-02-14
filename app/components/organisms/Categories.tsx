import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "../molecules/CategoryCard";
import sanityClient, { urlFor } from "../../service/sanity";
import { ICategory } from "../../interfaces";

const Categories = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "category"]
      `
      )
      .then((category: ICategory[]) => setCategories(category));
  }, []);
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category: ICategory) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;

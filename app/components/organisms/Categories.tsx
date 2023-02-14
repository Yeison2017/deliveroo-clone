import { ScrollView } from "react-native";
import React from "react";
import CategoryCard from "../molecules/CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        imgUrl="https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/bff9ae07-ef1c-4f34-b5d5-24c6d876a2ce"
        title="Testing 1"
      />
      <CategoryCard
        imgUrl="https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/e0cef320-08d9-4da6-abc2-47916befd9ea"
        title="Testing 2"
      />
      <CategoryCard
        imgUrl="https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/b5133b21-c457-44f6-b5d3-fba6fcd90f4a"
        title="Testing 3"
      />
      <CategoryCard
        imgUrl="https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/5214a9ff-e1cb-4b72-b654-85c66bb7c28f"
        title="Testing 3"
      />
      <CategoryCard
        imgUrl="https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/40e670f2-bc3b-48c4-962b-1cf7c9293fdb"
        title="Testing 3"
      />
      <CategoryCard
        imgUrl="https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/473d96f3-2931-4905-b490-9725775beba3"
        title="Testing 3"
      />
      <CategoryCard
        imgUrl="https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/ae7a7dd3-c052-4663-a72d-ca5a4febd48a"
        title="Testing 3"
      />
      <CategoryCard
        imgUrl="https://lexica-serve-encoded-images2.sharif.workers.dev/full_jpg/3c70023f-bcde-4e15-9830-002c62ec617c"
        title="Testing 3"
      />
    </ScrollView>
  );
};

export default Categories;

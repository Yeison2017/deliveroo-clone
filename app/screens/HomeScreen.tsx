// import {
//   View,
//   Text,
//   SafeAreaView,
//   Image,
//   TextInput,
//   ScrollView,
//   StyleSheet,
// } from "react-native";
// import React, { useLayoutEffect } from "react";
// import { useNavigation } from "@react-navigation/native";
// import {
//   UserIcon,
//   ChevronDownIcon,
//   MagnifyingGlassCircleIcon,
//   AdjustmentsVerticalIcon,
// } from "react-native-heroicons/outline";
// import Categories from "../components/Categories";

// const HomeScreen = () => {
//   const navigation = useNavigation();

//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerShown: false,
//     });
//   }, []);

//   return (
//     <SafeAreaView className="pt-10 bg-white">
//       <Text>
//         <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
//           <Image
//             source={{
//               uri: "http://links.papareact.com/wru",
//             }}
//             className="h-7 w-7 bg-gray-300 p-4 rounded-full"
//           />

//           <View className="flex-1">
//             <Text className="font-bold text-gray-400 text-xs">
//               Deliver Now!
//             </Text>
//             <Text className="font-bold text-xl">
//               Current Location
//               <ChevronDownIcon size={20} color="#00CCBB" />
//             </Text>
//           </View>

//           <UserIcon size={35} color="#00CCBB" />
//         </View>

//         <View className="fle-row items-center space-x-2 pb-2 mx-4 px-4">
//           <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
//             <MagnifyingGlassCircleIcon color="gray" size={20} />
//             <TextInput
//               placeholder="Restaurants and cuisines"
//               keyboardType="default"
//             />
//           </View>
//           <AdjustmentsVerticalIcon color="#00CCBB" />
//         </View>

//         <ScrollView className="bg-gray-100">
//           <Categories />
//         </ScrollView>
//       </Text>
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;

import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassCircleIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.headerContainer}>
        <Image
          source={{
            uri: "http://links.papareact.com/wru",
          }}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.deliverNowText}>Deliver Now!</Text>
          <Text style={styles.locationText}>
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInput}>
          <MagnifyingGlassCircleIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    paddingTop: 30,
    backgroundColor: "white",
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    paddingBottom: 3,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 4,
  },
  image: {
    height: 38,
    width: 38,
    backgroundColor: "#ddd",
    padding: 4,
    borderRadius: 50,
  },
  textContainer: {
    flex: 1,
  },
  deliverNowText: {
    fontWeight: "bold",
    color: "#999",
    fontSize: 10,
  },
  locationText: {
    fontWeight: "bold",
    fontSize: 24,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 4,
    marginHorizontal: 8,
    paddingHorizontal: 8,
  },
  searchInput: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#ddd",
    padding: 6,
  },
  scrollView: {
    backgroundColor: "#f2f2f2",
  },
});

export default HomeScreen;

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
import { Header } from "../components";
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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header />
      <Search />

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

export default HomeScreen;

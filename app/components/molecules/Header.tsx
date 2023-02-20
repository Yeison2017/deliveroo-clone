import { View, Text, Image } from "react-native";
import { UserIcon, ChevronDownIcon } from "react-native-heroicons/outline";

import { colors } from "../../theme/stylesGlobal";

const Header = () => {
  return (
    <View className="flex-row pb-3 items-center mx-4 space-x-2">
      <Image
        source={{
          uri: "http://links.papareact.com/wru",
        }}
        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
      />

      <View className="flex-1">
        <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
        <Text className="font-bold text-xl">
          Current Location
          <ChevronDownIcon size={20} color={colors.primary[500]} />
        </Text>
      </View>

      <UserIcon size={30} color={colors.primary[500]} />
    </View>
  );
};

export default Header;

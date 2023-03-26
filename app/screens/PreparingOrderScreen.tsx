import { View } from "react-native";
import { useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";

import { useNavigationStack } from "../hooks/useNavigationStack";

const PreparingOrderScreen = () => {
  const insets = useSafeAreaInsets();
  const { navigation } = useNavigationStack();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  return (
    <View
      style={{ marginTop: insets.top }}
      className=" bg-[#00CCBB] flex-1 justify-center items-center"
    >
      <Animatable.Image
        source={require("../assets/orderLoading.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white" />
    </View>
  );
};

export default PreparingOrderScreen;

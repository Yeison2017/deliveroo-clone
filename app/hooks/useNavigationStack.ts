import { useNavigation } from "@react-navigation/native";

import { propsStack } from "../navigation/models";

export const useNavigationStack = () => {
  const navigation = useNavigation<propsStack>();
  return {
    navigation,
  };
};

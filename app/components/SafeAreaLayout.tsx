import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface SafeAreaLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const SafeAreaLayout = ({ children, className }: SafeAreaLayoutProps) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ marginTop: insets.top }} className={className}>
      {children}
    </View>
  );
};

export default SafeAreaLayout;

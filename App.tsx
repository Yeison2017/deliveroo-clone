import Navigation from "./app/navigation/Navigation";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;

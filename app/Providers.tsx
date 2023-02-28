import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./store";

interface ProviderProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <Provider store={store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        {children}
      </SafeAreaProvider>
    </Provider>
  );
};

export default Providers;

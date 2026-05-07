import { Text } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>APP</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;

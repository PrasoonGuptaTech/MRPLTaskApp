import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native'
import Navigation from './source/navigation/Navigation';

function App() {

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;

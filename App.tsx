import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './source/navigation/Navigation';
import { Provider } from 'react-redux';
import { store } from './source/redux/store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

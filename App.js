import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';



import { ReduxProvider } from './src/redux';
import AppRouter from './src/routes/AppRouter';
import { navigationRef } from './src/routes/RootNavigation';

// import { navigationRef } from';



export default function App() {
  return (
    <ReduxProvider>
      <NavigationContainer ref={navigationRef}>
        <AppRouter />
      </NavigationContainer>
    </ReduxProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

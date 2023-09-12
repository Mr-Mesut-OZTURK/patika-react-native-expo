import '@src/src/config/firebaseConfig'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';



import { ReduxProvider } from './src/redux';
import AppRouter from './src/routes/AppRouter';
import { navigationRef } from './src/routes/RootNavigation';




export default function App() {
  return (
    <ReduxProvider>
      <NavigationContainer ref={navigationRef}>
        <AppRouter />
      </NavigationContainer>
      <Toast
        position='bottom'
      />
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

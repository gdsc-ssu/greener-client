import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import BottomTabNavigator from './BottomTabNavigator';

export default function AppStack() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <SafeAreaView style={{ flex: 1 }}>
          <BottomTabNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

import LoginModal from '@/screens/common/LoginModal';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTabNavigator from './BottomTabNavigator';

const RootStack = createStackNavigator();

export default function AppStack() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen name="BottomTab" component={BottomTabNavigator} />
          <RootStack.Group
            screenOptions={{
              presentation: 'modal',
              cardStyle: { backgroundColor: 'transparent', opacity: 0.99 },
            }}
          >
            <RootStack.Screen name="LoginModal" component={LoginModal} />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

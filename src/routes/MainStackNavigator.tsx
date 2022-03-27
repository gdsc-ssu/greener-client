import { NAVIGATOR_NAME, SCREEN_NAME } from '@/constants/routeNames';
import SettingsPage from '@/screens/common/SettingsPage';
import MainPage from '@/screens/main/MainPage';
import { createStackNavigator } from '@react-navigation/stack';
import QnaStack from './QnaStackNavigator';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAME.MainPage}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={SCREEN_NAME.MainPage} component={MainPage} />
      <Stack.Screen name={SCREEN_NAME.SettingsPage} component={SettingsPage} />
      <Stack.Screen name={NAVIGATOR_NAME.QnaStack} component={QnaStack} />
    </Stack.Navigator>
  );
}

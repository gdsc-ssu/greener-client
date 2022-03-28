import { SCREEN_NAME } from '@/constants/routeNames';
import SettingsPage from '@/screens/common/SettingsPage';
import GratitudeJournalPage from '@/screens/diary/GratitudeJournalPage';
import DiaryPage from '@/screens/main/DiaryPage';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function DiaryStack() {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAME.DiaryPage}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={SCREEN_NAME.DiaryPage} component={DiaryPage} />
      <Stack.Screen name={SCREEN_NAME.SettingsPage} component={SettingsPage} />
      <Stack.Screen
        name={SCREEN_NAME.GratitudeJournalPage}
        component={GratitudeJournalPage}
      />
    </Stack.Navigator>
  );
}

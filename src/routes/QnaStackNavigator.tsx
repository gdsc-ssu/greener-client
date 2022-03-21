import { SCREEN_NAME } from '@/constants/routeNames';
import QnaPage from '@/screens/qna/QnaPage';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function QnaStack() {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAME.QnaPage}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={SCREEN_NAME.QnaPage} component={QnaPage} />
    </Stack.Navigator>
  );
}

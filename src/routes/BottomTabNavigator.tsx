import BottomTab from '@/components/common/molecules/BottomTab';
import { TAB_NAME } from '@/constants/routeNames';
import MapPage from '@/screens/main/MapPage';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import DiaryStack from './DiaryStackNavigator';
import MainStack from './MainStackNavigator';

function TabBar({ state, navigation }: BottomTabBarProps) {
  const newRoutes: Array<{ name: string; onPress?: () => void }> = [];
  state.routes.forEach((route, index) => {
    newRoutes.push({
      name: route.name,
      onPress: () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (index !== state.index && !event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      },
    });
  });

  return <BottomTab routes={newRoutes} focusedIndex={state.index} />;
}

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={TAB_NAME.Main}
      tabBar={TabBar}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name={TAB_NAME.Main} component={MainStack} />
      <Tab.Screen name={TAB_NAME.Map} component={MapPage} />
      <Tab.Screen name={TAB_NAME.Diary} component={DiaryStack} />
    </Tab.Navigator>
  );
}

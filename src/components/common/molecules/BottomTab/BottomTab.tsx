import DiaryFilled from '@/assets/icons/DiaryFilled';
import DiaryOutline from '@/assets/icons/DiaryOutline';
import HomeFilled from '@/assets/icons/HomeFilled';
import HomeOutline from '@/assets/icons/HomeOutline';
import MapFilled from '@/assets/icons/MapFilled';
import MapOutline from '@/assets/icons/MapOutline';
import { COLORS } from '@/constants/styles/colors';
import * as styles from './BottomTab.style';

interface TabIconProps {
  name: string;
  color?: string;
}

function FilledIcon({ name, color }: TabIconProps) {
  switch (name) {
    case 'Main':
      return <HomeFilled color={color} />;
    case 'Map':
      return <MapFilled color={color} />;
    case 'Diary':
      return <DiaryFilled color={color} />;
    default:
      return <HomeFilled color={color} />;
  }
}

function OutlineIcon({ name, color }: TabIconProps) {
  switch (name) {
    case 'Main':
      return <HomeOutline color={color} />;
    case 'Map':
      return <MapOutline color={color} />;
    case 'Diary':
      return <DiaryOutline color={color} />;
    default:
      return <HomeOutline color={color} />;
  }
}

interface FocusIconProps {
  isFocused: boolean;
  defaultIcon: JSX.Element;
  focusedIcon: JSX.Element;
}

function FocusIcon({ isFocused, defaultIcon, focusedIcon }: FocusIconProps) {
  return isFocused ? focusedIcon : defaultIcon;
}

interface BottomTabProps {
  routes: Array<{ name: string; onPress?: () => void }>;
  focusedIndex: number;
}

export default function BottomTab({ routes, focusedIndex }: BottomTabProps) {
  return (
    <styles.Container>
      {routes.map((route, index) => (
        <styles.PressableTab onPress={route.onPress} key={route.name}>
          {({ pressed }) => (
            <styles.Tab isPressed={pressed}>
              {pressed ? (
                <FilledIcon name={route.name} color={COLORS.primary.pressed} />
              ) : (
                <FocusIcon
                  isFocused={index === focusedIndex}
                  defaultIcon={<OutlineIcon name={route.name} />}
                  focusedIcon={
                    <FilledIcon
                      name={route.name}
                      color={COLORS.primary.normal}
                    />
                  }
                />
              )}
            </styles.Tab>
          )}
        </styles.PressableTab>
      ))}
    </styles.Container>
  );
}

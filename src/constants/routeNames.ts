import { CustomEnum } from '@/constants/types/typeUtils';

export const TAB_NAME = {
  Main: 'Main',
  Map: 'Map',
  Diary: 'Diary',
} as const;
export type TabName = CustomEnum<typeof TAB_NAME>;

export const SCREEN_NAME = {
  MainPage: 'MainPage',
  MapPage: 'MapPage',
  DiaryPage: 'DiaryPage',
  QnaPage: 'QnaPage',
  SettingsPage: 'SettingsPage',
} as const;
export type ScreenName = CustomEnum<typeof SCREEN_NAME>;

export const NAVIGATOR_NAME = {
  MainStack: 'MainStack',
  MapStack: 'MapStack',
  DiaryStack: 'DiaryStack',
  QnaStack: 'QnaStack',
} as const;
export type NavigatorName = CustomEnum<typeof NAVIGATOR_NAME>;

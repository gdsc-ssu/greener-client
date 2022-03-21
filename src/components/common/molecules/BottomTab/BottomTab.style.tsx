import { COLORS } from '@/constants/styles/colors';
import styled from '@emotion/native';

export const Container = styled.View({
  width: '100%',
  height: 52,
  backgroundColor: COLORS.grayscale.white,
  flexDirection: 'row',
});

export const PressableTab = styled.Pressable({
  flex: 1,
});

interface TabProps {
  isPressed: boolean;
}

export const Tab = styled.View<TabProps>(({ isPressed }) => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: isPressed ? COLORS.grayscale.gray0 : undefined,
}));

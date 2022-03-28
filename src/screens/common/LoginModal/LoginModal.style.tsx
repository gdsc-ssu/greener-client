import { COLORS } from '@/constants/styles/colors';
import styled from '@emotion/native';

export const Container = styled.View({
  flex: 1,
  justifyContent: 'flex-end',
});

export const CloseArea = styled.Pressable({
  flex: 1,
});

export const LoginModal = styled.View({
  width: '100%',
  backgroundColor: COLORS.grayscale.gray0,
  paddingHorizontal: 24,
  paddingVertical: 32,
});

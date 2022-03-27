import { COLORS } from '@/constants/styles/colors';
import styled from '@emotion/native';

export const Bar = styled.View({
  paddingHorizontal: 32,
  paddingVertical: 12,
  backgroundColor: COLORS.grayscale.white,
});

export const ContentWrap = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

import { COLORS } from '@/constants/styles/colors';
import styled from '@emotion/native';

export const Container = styled.View({
  flexDirection: 'column',
});

export const ArrowsWrap = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 16,
});

export const DisabledDate = styled.View({
  width: 24,
  height: 24,
  borderRadius: 12,
  backgroundColor: COLORS.grayscale.gray2,
});

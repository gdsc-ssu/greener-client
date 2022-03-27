import { COLORS } from '@/constants/styles/colors';
import styled from '@emotion/native';

export const Box = styled.View({
  width: '100%',
  backgroundColor: COLORS.grayscale.gray0,
  borderRadius: 8,
  padding: 16,
  flexDirection: 'column',
});

export const TitleWrap = styled.View({
  flexDirection: 'column',
  marginBottom: 24,
});

export const QuoteWrap = styled.View({
  marginBottom: 8,
});

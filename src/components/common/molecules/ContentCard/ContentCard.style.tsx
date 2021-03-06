import { COLORS } from '@/constants/styles/colors';
import styled from '@emotion/native';

export const Wrap = styled.View({
  flex: 1,
  height: 140,
  borderRadius: 8,
  backgroundColor: COLORS.grayscale.gray0,
});

export const CoverImage = styled.Image({
  height: 82,
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
});

export const TitleWrap = styled.View({
  flex: 1,
  padding: 12,
});

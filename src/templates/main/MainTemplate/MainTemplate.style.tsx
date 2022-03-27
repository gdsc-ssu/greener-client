import StyledText from '@/components/common/atoms/StyledText';
import styled from '@emotion/native';
import { Animated } from 'react-native';

export const SCROLL_RANGE = 116;

export const TopBarWrap = styled.View({
  position: 'absolute',
  top: 0,
  zIndex: 10,
  width: '100%',
});

export const Container = styled(Animated.ScrollView)({
  flex: 1,
  paddingHorizontal: 32,
});

export const PaddingWrap = styled.View({
  flexDirection: 'column',
  paddingTop: SCROLL_RANGE + 8,
  paddingBottom: 28,
});

export const Title = styled(StyledText)({
  marginBottom: 40,
});

export const DiaryPreview = styled.View({
  marginTop: 52,
  flexDirection: 'column',
});

export const EmotionWrap = styled.View({
  marginBottom: 16,
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const EmotionEmoji = styled.Text({
  fontSize: 64,
  fontFamily: 'bold',
  lineHeight: 64 * 1.2,
  marginBottom: -64 * 0.2,
});

export const ContentsWrap = styled.View({
  marginTop: 52,
  flexDirection: 'column',
});

export const ContentsTitle = styled(StyledText)({
  marginBottom: 4,
});

export const HorizontalContents = styled.View({
  flexDirection: 'row',
  marginTop: 12,
});

export const VerticalContents = styled.View({
  flexDirection: 'column',
});

export const LeftContentWrap = styled.View({
  flex: 1,
  marginRight: 12,
});

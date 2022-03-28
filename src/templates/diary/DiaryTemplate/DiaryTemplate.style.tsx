import StyledText from '@/components/common/atoms/StyledText';
import { COLORS } from '@/constants/styles/colors';
import styled from '@emotion/native';

export const SCROLL_RANGE = 56;

export const Container = styled.ScrollView({
  flex: 1,
  paddingTop: 28,
  paddingHorizontal: 32,
  flexDirection: 'column',
  backgroundColor: COLORS.grayscale.white,
});

export const JournalArea = styled.View({
  paddingTop: 48,
  flexDirection: 'column',
  paddingBottom: SCROLL_RANGE + 28,
});

export const JournalInfo = styled.Pressable({
  flexDirection: 'column',
  alignItems: 'center',
});

export const EmotionEmoji = styled.Text({
  fontSize: 64,
  fontFamily: 'bold',
  lineHeight: 64 * 1.2,
  marginBottom: -64 * 0.2,
});

export const JournalDate = styled(StyledText)({
  marginTop: 8,
});

export const JournalWrap = styled.Pressable({
  flexDirection: 'column',
  marginTop: 32,
});

export const JournalTitle = styled(StyledText)({
  marginBottom: 12,
});

import { COLORS } from '@/constants/styles/colors';
import { TEXT_STYLES, TEXT_STYLE_NAME } from '@/constants/styles/textStyles';
import styled from '@emotion/native';

export const Container = styled.ScrollView({
  flex: 1,
  backgroundColor: COLORS.grayscale.white,
  paddingVertical: 28,
  paddingHorizontal: 32,
});

export const AnswerInput = styled.TextInput({
  ...TEXT_STYLES[TEXT_STYLE_NAME.body1R],
  color: COLORS.grayscale.black,
  flex: 1,
  paddingTop: 0,
  paddingBottom: 0,
  marginTop: 24,
});

export const ArrowWrap = styled.KeyboardAvoidingView({
  position: 'absolute',
  bottom: 0,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  paddingHorizontal: 24,
  paddingVertical: 12,
  backgroundColor: COLORS.grayscale.white,
});

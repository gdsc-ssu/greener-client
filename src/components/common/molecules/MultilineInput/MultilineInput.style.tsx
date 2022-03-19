import { COLORS } from '@/constants/styles/colors';
import { TEXT_STYLES, TEXT_STYLE_NAME } from '@/constants/styles/textStyles';
import styled from '@emotion/native';

export const Container = styled.View({
  paddingHorizontal: 12,
  paddingVertical: 8,
  borderRadius: 8,
  backgroundColor: COLORS.grayscale.white,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  alignSelf: 'stretch',
});

export const StyledTextInput = styled.TextInput({
  ...TEXT_STYLES[TEXT_STYLE_NAME.body2R],
  color: COLORS.grayscale.black,
  flex: 1,
  marginRight: 8,
  paddingTop: 0,
  paddingBottom: 0,
});

import { COLORS } from '@/constants/styles/colors';
import { TextStyleName, TEXT_STYLES } from '@/constants/styles/textStyles';
import styled from '@emotion/native';

interface StyledTextProps {
  name: TextStyleName;
  color?: string;
}

const StyledText = styled.Text<StyledTextProps>((props) => ({
  fontFamily: TEXT_STYLES[props.name].fontFamily,
  fontSize: TEXT_STYLES[props.name].size,
  lineHeight: TEXT_STYLES[props.name].lineHeight,
  color: props.color || COLORS.grayscale.black,
}));

export default StyledText;

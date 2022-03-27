import { COLORS } from '@/constants/styles/colors';
import { TextStyleName, TEXT_STYLES } from '@/constants/styles/textStyles';
import styled from '@emotion/native';

interface StyledTextProps {
  name: TextStyleName;
  color?: string;
}

const StyledText = styled.Text<StyledTextProps>((props) => ({
  ...TEXT_STYLES[props.name],
  color: props.color || COLORS.grayscale.black,
}));

export default StyledText;

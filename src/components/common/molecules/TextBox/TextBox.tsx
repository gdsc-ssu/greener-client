import StyledText from '@/components/common/atoms/StyledText';
import { TEXT_STYLE_NAME } from '@/constants/styles/textStyles';
import React from 'react';
import * as styles from './TextBox.style';

interface TextBoxProps {
  text: string;
  color?: string;
}

export default function TextBox({ text, color }: TextBoxProps) {
  return (
    <styles.TextWrap>
      <StyledText name={TEXT_STYLE_NAME.body2R} color={color}>
        {text}
      </StyledText>
    </styles.TextWrap>
  );
}

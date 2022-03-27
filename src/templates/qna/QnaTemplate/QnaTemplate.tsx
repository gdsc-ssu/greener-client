import Arrow from '@/assets/icons/Arrow';
import StyledText from '@/components/common/atoms/StyledText';
import { COLORS } from '@/constants/styles/colors';
import { TEXT_STYLE_NAME } from '@/constants/styles/textStyles';
import { Platform, Pressable } from 'react-native';
import * as styles from './QnaTemplate.style';

interface QnaTemplateProps {
  question: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onPressNext?: () => Promise<void>;
  keyboardVerticalOffset?: number;
}

export default function QnaTemplate({
  question,
  value,
  onChangeText,
  onPressNext,
  keyboardVerticalOffset = 0,
}: QnaTemplateProps) {
  return (
    <>
      <styles.Container>
        <StyledText name={TEXT_STYLE_NAME.subtitle1}>{question}</StyledText>
        <styles.AnswerInput
          placeholder="Tell your story"
          placeholderTextColor={COLORS.grayscale.gray5}
          value={value}
          onChangeText={onChangeText}
          multiline
        />
      </styles.Container>
      <styles.ArrowWrap
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <Pressable onPress={onPressNext}>
          <Arrow
            width={32}
            height={32}
            style={{ transform: [{ rotateY: '180deg' }] }}
          />
        </Pressable>
      </styles.ArrowWrap>
    </>
  );
}

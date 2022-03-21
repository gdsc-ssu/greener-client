import Quote from '@/assets/icons/Quote';
import StyledText from '@/components/common/atoms/StyledText';
import MultilineInput from '@/components/common/molecules/MultilineInput';
import { TEXT_STYLE_NAME } from '@/constants/styles/textStyles';
import * as styles from './QuestionBox.style';

interface QuestionBoxProps {
  title: string;
  inputValue?: string;
  onChangeText?: (text: string) => void;
  onPressSend?: () => void;
}

export default function QuestionBox({
  title,
  inputValue,
  onChangeText,
  onPressSend,
}: QuestionBoxProps) {
  return (
    <styles.Box>
      <styles.TitleWrap>
        <styles.QuoteWrap>
          <Quote />
        </styles.QuoteWrap>
        <StyledText name={TEXT_STYLE_NAME.subtitle3}>{title}</StyledText>
      </styles.TitleWrap>
      <MultilineInput
        value={inputValue}
        onChangeText={onChangeText}
        onPressSend={onPressSend}
        placeholder="Tell your story"
      />
    </styles.Box>
  );
}

import SendFilled from '@/assets/icons/SendFilled';
import SendOutline from '@/assets/icons/SendOutline';
import PressableIcon from '@/components/common/atoms/PressableIcon';
import { COLORS } from '@/constants/styles/colors';
import * as styles from './MultilineInput.style';

interface MultilineInputProps {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  onPressSend?: () => void;
}

export default function MultilineInput({
  value,
  onChangeText,
  placeholder,
  onPressSend,
}: MultilineInputProps) {
  return (
    <styles.Container>
      <styles.StyledTextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.grayscale.gray5}
        value={value}
        onChangeText={onChangeText}
        multiline
      />
      <PressableIcon
        defaultIcon={
          <SendOutline width={24} height={24} color={COLORS.primary.normal} />
        }
        pressedIcon={
          <SendFilled width={24} height={24} color={COLORS.primary.normal} />
        }
        onPress={onPressSend}
      />
    </styles.Container>
  );
}

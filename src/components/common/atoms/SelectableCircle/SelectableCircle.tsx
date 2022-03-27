import { Pressable } from 'react-native';
import * as styles from './SelectableCircle.style';

interface SelectableCircleProps {
  size?: number;
  color?: string;
  pressedColor?: string;
  onPress?: () => void;
  selected?: boolean;
}

export default function SelectableCircle({
  size = 16,
  color,
  pressedColor,
  onPress,
  selected,
}: SelectableCircleProps) {
  return (
    <Pressable
      style={({ pressed }) => ({
        backgroundColor: pressed ? pressedColor : color,
        width: size,
        height: size,
        borderRadius: size / 2,
        justifyContent: 'center',
        alignItems: 'center',
      })}
      onPress={onPress}
    >
      {selected && <styles.InnerCircle size={size / 2} />}
    </Pressable>
  );
}

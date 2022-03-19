import { Pressable } from 'react-native';

interface PressableIconProps {
  defaultIcon: JSX.Element;
  pressedIcon: JSX.Element;
  onPress?: () => void;
}

export default function PressableIcon({
  defaultIcon,
  pressedIcon,
  onPress,
}: PressableIconProps) {
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (pressed ? pressedIcon : defaultIcon)}
    </Pressable>
  );
}

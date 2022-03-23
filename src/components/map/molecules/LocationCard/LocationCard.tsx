import MapOutline from '@/assets/icons/MapOutline';
import StyledText from '@/components/common/atoms/StyledText';
import { COLORS } from '@/constants/styles/colors';
import { TEXT_STYLE_NAME } from '@/constants/styles/textStyles';
import { Pressable } from 'react-native';
import * as styles from './LocationCard.style';

interface LocationCardProps {
  name: string;
  address: string;
  onPress?: () => void;
}

export default function LocationCard({
  name,
  address,
  onPress,
}: LocationCardProps) {
  return (
    <Pressable
      style={({ pressed }) => ({
        backgroundColor: pressed
          ? COLORS.grayscale.gray0
          : COLORS.grayscale.white,
        padding: 24,
        flexDirection: 'column',
      })}
      onPress={onPress}
    >
      <StyledText
        name={TEXT_STYLE_NAME.subtitle3}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {name}
      </StyledText>
      <styles.AddressWrap>
        <MapOutline width={16} height={16} />
        <styles.AddressText
          name={TEXT_STYLE_NAME.body2R}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {address}
        </styles.AddressText>
      </styles.AddressWrap>
    </Pressable>
  );
}

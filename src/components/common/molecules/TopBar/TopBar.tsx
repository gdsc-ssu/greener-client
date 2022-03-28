import ProfileImage from '@/components/common/atoms/ProfileImage';
import { Pressable } from 'react-native';
import * as styles from './TopBar.style';

interface TopBarProps {
  profileImage?: string;
  titleComponent: JSX.Element;
  onPressProfile?: () => void;
}

export default function TopBar({
  profileImage,
  titleComponent,
  onPressProfile,
}: TopBarProps) {
  return (
    <styles.Bar>
      <styles.ContentWrap>
        {titleComponent}
        <Pressable onPress={onPressProfile}>
          <ProfileImage size={32} source={{ uri: profileImage }} />
        </Pressable>
      </styles.ContentWrap>
    </styles.Bar>
  );
}

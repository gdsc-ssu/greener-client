import ProfileImage from '@/components/common/atoms/ProfileImage';
import * as styles from './TopBar.style';

interface TopBarProps {
  profileImage?: string;
  titleComponent: JSX.Element;
}

export default function TopBar({ profileImage, titleComponent }: TopBarProps) {
  return (
    <styles.Bar>
      <styles.ContentWrap>
        {titleComponent}
        <ProfileImage size={32} source={{ uri: profileImage }} />
      </styles.ContentWrap>
    </styles.Bar>
  );
}

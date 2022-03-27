import { COLORS } from '@/constants/styles/colors';
import styled from '@emotion/native';

interface ProfileImageProps {
  size?: number;
}

const ProfileImage = styled.Image<ProfileImageProps>(({ size = 32 }) => ({
  width: size,
  height: size,
  borderRadius: size / 2,
  backgroundColor: COLORS.grayscale.gray0,
}));

export default ProfileImage;

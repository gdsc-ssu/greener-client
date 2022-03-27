import { COLORS } from '@/constants/styles/colors';
import styled from '@emotion/native';

interface InnerCircleProps {
  size: number;
  borderColor?: string;
}

export const InnerCircle = styled.Pressable<InnerCircleProps>(
  ({ size, borderColor }) => ({
    width: size,
    height: size,
    borderRadius: size / 2,
    borderColor: borderColor || COLORS.grayscale.white,
    borderWidth: 1.5,
    borderStyle: 'solid',
  }),
);

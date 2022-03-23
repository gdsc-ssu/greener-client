import StyledText from '@/components/common/atoms/StyledText';
import { COLORS } from '@/constants/styles/colors';
import styled from '@emotion/native';

interface ContainerProps {
  backgroundColor?: string;
}

export const Container = styled.Pressable<ContainerProps>(
  ({ backgroundColor }) => ({
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: backgroundColor || COLORS.grayscale.white,
    borderRadius: 8,
  }),
);

export const Description = styled(StyledText)({
  flex: 1,
  textAlign: 'center',
});

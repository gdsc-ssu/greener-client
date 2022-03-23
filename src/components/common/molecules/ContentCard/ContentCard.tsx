import StyledText from '@/components/common/atoms/StyledText';
import { TEXT_STYLE_NAME } from '@/constants/styles/textStyles';
import * as styles from './ContentCard.style';

interface ContentCardProps {
  title: string;
  coverImage: string;
}

export default function ContentCard({ title, coverImage }: ContentCardProps) {
  return (
    <styles.Wrap>
      <styles.CoverImage
        source={{
          uri: coverImage,
        }}
      />
      <styles.TitleWrap>
        <StyledText
          name={TEXT_STYLE_NAME.body2B}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {title}
        </StyledText>
      </styles.TitleWrap>
    </styles.Wrap>
  );
}

import StyledText from '@/components/common/atoms/StyledText';
import ContentCard from '@/components/common/molecules/ContentCard';
import TextBox from '@/components/common/molecules/TextBox/TextBox';
import QuestionBox from '@/components/qna/organisms/QuestionBox';
import { COLORS } from '@/constants/styles/colors';
import { TEXT_STYLE_NAME } from '@/constants/styles/textStyles';
import { useRef } from 'react';
import { Animated } from 'react-native';
import * as styles from './MainTemplate.style';
import MainTopBar from './MainTopBar';

export default function MainTemplate() {
  const scroll = useRef(new Animated.Value(0)).current;
  return (
    <>
      <styles.TopBarWrap>
        <MainTopBar scroll={scroll} scrollRange={styles.SCROLL_RANGE} />
      </styles.TopBarWrap>
      <styles.Container
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scroll } } }],
          { useNativeDriver: true },
        )}
        showsVerticalScrollIndicator={false}
      >
        <styles.PaddingWrap>
          <styles.Title name={TEXT_STYLE_NAME.title}>Greener</styles.Title>
          <QuestionBox title="How was your day?" />
          <styles.DiaryPreview>
            <styles.EmotionWrap>
              <StyledText name={TEXT_STYLE_NAME.subtitle2B}>
                Be yourself;{'\n'}everyone else is{'\n'}already taken.
              </StyledText>
              <styles.EmotionEmoji>😶</styles.EmotionEmoji>
            </styles.EmotionWrap>
            <TextBox
              color={COLORS.grayscale.gray6}
              text="Today I went to eat dinner with my belong friends. The menu was pasta, my favorite f..."
            />
          </styles.DiaryPreview>
          <styles.ContentsWrap>
            <styles.ContentsTitle name={TEXT_STYLE_NAME.subtitle2B}>
              Contents for You
            </styles.ContentsTitle>
            <styles.VerticalContents>
              <styles.HorizontalContents>
                <styles.LeftContentWrap>
                  <ContentCard title="How to find own hobby" coverImage="" />
                </styles.LeftContentWrap>
                <ContentCard title="How to find own hobby" coverImage="" />
              </styles.HorizontalContents>
              <styles.HorizontalContents>
                <styles.LeftContentWrap>
                  <ContentCard title="How to find own hobby" coverImage="" />
                </styles.LeftContentWrap>
                <ContentCard title="How to find own hobby" coverImage="" />
              </styles.HorizontalContents>
              <styles.HorizontalContents>
                <styles.LeftContentWrap>
                  <ContentCard title="How to find own hobby" coverImage="" />
                </styles.LeftContentWrap>
                <ContentCard title="How to find own hobby" coverImage="" />
              </styles.HorizontalContents>
            </styles.VerticalContents>
          </styles.ContentsWrap>
        </styles.PaddingWrap>
      </styles.Container>
    </>
  );
}

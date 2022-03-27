import StyledText from '@/components/common/atoms/StyledText';
import ContentCard from '@/components/common/molecules/ContentCard';
import TextBox from '@/components/common/molecules/TextBox/TextBox';
import QuestionBox from '@/components/qna/organisms/QuestionBox';
import { COLORS } from '@/constants/styles/colors';
import { TEXT_STYLE_NAME } from '@/constants/styles/textStyles';
import { LinkPreview } from '@flyerhq/react-native-link-preview';
import { useCallback, useRef, useState } from 'react';
import { Animated } from 'react-native';
import * as styles from './MainTemplate.style';
import MainTopBar from './MainTopBar';

const CONTENTS = [
  'https://www.youtube.com/watch?v=UjfO2sC5aA8',
  'https://www.youtube.com/watch?v=5sVNk-fSKRQ',
] as const;

interface MainTemplateProps {
  onPressNext?: (text: string) => void;
  onPressProfile?: () => void;
}

export default function MainTemplate({
  onPressNext,
  onPressProfile,
}: MainTemplateProps) {
  const scroll = useRef(new Animated.Value(0)).current;

  const [answer, setAnswer] = useState('');

  const Card = useCallback(
    ({ content }: { content: string }) => (
      <LinkPreview
        text={content}
        containerStyle={{ flex: 1 }}
        renderLinkPreview={({ previewData }) => (
          <ContentCard
            title={previewData?.title || ''}
            coverImage={previewData?.image?.url || ''}
          />
        )}
      />
    ),
    [],
  );

  return (
    <>
      <styles.TopBarWrap>
        <MainTopBar
          scroll={scroll}
          scrollRange={styles.SCROLL_RANGE}
          onPressProfile={onPressProfile}
        />
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
          <QuestionBox
            title="What happened today?"
            inputValue={answer}
            onChangeText={(text) => {
              setAnswer(text);
            }}
            onPressSend={
              onPressNext &&
              (() => {
                onPressNext(answer);
              })
            }
          />
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
                {CONTENTS.map((content, index) =>
                  index % 2 === 0 ? (
                    <styles.LeftContentWrap>
                      <Card content={content} />
                    </styles.LeftContentWrap>
                  ) : (
                    <Card content={content} />
                  ),
                )}
              </styles.HorizontalContents>
            </styles.VerticalContents>
          </styles.ContentsWrap>
        </styles.PaddingWrap>
      </styles.Container>
    </>
  );
}

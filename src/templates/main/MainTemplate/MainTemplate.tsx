import StyledText from '@/components/common/atoms/StyledText';
import ContentCard from '@/components/common/molecules/ContentCard';
import TextBox from '@/components/common/molecules/TextBox/TextBox';
import QuestionBox from '@/components/qna/organisms/QuestionBox';
import { COLORS } from '@/constants/styles/colors';
import { TEXT_STYLE_NAME } from '@/constants/styles/textStyles';
import { User } from '@/logics/atoms';
import { LinkPreview } from '@flyerhq/react-native-link-preview';
import { useCallback, useRef, useState } from 'react';
import { Animated } from 'react-native';
import * as styles from './MainTemplate.style';
import MainTopBar from './MainTopBar';

const CONTENTS = [
  'https://www.youtube.com/watch?v=Rz4_q6bdhis&ab_channel=%ED%9B%88%ED%94%BC',
  'https://www.youtube.com/watch?v=dXxTm1NAHEE&ab_channel=SBSNOW%2FSBS%EA%B3%B5%EC%8B%9D%EC%B1%84%EB%84%90',
  'https://www.youtube.com/watch?v=r10jCgH_nNs&ab_channel=%EC%8B%B1%EC%86%A1%EC%83%9D%EC%86%A1SingSongSangSong',
  'https://www.youtube.com/watch?v=C57eP02b5f4&ab_channel=KMJ',
  'https://www.youtube.com/watch?v=zH5yXYRu3fs&ab_channel=%EC%B1%84%EB%84%90A',
  'https://www.youtube.com/watch?v=DZ94DG_Yp9k&ab_channel=%EC%B1%84%EB%84%90A',
  'https://www.youtube.com/watch?v=WYmnqBaWtW0&ab_channel=%EC%9D%98%ED%95%99%EC%B1%84%EB%84%90%EB%B9%84%EC%98%A8%EB%92%A4',
  'https://www.youtube.com/watch?v=EOzlI9HTHZk&ab_channel=%EC%84%B8%EB%B0%94%EC%8B%9C%EA%B0%95%EC%97%B0SebasiTalk',
] as const;

interface MainTemplateProps {
  user?: User;
  onPressNext?: (text: string) => void;
  onPressProfile?: () => void;
}

export default function MainTemplate({
  user,
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
          profileImage={user?.profileImage}
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
              {[...Array(Math.floor(CONTENTS.length / 2))].map((v, index) => (
                <styles.HorizontalContents>
                  <styles.LeftContentWrap>
                    <Card content={CONTENTS[index * 2]} />
                  </styles.LeftContentWrap>
                  <Card content={CONTENTS[index * 2 + 1]} />
                </styles.HorizontalContents>
              ))}
            </styles.VerticalContents>
          </styles.ContentsWrap>
        </styles.PaddingWrap>
      </styles.Container>
    </>
  );
}

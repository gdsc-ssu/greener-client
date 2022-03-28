import StyledText from '@/components/common/atoms/StyledText';
import TextBox from '@/components/common/molecules/TextBox';
import TopBar from '@/components/common/molecules/TopBar';
import DiaryCalendar from '@/components/diary/organisms/DiaryCalendar';
import { TEXT_STYLE_NAME } from '@/constants/styles/textStyles';
import { Diary, DiaryEmotion } from '@/constants/types/dataTypes';
import * as styles from './DiaryTemplate.style';

const MONTH_NAME = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

interface DiaryTemplateProps {
  calendarDate: { year: number; month: number };
  selectedDate: { year: number; month: number; date: number };
  diaryEmotionList: Array<DiaryEmotion | undefined>;
  selectedDiary: Diary;
  profileImage?: string;
  onPressDate?: (date: number) => void;
  setDate?: (year: number, month: number) => void;
  onPressGratitudeJournal?: () => void;
  onPressEmoji?: () => void;
}

export default function DiaryTemplate({
  calendarDate,
  selectedDate,
  diaryEmotionList,
  selectedDiary,
  profileImage,
  onPressDate,
  setDate,
  onPressGratitudeJournal,
  onPressEmoji,
}: DiaryTemplateProps) {
  return (
    <>
      <TopBar
        titleComponent={
          <StyledText name={TEXT_STYLE_NAME.subtitle1}>{`${calendarDate.year} ${
            MONTH_NAME[calendarDate.month]
          }`}</StyledText>
        }
        profileImage={profileImage}
      />
      <styles.Container>
        <DiaryCalendar
          year={calendarDate.year}
          month={calendarDate.month}
          diaryEmotionList={diaryEmotionList}
          selected={
            selectedDate.year === calendarDate.year &&
            selectedDate.month === calendarDate.month
              ? selectedDate.date
              : undefined
          }
          onPressDate={onPressDate}
          onPressNext={
            setDate &&
            (() => {
              setDate(
                calendarDate.month + 1 > 11
                  ? calendarDate.year + 1
                  : calendarDate.year,
                calendarDate.month + 1 > 11 ? 0 : calendarDate.month + 1,
              );
            })
          }
          onPressPrev={
            setDate &&
            (() => {
              setDate(
                calendarDate.month - 1 < 0
                  ? calendarDate.year - 1
                  : calendarDate.year,
                calendarDate.month - 1 < 0 ? 11 : calendarDate.month - 1,
              );
            })
          }
        />
        <styles.JournalArea>
          <styles.JournalInfo onPress={onPressEmoji}>
            <styles.EmotionEmoji>😶</styles.EmotionEmoji>
            <styles.JournalDate name={TEXT_STYLE_NAME.subtitle1}>{`${
              selectedDate.month + 1
            }/${selectedDate.date + 1}`}</styles.JournalDate>
          </styles.JournalInfo>

          <styles.JournalWrap>
            <styles.JournalTitle name={TEXT_STYLE_NAME.subtitle2B}>
              Emotion Journal
            </styles.JournalTitle>
            <TextBox text={selectedDiary.emotionJournal} />
          </styles.JournalWrap>
          <styles.JournalWrap onPress={onPressGratitudeJournal}>
            <styles.JournalTitle name={TEXT_STYLE_NAME.subtitle2B}>
              Gratitude Journal
            </styles.JournalTitle>
            <TextBox
              text={
                selectedDiary.gratitudeJournal !== undefined
                  ? selectedDiary.gratitudeJournal
                  : ''
              }
            />
          </styles.JournalWrap>
        </styles.JournalArea>
      </styles.Container>
    </>
  );
}

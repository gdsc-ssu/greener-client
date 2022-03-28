// wrapped component of `DiaryTemplate`

import { SCREEN_NAME } from '@/constants/routeNames';
import {
  Diary,
  DiaryEmotion,
  EMOTION_COLOR,
} from '@/constants/types/dataTypes';
import { userAtom } from '@/logics/atoms';
import { getDiary, getDiaryEmotions } from '@/logics/server/diary';
import { useNavigation } from '@react-navigation/native';
import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import DiaryTemplate from './DiaryTemplate';

const now = new Date();

export const dateAtom = atom({
  year: now.getFullYear(),
  month: now.getMonth(),
});

export const diaryEmotionsAtom = atom<Array<DiaryEmotion | undefined>>([]);

export const selectedDateAtom = atom({
  year: now.getFullYear(),
  month: now.getMonth(),
  date: now.getDate(),
});

export const selectedDiaryAtom = atom<Diary>({
  emotionColor: EMOTION_COLOR.BLUE,
  emotionJournal: '',
  createdAt: now,
});

export default function DiaryTemplateWrapped() {
  const [date, setDate] = useAtom(dateAtom);
  const [diaryEmotions, setDiaryEmotions] = useAtom(diaryEmotionsAtom);
  const [selectedDate, setSelectedDate] = useAtom(selectedDateAtom);
  const [selectedDiary, setSelectedDiary] = useAtom(selectedDiaryAtom);
  const [user, setUser] = useAtom(userAtom);

  const navigation = useNavigation();

  useEffect(() => {
    async function refreshDiaryEmotions() {
      const newDiaryEmotions = await getDiaryEmotions({
        year: date.year,
        month: date.month,
      });
      setDiaryEmotions(newDiaryEmotions);
    }

    refreshDiaryEmotions();
  }, [date.year, date.month, setDiaryEmotions]);

  return (
    <DiaryTemplate
      calendarDate={date}
      selectedDate={selectedDate}
      diaryEmotionList={diaryEmotions}
      selectedDiary={selectedDiary}
      onPressDate={async (pressedDate) => {
        setSelectedDate({
          year: date.year,
          month: date.month,
          date: pressedDate,
        });
        const selectedDiaryEmotion = diaryEmotions[pressedDate];
        const diary = await getDiary(
          selectedDiaryEmotion ? selectedDiaryEmotion.id : -1,
        );
        diary.emotionJournal = emotionJournal;
        diary.gratitudeJournal = gratitudeJournal;
        setSelectedDiary(diary);
      }}
      setDate={(year, month) => {
        setDate({ year, month });
      }}
      profileImage={user.profileImage}
      onPressGratitudeJournal={() => {
        navigation.navigate(SCREEN_NAME.GratitudeJournalPage);
      }}
      onPressEmoji={() => {
        Alert.alert('Do you want to change blue to green?', undefined, [
          {
            text: 'No',
          },
          {
            text: 'Change',
            onPress: () => {
              const previousDiaryEmotions = [...diaryEmotions];
              const tmp =
                previousDiaryEmotions[selectedDiary.createdAt.getDate()];
              if (tmp) tmp.emotionColor = EMOTION_COLOR.GREEN;
              setDiaryEmotions(previousDiaryEmotions);
            },
          },
        ]);
      }}
    />
  );
}

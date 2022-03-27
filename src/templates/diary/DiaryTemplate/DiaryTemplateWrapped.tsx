// wrapped component of `DiaryTemplate`

import {
  Diary,
  DiaryEmotion,
  EMOTION_COLOR,
} from '@/constants/types/dataTypes';
import { getDiary, getDiaryEmotions } from '@/logics/server/diary';
import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';
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
        setSelectedDiary(diary);
      }}
      setDate={(year, month) => {
        setDate({ year, month });
      }}
    />
  );
}

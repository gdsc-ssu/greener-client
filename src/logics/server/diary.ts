import {
  Diary,
  DiaryEmotion,
  EMOTION_COLOR,
} from '@/constants/types/dataTypes';

interface GetDiaryEmotionsProps {
  year: number;
  month: number;
}

export async function getDiaryEmotions({ year, month }: GetDiaryEmotionsProps) {
  const tmpDiaryEmotionList: Array<DiaryEmotion | undefined> = [
    ...Array(31),
  ].map((value, index) =>
    index < new Date().getDate() + 1
      ? {
          id: index,
          emotionColor: EMOTION_COLOR.BLUE,
          createdAt: new Date(year, month, index + 1),
        }
      : undefined,
  );

  return tmpDiaryEmotionList;
}

export async function getDiary(diaryId: number) {
  const tmpDiary: Diary = {
    emotionColor: EMOTION_COLOR.GREEN,
    emotionJournal: '',
    createdAt: new Date(),
  };

  return tmpDiary;
}

export async function postDiary(diary: string) {
  const tmpDiary: Diary = {
    emotionColor: EMOTION_COLOR.GREEN,
    emotionJournal: diary,
    createdAt: new Date(),
  };

  return tmpDiary;
}

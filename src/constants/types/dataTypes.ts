import { CustomEnum } from './typeUtils';

export const EMOTION_COLOR = {
  MINT: 'MINT',
  BLUE: 'BLUE',
  GREEN: 'GREEN',
} as const;
export const EMOTION_COLOR_LOWERCASE = {
  MINT: 'mint',
  BLUE: 'blue',
  GREEN: 'green',
} as const;
export type EmotionColor = CustomEnum<typeof EMOTION_COLOR>;

export interface Diary {
  emotionColor: EmotionColor;
  emotionJournal: string;
  gratitudeJournal?: string;
  createdAt: Date;
}

export interface DiaryEmotion {
  id: number;
  emotionColor: EmotionColor;
  createdAt: Date;
}

/* eslint-disable react/jsx-no-useless-fragment */

import Arrow from '@/assets/icons/Arrow';
import SelectableCircle from '@/components/common/atoms/SelectableCircle';
import Calendar from '@/components/common/molecules/Calendar';
import { COLORS } from '@/constants/styles/colors';
import {
  DiaryEmotion,
  EmotionColor,
  EMOTION_COLOR_LOWERCASE,
} from '@/constants/types/dataTypes';
import { useCallback } from 'react';
import { Pressable } from 'react-native';
import * as styles from './DiaryCalendar.style';

interface DiaryCalendarProps {
  year: number;
  month: number;
  diaryEmotionList: Array<DiaryEmotion | undefined>;
  selected?: number;
  onPressDate?: (date: number) => void;
  onPressPrev?: () => void;
  onPressNext?: () => void;
}

export default function DiaryCalendar({
  year,
  month,
  diaryEmotionList,
  selected,
  onPressDate,
  onPressPrev,
  onPressNext,
}: DiaryCalendarProps) {
  const renderDate = useCallback(
    (date: number, emotionColor?: EmotionColor) => {
      const color =
        emotionColor && COLORS.emotion[EMOTION_COLOR_LOWERCASE[emotionColor]];

      return (
        <>
          {color ? (
            <SelectableCircle
              size={24}
              color={color.normal}
              pressedColor={color.pressed}
              onPress={() => {
                if (onPressDate) onPressDate(date);
              }}
              selected={selected !== undefined && selected === date}
            />
          ) : (
            <styles.DisabledDate />
          )}
        </>
      );
    },
    [onPressDate, selected],
  );

  return (
    <styles.Container>
      <styles.ArrowsWrap>
        <Pressable onPress={onPressPrev}>
          <Arrow />
        </Pressable>
        <Pressable onPress={onPressNext}>
          <Arrow style={{ transform: [{ rotateY: '180deg' }] }} />
        </Pressable>
      </styles.ArrowsWrap>
      <Calendar
        year={year}
        month={month}
        renderDate={(date: number) =>
          renderDate(date, diaryEmotionList[date]?.emotionColor)
        }
        dayIconSize={24}
      />
    </styles.Container>
  );
}

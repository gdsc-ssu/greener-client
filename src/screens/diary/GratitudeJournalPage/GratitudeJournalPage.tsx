import Arrow from '@/assets/icons/Arrow';
import TopBar from '@/components/common/molecules/TopBar';
import { TAB_NAME } from '@/constants/routeNames';
import { selectedDiaryAtom } from '@/templates/diary/DiaryTemplate/DiaryTemplateWrapped';
import QnaTemplate from '@/templates/qna/QnaTemplate';
import { useNavigation } from '@react-navigation/native';
import { atom, useAtom } from 'jotai';
import { useState } from 'react';
import { Pressable } from 'react-native';
import * as styles from './GratitudeJournalPage.style';

export const gratitudeJournalAtom = atom('');

export default function GratitudeJournalPage() {
  const [answer, setAnswer] = useState('');
  const [selectedDiary, setSelectedDiary] = useAtom(selectedDiaryAtom);

  const navigation = useNavigation();

  return (
    <styles.Container>
      <TopBar
        titleComponent={
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Arrow width={32} height={32} />
          </Pressable>
        }
      />
      <QnaTemplate
        question="Gratitude Journal"
        value={answer}
        onChangeText={(text) => {
          setAnswer(text);
        }}
        onPressNext={async () => {
          setSelectedDiary({ ...selectedDiary, gratitudeJournal: answer });
          navigation.goBack();
          navigation.navigate(TAB_NAME.Diary);
        }}
        keyboardVerticalOffset={56}
      />
    </styles.Container>
  );
}

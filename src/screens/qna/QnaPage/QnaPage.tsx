import Arrow from '@/assets/icons/Arrow';
import TopBar from '@/components/common/molecules/TopBar';
import { TAB_NAME } from '@/constants/routeNames';
import { postDiary } from '@/logics/server/diary';
import QnaTemplate from '@/templates/qna/QnaTemplate';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Pressable } from 'react-native';
import * as styles from './QnaPage.style';

const QUESTIONS = [
  'What happened today?',
  'What do you think?',
  'So how did you feel?',
  'How did you behave?',
  'How was the result?',
] as const;

export default function QnaPage({ route }) {
  const { firstAnswer } = route.params;

  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<string[]>([
    firstAnswer,
    '',
    '',
    '',
    '',
  ]);

  const navigation = useNavigation();

  return (
    <styles.Container>
      <TopBar
        titleComponent={
          <Pressable
            onPress={() => {
              if (step > 0) setStep(step - 1);
              else navigation.goBack();
            }}
          >
            <Arrow width={32} height={32} />
          </Pressable>
        }
      />
      <QnaTemplate
        question={QUESTIONS[step]}
        value={answers[step]}
        onChangeText={(text) => {
          const previousAnswers = [...answers];
          previousAnswers[step] = text;
          setAnswers(previousAnswers);
        }}
        onPressNext={async () => {
          if (step >= QUESTIONS.length - 1) {
            let finalDiary = '';
            answers.forEach((answer) => {
              finalDiary += answer;
            });
            const newDiary = await postDiary(finalDiary);
            console.log(newDiary);
            navigation.goBack();
            navigation.navigate(TAB_NAME.Diary);
          } else setStep(step + 1);
        }}
        keyboardVerticalOffset={56}
      />
    </styles.Container>
  );
}

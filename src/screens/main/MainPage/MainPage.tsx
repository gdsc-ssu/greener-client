import { NAVIGATOR_NAME, SCREEN_NAME } from '@/constants/routeNames';
import { userAtom } from '@/logics/atoms';
import MainTemplate from '@/templates/main/MainTemplate/MainTemplate';
import { useNavigation } from '@react-navigation/native';
import { useAtom } from 'jotai';
import * as styles from './MainPage.style';

export default function MainPage() {
  const navigation = useNavigation();
  const [user, setUser] = useAtom(userAtom);

  return (
    <styles.Container>
      <MainTemplate
        onPressNext={(text) => {
          navigation.navigate(NAVIGATOR_NAME.QnaStack, {
            screen: SCREEN_NAME.QnaPage,
            params: {
              firstAnswer: text,
            },
          });
        }}
        onPressProfile={() => {
          navigation.navigate('LoginModal');
        }}
        user={user}
      />
    </styles.Container>
  );
}

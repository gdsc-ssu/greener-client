import { NAVIGATOR_NAME, SCREEN_NAME } from '@/constants/routeNames';
import MainTemplate from '@/templates/main/MainTemplate/MainTemplate';
import { useNavigation } from '@react-navigation/native';
import * as styles from './MainPage.style';

export default function MainPage() {
  const navigation = useNavigation();

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
      />
    </styles.Container>
  );
}

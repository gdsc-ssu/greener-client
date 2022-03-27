import { GoogleLogin } from '@/components/common/molecules/SocialLogin';
import { COLORS } from '@/constants/styles/colors';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as styles from './LoginModal.style';

export default function LoginModal() {
  const navigation = useNavigation();

  return (
    <styles.Container>
      <styles.CloseArea
        onPress={() => {
          navigation.goBack();
        }}
      />
      <SafeAreaView
        edges={['bottom']}
        /* eslint-disable-next-line react-native/no-inline-styles */
        style={{ backgroundColor: COLORS.grayscale.gray0, paddingTop: 0 }}
      >
        <styles.LoginModal>
          <GoogleLogin />
        </styles.LoginModal>
      </SafeAreaView>
    </styles.Container>
  );
}

// wrapped component of `SocialLogin`

import { userAtom } from '@/logics/atoms';
import * as Google from 'expo-auth-session/providers/google';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import SocialLogin, { SOCIAL_TYPE } from './SocialLogin';

interface GoogleLoginProps {
  callback?: () => void;
}

export default function GoogleLogin({ callback }: GoogleLoginProps) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId:
      '1093543067326-s3br0phegpt3qjk2ovkfu2l6r39fa1dk.apps.googleusercontent.com',
    androidClientId:
      '1093543067326-0ops7ll2p6rp2rvkn9daj3qcgoa42hfi.apps.googleusercontent.com',
  });
  const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      setUser({
        profileImage:
          'https://jejuhydrofarms.com/wp-content/uploads/2020/05/blank-profile-picture-973460_1280.png',
      });
      if (callback) callback();
    }
  }, [response, setUser, callback]);

  return (
    <SocialLogin
      socialType={SOCIAL_TYPE.google}
      onPress={() => {
        promptAsync();
      }}
    />
  );
}

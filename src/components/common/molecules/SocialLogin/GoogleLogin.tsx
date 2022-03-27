// wrapped component of `SocialLogin`

import * as Google from 'expo-auth-session/providers/google';
import { useEffect } from 'react';
import SocialLogin, { SOCIAL_TYPE } from './SocialLogin';

export default function GoogleLogin() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId:
      '1093543067326-s3br0phegpt3qjk2ovkfu2l6r39fa1dk.apps.googleusercontent.com',
    androidClientId:
      '1093543067326-0ops7ll2p6rp2rvkn9daj3qcgoa42hfi.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      console.log(authentication);
    }
  }, [response]);

  return (
    <SocialLogin
      socialType={SOCIAL_TYPE.google}
      onPress={() => {
        promptAsync();
      }}
    />
  );
}

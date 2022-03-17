import { COLORS } from '@/constants/styles/colors';
import styled from '@emotion/native';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';

const Wrap = styled.View({
  backgroundColor: COLORS.grayscale.white,
  flex: 1,
  justifyContent: 'center',
});

interface StorybookWrapProps {
  children?: React.ReactNode;
}

export default function StorybookWrap({ children }: StorybookWrapProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        bold: require('../../../../assets/fonts/Pretendard-Bold.otf'),
        light: require('../../../../assets/fonts/Pretendard-Light.otf'),
        regular: require('../../../../assets/fonts/Pretendard-Regular.otf'),
        semibold: require('../../../../assets/fonts/Pretendard-SemiBold.otf'),
      });
      setLoaded(true);
    })();
  }, []);

  return loaded ? <Wrap>{children}</Wrap> : null;
}

import RootNavigator from '@/routes/RootNavigator';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import StorybookUIRoot from './storybook';

const { connectToDevTools } = require('react-devtools-core');

if (__DEV__) {
  connectToDevTools({
    host: 'localhost',
    port: 8097,
  });
}

const STORYBOOK_ENABLED = true;

function App() {
  const [loaded] = useFonts({
    bold: require('./assets/fonts/Pretendard-Bold.otf'),
    light: require('./assets/fonts/Pretendard-Light.otf'),
    regular: require('./assets/fonts/Pretendard-Regular.otf'),
    semibold: require('./assets/fonts/Pretendard-SemiBold.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <RootNavigator />
      <StatusBar style="auto" />
    </>
  );
}

export default STORYBOOK_ENABLED ? StorybookUIRoot : App;

import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StorybookUIRoot from './storybook';

const { connectToDevTools } = require('react-devtools-core');

if (__DEV__) {
  connectToDevTools({
    host: 'localhost',
    port: 8097,
  });
}

const STORYBOOK_ENABLED = true;
const COLOR = '#fff';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLOR,
    flex: 1,
    justifyContent: 'center',
  },
});

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
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default STORYBOOK_ENABLED ? StorybookUIRoot : App;
